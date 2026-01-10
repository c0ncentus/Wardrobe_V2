import React, { useEffect } from 'react';
import type { ModalProps } from './Modal.types';

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  full: 'max-w-7xl',
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnBackdrop = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeOnBackdrop ? onClose : undefined}
      />
      
      {/* Modal */}
      <div
        className={`
          relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl 
          border border-slate-700/50 ${sizeClasses[size]} w-full max-h-[90vh] 
          overflow-hidden animate-slideUp flex flex-col
        `.trim()}
      >
        {/* Header */}
        {title && (
          <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700/50 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};