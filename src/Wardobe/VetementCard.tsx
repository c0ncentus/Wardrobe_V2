import React from 'react';
import { Vetement } from './types';
import { COLORS, MATERIALS } from '../config/wardobe/materials.ts';
import { getClothingItemLabel } from '../config/wardobe/taxonomy';

interface VetementCardProps {
  vetement: Vetement;
  onEdit: (vetement: Vetement) => void;
  onDelete: (id: string) => void;
  onDragStart?: (e: React.DragEvent, vetement: Vetement) => void;
  onDragEnd?: (e: React.DragEvent) => void;
}

export const VetementCard: React.FC<VetementCardProps> = ({
  vetement,
  onEdit,
  onDelete,
  onDragStart,
  onDragEnd,
}) => {
  const styleColorKey = vetement.style as keyof typeof COLORS.styleColors;
  const styleColor = COLORS.styleColors[styleColorKey] || COLORS.styleColors['autre'];

  const handleDragStart = (e: React.DragEvent) => {
    if (onDragStart) {
      onDragStart(e, vetement);
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 cursor-move"
    >
      {/* Style indicator */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${styleColor.gradient}`} />
      
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-950/50">
        {vetement.image ? (
          <img
            src={vetement.image}
            alt={vetement.titre}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <button
            onClick={() => onEdit(vetement)}
            className="bg-slate-800/90 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors backdrop-blur-sm"
          >
            Modifier
          </button>
          <button
            onClick={() => onDelete(vetement.id)}
            className="bg-red-900/90 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors backdrop-blur-sm"
          >
            Supprimer
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and link */}
        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-1 line-clamp-1">
            {vetement.titre}
          </h3>
          {vetement.lien && (
            <a
              href={vetement.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Voir le lien</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {/* Description */}
        {vetement.description && (
          <p className="text-sm text-slate-400 line-clamp-2">
            {vetement.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-md text-xs text-slate-300">
            {getClothingItemLabel(vetement.type)}
          </span>
          <span className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-md text-xs text-slate-300">
            {vetement.partie}
          </span>
          <span className={`px-2 py-1 border rounded-md text-xs ${styleColor.bg} ${styleColor.border} ${styleColor.text}`}>
            {vetement.style}
          </span>
          {vetement.estTenueComplete && (
            <span className="px-2 py-1 bg-emerald-900/30 border border-emerald-700/30 rounded-md text-xs text-emerald-300">
              Tenue complète
            </span>
          )}
        </div>

        {/* Materials */}
        {vetement.materials && vetement.materials.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {vetement.materials.slice(0, 3).map((mat) => (
              <span
                key={mat}
                className="px-2 py-0.5 bg-slate-700/30 border border-slate-600/30 rounded text-xs text-slate-400"
              >
                {MATERIALS[mat as keyof typeof MATERIALS]?.label || mat}
              </span>
            ))}
            {vetement.materials.length > 3 && (
              <span className="px-2 py-0.5 text-xs text-slate-500">
                +{vetement.materials.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Collections count */}
        {vetement.collections.length > 0 && (
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>{vetement.collections.length} collection{vetement.collections.length > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
};
