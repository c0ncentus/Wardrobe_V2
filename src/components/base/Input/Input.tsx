import React from 'react';
import type { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  icon,
  iconPosition = 'left',
  fullWidth = true,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-4 py-2.5 bg-slate-800/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all';
  const borderClass = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
    : 'border-slate-700 focus:border-purple-500 focus:ring-purple-500/20';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <div className={widthClass}>
      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        
        <input
          className={`
            ${baseClasses}
            ${borderClass}
            ${widthClass}
            ${icon && iconPosition === 'left' ? 'pl-10' : ''}
            ${icon && iconPosition === 'right' ? 'pr-10' : ''}
            ${className}
          `.trim()}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-400 mt-1">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="text-xs text-slate-500 mt-1">{helperText}</p>
      )}
    </div>
  );
};