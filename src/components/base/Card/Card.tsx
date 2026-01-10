import React from 'react';
import type { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  gradient = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-2xl border overflow-hidden transition-all';
  const bgClass = gradient 
    ? 'bg-gradient-to-br from-slate-900/50 to-slate-800/50' 
    : 'bg-slate-900/50';
  const borderClass = 'border-slate-700/50';
  const hoverClass = hover 
    ? 'hover:border-slate-600/50 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer' 
    : '';
  
  return (
    <div
      className={`
        ${baseClasses}
        ${bgClass}
        ${borderClass}
        ${hoverClass}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
};