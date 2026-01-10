/**
 * Palette couleurs complète pour l'app Wardrobe
 */

export const COLORS = {
  background: {
    primary: '#020617',
    secondary: '#0f172a',
    tertiary: '#1e293b',
    card: '#334155',
  },
  
  accent: {
    purple: {
      light: '#a78bfa',
      DEFAULT: '#9333ea',
      dark: '#7e22ce',
    },
    pink: {
      light: '#f9a8d4',
      DEFAULT: '#db2777',
      dark: '#be185d',
    },
  },
  
  gradient: {
    primary: 'from-purple-600 to-pink-600',
    card: 'from-slate-900 to-slate-800',
    hover: 'from-purple-500 to-pink-500',
  },
  
  text: {
    primary: '#f1f5f9',
    secondary: '#cbd5e1',
    muted: '#94a3b8',
    disabled: '#64748b',
  },
  
  border: {
    DEFAULT: '#334155',
    light: 'rgba(51, 65, 85, 0.5)',
    focus: '#9333ea',
  },
  
  semantic: {
    success: '#059669',
    error: '#991b1b',
    warning: '#d97706',
    info: '#0284c7',
  },
  
  styleColors: {
    'gothic': {
      gradient: 'from-black/40 to-slate-900/40',
      border: 'border-slate-600/30',
      text: 'text-slate-200',
      bg: 'bg-black/30',
    },
    'kawaii': {
      gradient: 'from-pink-900/20 to-purple-900/20',
      border: 'border-pink-700/30',
      text: 'text-pink-300',
      bg: 'bg-pink-900/30',
    },
    'romantique': {
      gradient: 'from-rose-900/20 to-pink-900/20',
      border: 'border-rose-700/30',
      text: 'text-rose-300',
      bg: 'bg-rose-900/30',
    },
    'streetwear': {
      gradient: 'from-orange-900/20 to-yellow-900/20',
      border: 'border-orange-700/30',
      text: 'text-orange-300',
      bg: 'bg-orange-900/30',
    },
    'elegant': {
      gradient: 'from-rose-900/20 to-pink-900/20',
      border: 'border-rose-700/30',
      text: 'text-rose-300',
      bg: 'bg-rose-900/30',
    },
    'boheme': {
      gradient: 'from-amber-900/20 to-orange-900/20',
      border: 'border-amber-700/30',
      text: 'text-amber-300',
      bg: 'bg-amber-900/30',
    },
    'minimaliste': {
      gradient: 'from-gray-900/20 to-slate-900/20',
      border: 'border-gray-700/30',
      text: 'text-gray-300',
      bg: 'bg-gray-900/30',
    },
    'autre': {
      gradient: 'from-slate-600 via-gray-500 to-zinc-600',
      border: 'border-gray-700/30',
      text: 'text-gray-300',
      bg: 'bg-gray-900/30',
    },
  },
} as const;