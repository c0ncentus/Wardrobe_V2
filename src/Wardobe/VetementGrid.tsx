import React, { useState } from 'react';
import { Vetement, FilterState } from './types';
import { VetementCard } from './VetementCard';
import { filterVetements } from './utils';
import { getStyleOptions, getPartieOptions } from '../config/wardobe/materials.ts';
import { getAllClothingItems } from '../config/wardobe/taxonomy';

interface VetementGridProps {
  vetements: Vetement[];
  onEdit: (vetement: Vetement) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
}

export const VetementGrid: React.FC<VetementGridProps> = ({
  vetements,
  onEdit,
  onDelete,
  onCreate,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    style: 'tous',
    type: 'tous',
    partie: 'tous',
    estTenueComplete: 'tous',
  });

  const [draggedItem, setDraggedItem] = useState<Vetement | null>(null);

  const filteredVetements = filterVetements(vetements, filters);

  const handleDragStart = (e: React.DragEvent, vetement: Vetement) => {
    setDraggedItem(vetement);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      style: 'tous',
      type: 'tous',
      partie: 'tous',
      estTenueComplete: 'tous',
    });
  };

  const hasActiveFilters = 
    filters.search !== '' ||
    filters.style !== 'tous' ||
    filters.type !== 'tous' ||
    filters.partie !== 'tous' ||
    filters.estTenueComplete !== 'tous';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-1">
            Ma Garde-robe
          </h1>
          <p className="text-slate-400">
            {filteredVetements.length} vêtement{filteredVetements.length !== 1 ? 's' : ''}
            {hasActiveFilters && ` (${vetements.length} total)`}
          </p>
        </div>
        <button
          onClick={onCreate}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nouveau vêtement
        </button>
      </div>

      {/* Filters */}
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtres
          </h2>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Réinitialiser
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="lg:col-span-2">
            <input
              type="text"
              placeholder="Rechercher..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>

          {/* Style filter */}
          <div>
            <select
              value={filters.style}
              onChange={(e) => setFilters({ ...filters, style: e.target.value as any })}
              className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            >
              <option value="tous">Tous les styles</option>
              {getStyleOptions().map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Type filter */}
          <div>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value as any })}
              className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            >
              <option value="tous">Tous les types</option>
              {getAllClothingItems().map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Partie filter */}
          <div>
            <select
              value={filters.partie}
              onChange={(e) => setFilters({ ...filters, partie: e.target.value as any })}
              className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            >
              <option value="tous">Toutes les parties</option>
              {getPartieOptions().map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Complete outfit filter */}
        <div className="mt-4 flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="complete"
              checked={filters.estTenueComplete === 'tous'}
              onChange={() => setFilters({ ...filters, estTenueComplete: 'tous' })}
              className="w-4 h-4 text-purple-600 focus:ring-2 focus:ring-purple-500/20"
            />
            <span className="text-sm text-slate-300">Tous</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="complete"
              checked={filters.estTenueComplete === true}
              onChange={() => setFilters({ ...filters, estTenueComplete: true })}
              className="w-4 h-4 text-purple-600 focus:ring-2 focus:ring-purple-500/20"
            />
            <span className="text-sm text-slate-300">Tenue complète uniquement</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="complete"
              checked={filters.estTenueComplete === false}
              onChange={() => setFilters({ ...filters, estTenueComplete: false })}
              className="w-4 h-4 text-purple-600 focus:ring-2 focus:ring-purple-500/20"
            />
            <span className="text-sm text-slate-300">Pièces séparées uniquement</span>
          </label>
        </div>
      </div>

      {/* Grid */}
      {filteredVetements.length === 0 ? (
        <div className="text-center py-16">
          <svg className="w-16 h-16 mx-auto text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p className="text-slate-400 text-lg mb-2">
            {hasActiveFilters ? 'Aucun vêtement trouvé' : 'Aucun vêtement'}
          </p>
          <p className="text-slate-500 text-sm">
            {hasActiveFilters ? 'Essayez de modifier vos filtres' : 'Commencez par ajouter votre premier vêtement'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVetements.map((vetement) => (
            <VetementCard
              key={vetement.id}
              vetement={vetement}
              onEdit={onEdit}
              onDelete={onDelete}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </div>
      )}
    </div>
  );
};
