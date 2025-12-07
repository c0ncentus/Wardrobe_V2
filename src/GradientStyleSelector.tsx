import React from 'react';
import { StyleType } from './types';
import { getStyleOptions } from './staticData';

interface GradientStyleSelectorProps {
  value: StyleType;
  onChange: (value: StyleType) => void;
}

const STYLE_GRADIENTS: Record<string, { gradient: string; colors: string[] }> = {
  gothic: { gradient: 'from-gray-900 via-purple-900 to-black', colors: ['#111827', '#581c87', '#000000'] },
  grunge: { gradient: 'from-stone-700 via-zinc-800 to-slate-900', colors: ['#44403c', '#27272a', '#0f172a'] },
  'y2k': { gradient: 'from-pink-400 via-purple-400 to-blue-400', colors: ['#f472b6', '#c084fc', '#60a5fa'] },
  emo: { gradient: 'from-black via-pink-600 to-purple-900', colors: ['#000000', '#db2777', '#581c87'] },
  punk: { gradient: 'from-red-600 via-black to-yellow-500', colors: ['#dc2626', '#000000', '#eab308'] },
  alt: { gradient: 'from-indigo-500 via-purple-500 to-pink-500', colors: ['#6366f1', '#a855f7', '#ec4899'] },
  vintage: { gradient: 'from-amber-600 via-orange-500 to-red-600', colors: ['#d97706', '#f97316', '#dc2626'] },
  streetwear: { gradient: 'from-gray-800 via-slate-700 to-zinc-800', colors: ['#1f2937', '#334155', '#27272a'] },
  casual: { gradient: 'from-blue-400 via-sky-300 to-cyan-400', colors: ['#60a5fa', '#7dd3fc', '#22d3ee'] },
  elegant: { gradient: 'from-rose-500 via-pink-400 to-purple-500', colors: ['#f43f5e', '#f472b6', '#a855f7'] },
  boheme: { gradient: 'from-yellow-500 via-orange-400 to-red-500', colors: ['#eab308', '#fb923c', '#ef4444'] },
  romantique: { gradient: 'from-pink-300 via-rose-400 to-red-400', colors: ['#f9a8d4', '#fb7185', '#f87171'] },
  minimaliste: { gradient: 'from-gray-300 via-slate-400 to-zinc-500', colors: ['#d1d5db', '#94a3b8', '#71717a'] },
  preppy: { gradient: 'from-blue-500 via-white to-red-500', colors: ['#3b82f6', '#ffffff', '#ef4444'] },
  sportswear: { gradient: 'from-green-500 via-lime-400 to-yellow-500', colors: ['#22c55e', '#a3e635', '#eab308'] },
  glamour: { gradient: 'from-purple-500 via-pink-500 to-gold-500', colors: ['#a855f7', '#ec4899', '#fbbf24'] },
  autre: { gradient: 'from-slate-600 via-gray-500 to-zinc-600', colors: ['#475569', '#6b7280', '#52525b'] },
};

export const GradientStyleSelector: React.FC<GradientStyleSelectorProps> = ({ value, onChange }) => {
  const styleConfig = STYLE_GRADIENTS[value] || STYLE_GRADIENTS.autre;
  
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Style
      </label>
      
      {/* Animated Gradient Preview */}
      <div className="mb-3 h-16 rounded-lg overflow-hidden relative">
        <div 
          className={`absolute inset-0 bg-gradient-to-r ${styleConfig.gradient} animate-gradient-wave`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg drop-shadow-lg">
            {getStyleOptions().find(s => s.value === value)?.label}
          </span>
        </div>
      </div>
      
      {/* Style Selector */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as StyleType)}
        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
      >
        {getStyleOptions().map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      
      {/* Color Palette */}
      <div className="flex gap-2 mt-2">
        {styleConfig.colors.map((color, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-2 border-slate-700"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes gradient-wave {
          0% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 200% 200%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
        }
        
        .animate-gradient-wave {
          animation: gradient-wave 3s ease infinite;
        }
      `}</style>
    </div>
  );
};
