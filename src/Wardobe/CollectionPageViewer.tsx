import React, { JSX } from 'react';
import { Vetement } from './types';
import { CollectionPage, PageBlock } from './CollectionPageBuilder';

interface CollectionPageViewerProps {
  page: CollectionPage;
  vetements: Vetement[];
}

export const CollectionPageViewer: React.FC<CollectionPageViewerProps> = ({ page, vetements }) => {
  const renderBlock = (block: PageBlock) => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.content.level}` as keyof JSX.IntrinsicElements;
        const headingSizes = {
          1: 'text-4xl md:text-5xl',
          2: 'text-3xl md:text-4xl',
          3: 'text-2xl md:text-3xl',
        };
        return (
          <HeadingTag 
            key={block.id}
            className={`font-bold text-slate-100 text-${block.content.align} ${headingSizes[block.content.level as keyof typeof headingSizes] || 'text-2xl'}`}
          >
            {block.content.text}
          </HeadingTag>
        );
      
      case 'text':
        const textSizes = {
          sm: 'text-sm',
          base: 'text-base',
          lg: 'text-lg',
        };
        return (
          <p 
            key={block.id}
            className={`text-slate-300 text-${block.content.align} ${textSizes[block.content.size as keyof typeof textSizes] || 'text-base'} leading-relaxed`}
          >
            {block.content.text}
          </p>
        );
      
      case 'image':
        if (!block.content.src) return null;
        const imageWidths = {
          full: 'w-full',
          half: 'w-full md:w-1/2 mx-auto',
          third: 'w-full md:w-1/3 mx-auto',
        };
        return (
          <div key={block.id} className={imageWidths[block.content.width as keyof typeof imageWidths] || 'w-full'}>
            <img 
              src={block.content.src} 
              alt={block.content.alt || ''}
              className="rounded-lg shadow-xl"
            />
          </div>
        );
      
      case 'gallery':
        const columnClasses = {
          2: 'grid-cols-1 md:grid-cols-2',
          3: 'grid-cols-2 md:grid-cols-3',
          4: 'grid-cols-2 md:grid-cols-4',
        };
        return (
          <div 
            key={block.id}
            className={`grid gap-4 ${columnClasses[block.content.columns as keyof typeof columnClasses] || 'grid-cols-3'}`}
          >
            {block.content.vetementIds.map((id: string) => {
              const v = vetements.find(v => v.id === id);
              return v ? (
                <div key={id} className="group rounded-lg overflow-hidden border border-slate-700 bg-slate-800/50 hover:border-purple-500/50 transition-all">
                  {v.image && (
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={v.image} 
                        alt={v.titre} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  )}
                  <div className="p-3">
                    <p className="text-sm font-medium text-slate-300 truncate">{v.titre}</p>
                    {v.type && (
                      <p className="text-xs text-slate-500 mt-1">{v.type}</p>
                    )}
                  </div>
                </div>
              ) : null;
            })}
          </div>
        );
      
      case 'outfit':
        return (
          <div key={block.id} className="border-2 border-purple-700/50 rounded-xl p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              {block.content.title}
            </h3>
            <div className="flex flex-wrap gap-6">
              {block.content.vetementIds.map((id: string) => {
                const v = vetements.find(v => v.id === id);
                return v ? (
                  <div key={id} className="flex-shrink-0 w-32 md:w-40">
                    {v.image && (
                      <div className="aspect-square rounded-lg overflow-hidden border-2 border-purple-500/30 mb-2">
                        <img 
                          src={v.image} 
                          alt={v.titre} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                    <p className="text-xs text-slate-400 truncate">{v.titre}</p>
                    <p className="text-xs text-purple-400 font-medium">{v.partie}</p>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        );
      
      case 'spacer':
        const heights = {
          sm: 'h-4',
          md: 'h-8',
          lg: 'h-16',
        };
        return <div key={block.id} className={heights[block.content.height as keyof typeof heights] || 'h-8'} />;
      
      case 'divider':
        const colors = {
          slate: 'border-slate-700',
          purple: 'border-purple-700',
          pink: 'border-pink-700',
        };
        return (
          <hr 
            key={block.id}
            className={`${colors[block.content.color as keyof typeof colors] || 'border-slate-700'} ${block.content.style === 'dashed' ? 'border-dashed' : 'border-solid'} border-t-2`}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {page.blocks.map(block => renderBlock(block))}
      {page.blocks.length === 0 && (
        <div className="text-center text-slate-500 py-16">
          <p>Aucun contenu dans cette page</p>
        </div>
      )}
    </div>
  );
};
