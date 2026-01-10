import React from 'react';
import type { SelectProps } from './Select.types';

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  placeholder,
  fullWidth = true,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-4 py-2.5 bg-slate-800/50 border rounded-lg text-slate-100 focus:outline-none focus:ring-2 transition-all appearance-none';
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
        <select
          className={`
            ${baseClasses}
            ${borderClass}
            ${widthClass}
            ${className}
          `.trim()}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
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