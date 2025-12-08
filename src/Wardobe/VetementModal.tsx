import React, { useState, useEffect } from 'react';
import { Vetement } from './types';
import { generateId, now, fileToBase64, fetchUrlMetadata, getPartieFromType, parseProductTitle } from './utils';
import { getStyleOptions, getMaterialOptions, getPartieOptions } from './staticData';
import { ClothingTreeSelect } from './ClothingTreeSelect';
import { GradientStyleSelector } from './GradientStyleSelector';

interface VetementModalProps {
  isOpen: boolean;
  vetement: Vetement | null;
  onClose: () => void;
  onSave: (vetement: Vetement) => void;
}

export const VetementModal: React.FC<VetementModalProps> = ({
  isOpen,
  vetement,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Partial<Vetement>>({
    titre: '',
    lien: '',
    image: '',
    description: '',
    style: 'autre',
    estTenueComplete: false,
    type: 'tshirt-basic',
    partie: 'Top',
    materials: [],
    collections: [],
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);

  useEffect(() => {
    if (vetement) {
      setFormData(vetement);
    } else {
      setFormData({
        titre: '',
        lien: '',
        image: '',
        description: '',
        style: 'autre',
        estTenueComplete: false,
        type: 'tshirt-basic',
        partie: 'Top',
        materials: [],
        collections: [],
      });
    }
    setImageFile(null);
  }, [vetement, isOpen]);

  // Smart parse title when changed
  const handleTitreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titre = e.target.value;
    setFormData(prev => {
      const parsed = parseProductTitle(titre);
      const newData = { ...prev, titre };
      
      // Auto-fill type if detected and current is empty/default
      if (parsed.type && (prev.type === 'tshirt-basic' || !prev.type)) {
        newData.type = parsed.type;
        newData.partie = getPartieFromType(parsed.type);
      }
      
      // Add detected materials
      if (parsed.materials.length > 0) {
        newData.materials = [...new Set([...(prev.materials || []), ...parsed.materials as any[]])];
      }
      
      // Set style if detected
      if (parsed.styles.length > 0 && (prev.style === 'autre' || !prev.style)) {
        newData.style = parsed.styles[0] as any;
      }
      
      return newData;
    });
  };

  // Fetch metadata when URL is pasted
  const handleLienChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setFormData({ ...formData, lien: url });

    // Only fetch if it's a valid URL
    if (url && url.match(/^https?:\/\/.+/)) {
      setIsLoadingMetadata(true);
      try {
        const metadata = await fetchUrlMetadata(url);
        setFormData(prev => {
          const newData = {
            ...prev,
            lien: url,
            // Only overwrite if fields are empty
            titre: prev.titre || metadata.titre || '',
            description: prev.description || metadata.description || '',
            image: prev.image || metadata.image || '',
          };
          
          // Add materials if found
          if (metadata.materials && metadata.materials.length > 0) {
            newData.materials = [...new Set([...(prev.materials || []), ...metadata.materials])];
          }
          
          // Add type if found and auto-set partie
          if (metadata.type && !prev.type) {
            newData.type = metadata.type;
            newData.partie = getPartieFromType(metadata.type);
          }
          
          return newData;
        });
      } catch (error) {
        console.error('Error fetching metadata:', error);
      } finally {
        setIsLoadingMetadata(false);
      }
    }
  };

  // Auto-update partie when type changes
  const handleTypeChange = (newType: string) => {
    const autoPart = getPartieFromType(newType);
    setFormData({ 
      ...formData, 
      type: newType,
      partie: autoPart
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const base64 = await fileToBase64(file);
      setFormData({ ...formData, image: base64 });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const timestamp = now();
    const savedVetement: Vetement = {
      id: vetement?.id || generateId(),
      titre: formData.titre || '',
      lien: formData.lien || '',
      image: formData.image || '',
      description: formData.description || '',
      style: formData.style || 'autre',
      estTenueComplete: formData.estTenueComplete || false,
      type: formData.type || 'tshirt-basic',
      partie: formData.partie || 'Top',
      materials: formData.materials || [],
      collections: formData.collections || [],
      createdAt: vetement?.createdAt || timestamp,
      updatedAt: timestamp,
    };
    
    onSave(savedVetement);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-100">
            {vetement ? 'Modifier le vêtement' : 'Nouveau vêtement'}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Image
            </label>
            <div className="flex gap-4">
              {formData.image && (
                <div className="w-32 h-32 rounded-lg overflow-hidden border border-slate-700">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="block w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-colors cursor-pointer text-center"
                >
                  {imageFile ? imageFile.name : 'Choisir une image'}
                </label>
                <input
                  type="url"
                  placeholder="Ou coller une URL d'image"
                  value={formData.image?.startsWith('http') ? formData.image : ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="mt-2 w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Titre */}
          <div>
            <label htmlFor="titre" className="block text-sm font-medium text-slate-300 mb-2">
              Titre * 
              {formData.titre && formData.titre.length > 10 && (
                <span className="text-xs text-purple-400 ml-2">✨ Auto-détection activée</span>
              )}
            </label>
            <input
              type="text"
              id="titre"
              required
              value={formData.titre}
              onChange={handleTitreChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              placeholder="Gothic Hollow Out Top: Y2K Grunge See Through T-Shirt"
            />
            <p className="text-xs text-slate-500 mt-1">
              💡 Détecte automatiquement: type, matériaux, style
            </p>
          </div>

          {/* Lien */}
          <div>
            <label htmlFor="lien" className="block text-sm font-medium text-slate-300 mb-2">
              Lien {isLoadingMetadata && <span className="text-purple-400 text-xs ml-2">⟳ Analyse en cours...</span>}
            </label>
            <input
              type="url"
              id="lien"
              value={formData.lien}
              onChange={handleLienChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              placeholder="https://example.com/produit"
            />
            <p className="text-xs text-slate-500 mt-1">
              💡 Détecte automatiquement: titre, description, image, type, matériaux
            </p>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
              placeholder="Décrivez ce vêtement..."
            />
          </div>

          {/* Grid for select fields */}
          <div className="grid grid-cols-2 gap-4">
            {/* Style with Gradient */}
            <GradientStyleSelector
              value={formData.style || 'autre'}
              onChange={(style) => setFormData({ ...formData, style })}
            />

            {/* Partie (Auto-filled) */}
            <div>
              <label htmlFor="partie" className="block text-sm font-medium text-slate-300 mb-2">
                Partie (Auto)
              </label>
              <select
                id="partie"
                value={formData.partie}
                onChange={(e) => setFormData({ ...formData, partie: e.target.value as any })}
                className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-lg text-slate-300 focus:outline-none cursor-not-allowed"
                disabled
                title="Auto-rempli selon le type de vêtement"
              >
                {getPartieOptions().map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-500 mt-1">
                🔄 Rempli automatiquement selon le type
              </p>
            </div>
          </div>

          {/* Type de vêtement */}
          <div>
            <ClothingTreeSelect
              value={formData.type || ''}
              onChange={handleTypeChange}
            />
            <p className="text-xs text-slate-500 mt-2">
              Auto-partie: <span className="text-purple-400 font-medium">{formData.partie}</span>
            </p>
          </div>

          {/* Matériaux */}
          <div>
            <label htmlFor="materials" className="block text-sm font-medium text-slate-300 mb-2">
              Matériaux (maintenir Ctrl/Cmd pour sélectionner plusieurs)
            </label>
            <select
              id="materials"
              multiple
              value={formData.materials}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions, option => option.value);
                setFormData({ ...formData, materials: selected as any });
              }}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all h-32"
            >
              {getMaterialOptions().map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label} - {opt.category}
                </option>
              ))}
            </select>
            {formData.materials && formData.materials.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.materials.map((mat, index) => (
                  <span
                    key={`${mat}-${index}`}
                    className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded-md text-xs text-slate-300 flex items-center gap-1"
                  >
                    {getMaterialOptions().find(m => m.value === mat)?.label}
                    <button
                      type="button"
                      onClick={() => setFormData({ 
                        ...formData, 
                        materials: formData.materials?.filter((m, i) => i !== index) || []
                      })}
                      className="text-slate-400 hover:text-slate-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Complete outfit checkbox */}
          <div className="flex items-center">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.estTenueComplete}
                onChange={(e) => setFormData({ ...formData, estTenueComplete: e.target.checked })}
                className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-purple-600 focus:ring-2 focus:ring-purple-500/20"
              />
              <span className="text-sm font-medium text-slate-300">Tenue complète</span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20"
            >
              {vetement ? 'Mettre à jour' : 'Créer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
