import React, { useState } from 'react';
import { Collection, Vetement } from './types';
import { generateId, now } from './utils';
import { CollectionPageBuilder, CollectionPage } from './CollectionPageBuilder';
import { CollectionPageViewer } from './CollectionPageViewer';

interface CollectionViewProps {
  collections: Collection[];
  vetements: Vetement[];
  onSave: (collection: Collection) => void;
  onDelete: (id: string) => void;
  onBack: () => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  collections,
  vetements,
  onSave,
  onDelete,
  onBack,
}) => {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [viewingCollection, setViewingCollection] = useState<Collection | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPage, setIsEditingPage] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'page'>('list');
  const [formData, setFormData] = useState<Partial<Collection>>({
    titre: '',
    vetements: [],
    text: '',
    page: undefined,
  });

  const handleCreate = () => {
    setFormData({ titre: '', vetements: [], text: '', page: undefined });
    setSelectedCollection(null);
    setIsEditing(true);
  };

  const handleEdit = (collection: Collection) => {
    setFormData(collection);
    setSelectedCollection(collection);
    setIsEditing(true);
  };

  const handleSave = () => {
    const timestamp = now();
    const savedCollection: Collection = {
      id: selectedCollection?.id || generateId(),
      titre: formData.titre || 'Sans titre',
      vetements: formData.vetements || [],
      text: formData.text || '',
      page: formData.page,
      createdAt: selectedCollection?.createdAt || timestamp,
      updatedAt: timestamp,
    };
    
    onSave(savedCollection);
    setIsEditing(false);
    setSelectedCollection(null);
  };

  const handleSavePage = (page: CollectionPage) => {
    setFormData({ ...formData, page });
    setIsEditingPage(false);
  };

  const handleToggleVetement = (vetementId: string) => {
    const current = formData.vetements || [];
    const updated = current.includes(vetementId)
      ? current.filter(id => id !== vetementId)
      : [...current, vetementId];
    setFormData({ ...formData, vetements: updated });
  };

  const getVetementById = (id: string) => vetements.find(v => v.id === id);

  // View collection detail
  if (viewingCollection) {
    const collectionVetements = vetements.filter(v => viewingCollection.vetements.includes(v.id));
    
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewingCollection(null)}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-slate-100">{viewingCollection.titre}</h1>
        </div>

        {/* Toggle view mode if page exists */}
        {viewingCollection.page && (
          <div className="flex gap-2 bg-slate-800/50 p-1 rounded-lg w-fit">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Liste
            </button>
            <button
              onClick={() => setViewMode('page')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'page'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Page
            </button>
          </div>
        )}

        {/* Content */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
          {viewMode === 'page' && viewingCollection.page ? (
            <CollectionPageViewer
              page={viewingCollection.page}
              vetements={collectionVetements}
            />
          ) : (
            <div className="space-y-6">
              {/* Notes */}
              {viewingCollection.text && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3">Notes</h3>
                  <div className="text-slate-300 whitespace-pre-wrap font-mono text-sm bg-slate-900/50 p-4 rounded-lg">
                    {viewingCollection.text}
                  </div>
                </div>
              )}

              {/* Vetements */}
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3">
                  Vêtements ({collectionVetements.length})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {collectionVetements.map((vetement) => (
                    <div
                      key={vetement.id}
                      className="bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700 hover:border-slate-600 transition-all"
                    >
                      <div className="aspect-square">
                        {vetement.image ? (
                          <img src={vetement.image} alt={vetement.titre} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                            <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium text-slate-300 truncate">{vetement.titre}</p>
                        <p className="text-xs text-slate-500 mt-1">{vetement.partie}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsEditing(false)}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-slate-100">
            {selectedCollection ? 'Modifier la collection' : 'Nouvelle collection'}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Collection info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
              <h2 className="text-lg font-semibold text-slate-100 mb-4">Informations</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Titre de la collection
                  </label>
                  <input
                    type="text"
                    value={formData.titre}
                    onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Ex: Tenue soirée gothique"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Notes (Markdown)
                  </label>
                  <textarea
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    rows={10}
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none font-mono text-sm"
                    placeholder="## Notes&#10;&#10;- Point 1&#10;- Point 2"
                  />
                </div>

                <div>
                  <button
                    onClick={() => setIsEditingPage(true)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    {formData.page ? 'Modifier la page visuelle' : 'Créer une page visuelle'}
                  </button>
                  {formData.page && (
                    <p className="text-xs text-green-400 mt-2 text-center">
                      ✓ Page visuelle créée ({formData.page.blocks.length} blocs)
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20"
                  >
                    Sauvegarder
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vetement selector */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
              <h2 className="text-lg font-semibold text-slate-100 mb-4">
                Sélectionner les vêtements ({formData.vetements?.length || 0})
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2">
                {vetements.map((vetement) => {
                  const isSelected = formData.vetements?.includes(vetement.id);
                  return (
                    <button
                      key={vetement.id}
                      onClick={() => handleToggleVetement(vetement.id)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                        isSelected
                          ? 'border-purple-500 ring-2 ring-purple-500/30'
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="aspect-square">
                        {vetement.image ? (
                          <img src={vetement.image} alt={vetement.titre} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                            <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                        <p className="text-xs text-white font-medium line-clamp-1">{vetement.titre}</p>
                      </div>
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-1">Collections</h1>
            <p className="text-slate-400">{collections.length} collection{collections.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <button
          onClick={handleCreate}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nouvelle collection
        </button>
      </div>

      {/* Collections list */}
      {collections.length === 0 ? (
        <div className="text-center py-16">
          <svg className="w-16 h-16 mx-auto text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p className="text-slate-400 text-lg mb-2">Aucune collection</p>
          <p className="text-slate-500 text-sm">Créez votre première collection de tenues</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all"
            >
              {/* Collection items preview */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-950/50">
                {collection.vetements.slice(0, 6).map((vetementId) => {
                  const vetement = getVetementById(vetementId);
                  return vetement ? (
                    <div key={vetementId} className="aspect-square rounded overflow-hidden">
                      {vetement.image ? (
                        <img src={vetement.image} alt={vetement.titre} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-800" />
                      )}
                    </div>
                  ) : null;
                })}
                {collection.vetements.length === 0 && (
                  <div className="col-span-3 aspect-square flex items-center justify-center text-slate-600">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Collection info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{collection.titre}</h3>
                <p className="text-sm text-slate-400 mb-4">
                  {collection.vetements.length} vêtement{collection.vetements.length !== 1 ? 's' : ''}
                </p>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewingCollection(collection)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Voir
                  </button>
                  <button
                    onClick={() => handleEdit(collection)}
                    className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => onDelete(collection.id)}
                    className="px-4 py-2 bg-red-900/50 hover:bg-red-900 text-red-300 rounded-lg text-sm font-medium transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Page Builder Modal */}
      {isEditingPage && (
        <CollectionPageBuilder
          vetements={vetements.filter(v => formData.vetements?.includes(v.id))}
          initialPage={formData.page}
          onSave={handleSavePage}
          onCancel={() => setIsEditingPage(false)}
        />
      )}
    </div>
  );
};
