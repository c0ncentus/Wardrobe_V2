import React, { useState, useEffect, useRef } from 'react';
import { Vetement, Collection, ViewMode } from './Wardobe/types';
import { VetementGrid } from './Wardobe/VetementGrid';
import { VetementModal } from './Wardobe/VetementModal';
import { CollectionView } from './Wardobe/CollectionView';
import {
  loadVetements,
  saveVetements,
  loadCollections,
  saveCollections,
  exportData,
  importData,
} from './Wardobe/utils';

export const Wardrobe: React.FC = () => {
  const [vetements, setVetements] = useState<Vetement[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('vetements');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVetement, setSelectedVetement] = useState<Vetement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load data on mount
  useEffect(() => {
    setVetements(loadVetements());
    setCollections(loadCollections());
  }, []);

  // Save vetements when they change
  useEffect(() => {
    saveVetements(vetements);
  }, [vetements]);

  // Save collections when they change
  useEffect(() => {
    saveCollections(collections);
  }, [collections]);

  const handleCreateVetement = () => {
    setSelectedVetement(null);
    setIsModalOpen(true);
  };

  const handleEditVetement = (vetement: Vetement) => {
    setSelectedVetement(vetement);
    setIsModalOpen(true);
  };

  const handleSaveVetement = (vetement: Vetement) => {
    if (selectedVetement) {
      // Update existing
      setVetements(vetements.map(v => v.id === vetement.id ? vetement : v));
    } else {
      // Create new
      setVetements([...vetements, vetement]);
    }
  };

  const handleDeleteVetement = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce vêtement ?')) {
      setVetements(vetements.filter(v => v.id !== id));
      // Remove from collections
      setCollections(collections.map(c => ({
        ...c,
        vetements: c.vetements.filter(vId => vId !== id),
      })));
    }
  };

  const handleSaveCollection = (collection: Collection) => {
    const exists = collections.find(c => c.id === collection.id);
    if (exists) {
      setCollections(collections.map(c => c.id === collection.id ? collection : c));
    } else {
      setCollections([...collections, collection]);
    }
  };

  const handleDeleteCollection = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette collection ?')) {
      setCollections(collections.filter(c => c.id !== id));
    }
  };

  const handleExport = () => {
    exportData(vetements, collections);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const data = await importData(file);
      if (confirm('Voulez-vous remplacer toutes vos données actuelles par les données importées ?')) {
        setVetements(data.vetements);
        setCollections(data.collections);
      }
    } catch (error) {
      alert('Erreur lors de l\'importation du fichier. Vérifiez que le format est correct.');
      console.error(error);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-slate-100">Wardrobe</h1>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('vetements')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'vetements'
                    ? 'bg-slate-700 text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                Vêtements
              </button>
              <button
                onClick={() => setViewMode('collections')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'collections'
                    ? 'bg-slate-700 text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                Collections
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleImportClick}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Importer
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Exporter
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'vetements' ? (
          <VetementGrid
            vetements={vetements}
            onEdit={handleEditVetement}
            onDelete={handleDeleteVetement}
            onCreate={handleCreateVetement}
          />
        ) : (
          <CollectionView
            collections={collections}
            vetements={vetements}
            onSave={handleSaveCollection}
            onDelete={handleDeleteCollection}
            onBack={() => setViewMode('vetements')}
          />
        )}
      </main>

      {/* Modal */}
      <VetementModal
        isOpen={isModalOpen}
        vetement={selectedVetement}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveVetement}
      />

      {/* Hidden file input for import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
      />
    </div>
  );
};
