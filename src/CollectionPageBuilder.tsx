import React, { useState } from 'react';
import { Vetement } from './types';
import { TEMPLATES, Template } from './CollectionPageBuilder/templates';
import { PageBlock, BlockType, CollectionPage, GRADIENTS } from './CollectionPageBuilder/types';

interface CollectionPageBuilderProps {
  vetements: Vetement[];
  initialPage?: CollectionPage;
  onSave: (page: CollectionPage) => void;
  onCancel: () => void;
}

const generateBlockId = () => `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const CollectionPageBuilder: React.FC<CollectionPageBuilderProps> = ({
  vetements,
  initialPage,
  onSave,
  onCancel,
}) => {
  const [blocks, setBlocks] = useState<PageBlock[]>(initialPage?.blocks || []);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [showTemplates, setShowTemplates] = useState(blocks.length === 0);
  const [currentGradient, setCurrentGradient] = useState<keyof typeof GRADIENTS>(
    ((initialPage?.theme?.gradient || 'purple' ) as keyof typeof GRADIENTS)
  );
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const selectedBlock = blocks.find(b => b.id === selectedBlockId);

  // Load template
  const loadTemplate = (template: Template) => {
    setBlocks(template.blocks.map(b => ({ ...b, id: generateBlockId() })));
    setCurrentGradient(template.gradient);
    setShowTemplates(false);
  };

  // Add new block
  const addBlock = (type: BlockType) => {
    const newBlock: PageBlock = {
      id: generateBlockId(),
      type,
      content: getDefaultContent(type),
    };
    setBlocks([...blocks, newBlock]);
    setSelectedBlockId(newBlock.id);
  };

  // Get default content for block type
  const getDefaultContent = (type: BlockType): any => {
    switch (type) {
      case 'heading':
        return { text: 'Nouveau titre', level: 'h2', align: 'left' };
      case 'text':
        return { text: 'Votre texte ici...', align: 'left', size: 'base' };
      case 'image':
        return { url: '', alt: '', size: 'full' };
      case 'gallery':
        return { vetementIds: [], columns: 3 };
      case 'outfit':
        return { vetementIds: [], title: 'Tenue' };
      case 'spacer':
        return { size: 'md' };
      case 'divider':
        return { style: 'solid', color: 'slate' };
      case 'stats':
        return { stats: [{ label: 'Label', value: '0', color: 'purple' }] };
      case 'quote':
        return { text: 'Citation inspirante', author: '' };
      case 'grid3':
        return { items: [
          { title: 'Item 1', color: 'purple' },
          { title: 'Item 2', color: 'pink' },
          { title: 'Item 3', color: 'blue' }
        ]};
      case 'hero':
        return { title: 'Titre Hero', subtitle: 'Sous-titre', image: '' };
      case 'timeline':
        return { events: [{ title: 'Event 1', description: 'Description', date: 'Date' }] };
      default:
        return {};
    }
  };

  // Update block content
  const updateBlock = (id: string, content: any) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content } : b));
  };

  // Delete block
  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
    setSelectedBlockId(null);
  };

  // Duplicate block
  const duplicateBlock = (id: string) => {
    const block = blocks.find(b => b.id === id);
    if (!block) return;
    const newBlock = { ...block, id: generateBlockId() };
    const index = blocks.findIndex(b => b.id === id);
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, newBlock);
    setBlocks(newBlocks);
  };

  // Move block
  const moveBlock = (fromIndex: number, toIndex: number) => {
    const newBlocks = [...blocks];
    const [moved] = newBlocks.splice(fromIndex, 1);
    newBlocks.splice(toIndex, 0, moved);
    setBlocks(newBlocks);
  };

  // Drag handlers
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    moveBlock(draggedIndex, index);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleSave = () => {
    onSave({
      blocks,
      theme: { gradient: currentGradient, accent: 'purple' }
    });
  };

  // Block library with icons
  const blockLibrary: { type: BlockType; icon: string; label: string; desc: string }[] = [
    { type: 'heading', icon: '📝', label: 'Titre', desc: 'H1, H2 ou H3' },
    { type: 'text', icon: '📄', label: 'Texte', desc: 'Paragraphe' },
    { type: 'image', icon: '🖼️', label: 'Image', desc: 'Photo seule' },
    { type: 'gallery', icon: '🎨', label: 'Galerie', desc: 'Grid vêtements' },
    { type: 'outfit', icon: '👗', label: 'Outfit', desc: 'Look complet' },
    { type: 'stats', icon: '📊', label: 'Stats', desc: 'Statistiques' },
    { type: 'quote', icon: '💬', label: 'Citation', desc: 'Quote inspirante' },
    { type: 'grid3', icon: '▦', label: 'Grid 3', desc: '3 colonnes colorées' },
    { type: 'hero', icon: '🌟', label: 'Hero', desc: 'Bannière large' },
    { type: 'timeline', icon: '📅', label: 'Timeline', desc: 'Chronologie' },
    { type: 'spacer', icon: '␣', label: 'Espace', desc: 'Espacement' },
    { type: 'divider', icon: '➖', label: 'Séparateur', desc: 'Ligne' },
  ];

  // Render block editor panel
  const renderBlockEditor = () => {
    if (!selectedBlock) {
      return (
        <div className="flex items-center justify-center h-full text-slate-500">
          <div className="text-center">
            <div className="text-6xl mb-4">✨</div>
            <p>Sélectionnez un bloc</p>
            <p className="text-xs mt-2">pour l'éditer</p>
          </div>
        </div>
      );
    }

    const { type, content } = selectedBlock;

    const commonControls = (
      <>
        {(type === 'heading' || type === 'text') && (
          <div>
            <label className="block text-sm text-slate-400 mb-2">Alignement</label>
            <div className="flex gap-2">
              {['left', 'center', 'right'].map(align => (
                <button
                  key={align}
                  onClick={() => updateBlock(selectedBlock.id, { ...content, align })}
                  className={`flex-1 px-3 py-2 rounded-lg transition ${
                    content.align === align
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {align === 'left' ? '←' : align === 'center' ? '↔' : '→'}
                </button>
              ))}
            </div>
          </div>
        )}
      </>
    );

    switch (type) {
      case 'heading':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              📝 Titre
            </h3>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Texte</label>
              <input
                type="text"
                value={content.text}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, text: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Niveau</label>
              <select
                value={content.level}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, level: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="h1">H1 - Très grand</option>
                <option value="h2">H2 - Grand</option>
                <option value="h3">H3 - Moyen</option>
              </select>
            </div>
            {commonControls}
          </div>
        );

      case 'text':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              📄 Texte
            </h3>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Contenu</label>
              <textarea
                value={content.text}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, text: e.target.value })}
                rows={6}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Taille</label>
              <select
                value={content.size}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, size: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="sm">Petit</option>
                <option value="base">Normal</option>
                <option value="lg">Grand</option>
              </select>
            </div>
            {commonControls}
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              🎨 Galerie
            </h3>
            <div>
              <label className="block text-sm text-slate-400 mb-2">
                Vêtements ({content.vetementIds?.length || 0} sélectionnés)
              </label>
              <div className="max-h-64 overflow-y-auto space-y-2 border border-slate-700 rounded-lg p-2">
                {vetements.map(v => (
                  <label key={v.id} className="flex items-center gap-2 p-2 bg-slate-800 rounded hover:bg-slate-700 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={content.vetementIds?.includes(v.id)}
                      onChange={(e) => {
                        const ids = e.target.checked
                          ? [...(content.vetementIds || []), v.id]
                          : content.vetementIds?.filter((id: string) => id !== v.id) || [];
                        updateBlock(selectedBlock.id, { ...content, vetementIds: ids });
                      }}
                      className="w-4 h-4 accent-purple-500"
                    />
                    <img src={v.image} alt={v.titre} className="w-10 h-10 object-cover rounded" />
                    <span className="text-sm text-white flex-1 truncate">{v.titre}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Colonnes</label>
              <div className="grid grid-cols-3 gap-2">
                {[2, 3, 4].map(cols => (
                  <button
                    key={cols}
                    onClick={() => updateBlock(selectedBlock.id, { ...content, columns: cols })}
                    className={`px-3 py-2 rounded-lg transition ${
                      content.columns === cols
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {cols}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'outfit':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              👗 Outfit
            </h3>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Titre</label>
              <input
                type="text"
                value={content.title}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">
                Vêtements ({content.vetementIds?.length || 0})
              </label>
              <div className="max-h-64 overflow-y-auto space-y-2 border border-slate-700 rounded-lg p-2">
                {vetements.map(v => (
                  <label key={v.id} className="flex items-center gap-2 p-2 bg-slate-800 rounded hover:bg-slate-700 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={content.vetementIds?.includes(v.id)}
                      onChange={(e) => {
                        const ids = e.target.checked
                          ? [...(content.vetementIds || []), v.id]
                          : content.vetementIds?.filter((id: string) => id !== v.id) || [];
                        updateBlock(selectedBlock.id, { ...content, vetementIds: ids });
                      }}
                      className="w-4 h-4 accent-purple-500"
                    />
                    <img src={v.image} alt={v.titre} className="w-10 h-10 object-cover rounded" />
                    <span className="text-sm text-white flex-1 truncate">{v.titre}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              📊 Statistiques
            </h3>
            <div className="space-y-3">
              {content.stats?.map((stat: any, i: number) => (
                <div key={i} className="p-3 bg-slate-800 rounded-lg space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500">Stat {i + 1}</span>
                    <button
                      onClick={() => {
                        const newStats = content.stats.filter((_: any, idx: number) => idx !== i);
                        updateBlock(selectedBlock.id, { ...content, stats: newStats });
                      }}
                      className="text-red-400 hover:text-red-300 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Label"
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...content.stats];
                      newStats[i].label = e.target.value;
                      updateBlock(selectedBlock.id, { ...content, stats: newStats });
                    }}
                    className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-sm focus:border-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="Valeur"
                    value={stat.value}
                    onChange={(e) => {
                      const newStats = [...content.stats];
                      newStats[i].value = e.target.value;
                      updateBlock(selectedBlock.id, { ...content, stats: newStats });
                    }}
                    className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-sm focus:border-purple-500"
                  />
                  <select
                    value={stat.color}
                    onChange={(e) => {
                      const newStats = [...content.stats];
                      newStats[i].color = e.target.value;
                      updateBlock(selectedBlock.id, { ...content, stats: newStats });
                    }}
                    className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-sm focus:border-purple-500"
                  >
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                  </select>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                const newStats = [...(content.stats || []), { label: 'Nouveau', value: '0', color: 'purple' }];
                updateBlock(selectedBlock.id, { ...content, stats: newStats });
              }}
              className="w-full px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
            >
              + Ajouter stat
            </button>
          </div>
        );

      case 'quote':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              💬 Citation
            </h3>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Citation</label>
              <textarea
                value={content.text}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, text: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                placeholder="Votre citation inspirante..."
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Auteur</label>
              <input
                type="text"
                value={content.author}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, author: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                placeholder="Nom de l'auteur"
              />
            </div>
          </div>
        );

      case 'hero':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              🌟 Hero
            </h3>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Titre</label>
              <input
                type="text"
                value={content.title}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Sous-titre</label>
              <input
                type="text"
                value={content.subtitle}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, subtitle: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Image URL</label>
              <input
                type="url"
                value={content.image}
                onChange={(e) => updateBlock(selectedBlock.id, { ...content, image: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                placeholder="https://..."
              />
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              📅 Timeline
            </h3>
            <div className="space-y-3">
              {content.events?.map((event: any, i: number) => (
                <div key={i} className="p-3 bg-slate-800 rounded-lg space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500">Event {i + 1}</span>
                    <button
                      onClick={() => {
                        const newEvents = content.events.filter((_: any, idx: number) => idx !== i);
                        updateBlock(selectedBlock.id, { ...content, events: newEvents });
                      }}
                      className="text-red-400 hover:text-red-300 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Titre"
                    value={event.title}
                    onChange={(e) => {
                      const newEvents = [...content.events];
                      newEvents[i].title = e.target.value;
                      updateBlock(selectedBlock.id, { ...content, events: newEvents });
                    }}
                    className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-sm focus:border-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={event.description}
                    onChange={(e) => {
                      const newEvents = [...content.events];
                      newEvents[i].description = e.target.value;
                      updateBlock(selectedBlock.id, { ...content, events: newEvents });
                    }}
                    className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-sm focus:border-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="Date"
                    value={event.date}
                    onChange={(e) => {
                      const newEvents = [...content.events];
                      newEvents[i].date = e.target.value;
                      updateBlock(selectedBlock.id, { ...content, events: newEvents });
                    }}
                    className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-sm focus:border-purple-500"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                const newEvents = [...(content.events || []), { title: 'Event', description: 'Description', date: 'Date' }];
                updateBlock(selectedBlock.id, { ...content, events: newEvents });
              }}
              className="w-full px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
            >
              + Ajouter événement
            </button>
          </div>
        );

      case 'spacer':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              ␣ Espace
            </h3>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Hauteur</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'sm', label: 'Petit', h: '16px' },
                  { value: 'md', label: 'Moyen', h: '32px' },
                  { value: 'lg', label: 'Grand', h: '64px' }
                ].map(({ value, label, h }) => (
                  <button
                    key={value}
                    onClick={() => updateBlock(selectedBlock.id, { ...content, size: value })}
                    className={`px-3 py-2 rounded-lg transition text-xs ${
                      content.size === value
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    <div>{label}</div>
                    <div className="text-[10px] opacity-60">{h}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'divider':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              ➖ Séparateur
            </h3>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Style</label>
              <div className="grid grid-cols-2 gap-2">
                {['solid', 'dashed'].map(style => (
                  <button
                    key={style}
                    onClick={() => updateBlock(selectedBlock.id, { ...content, style })}
                    className={`px-3 py-2 rounded-lg transition ${
                      content.style === style
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {style === 'solid' ? '━' : '╌'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Couleur</label>
              <div className="grid grid-cols-3 gap-2">
                {['slate', 'purple', 'pink'].map(color => (
                  <button
                    key={color}
                    onClick={() => updateBlock(selectedBlock.id, { ...content, color })}
                    className={`px-3 py-2 rounded-lg transition ${
                      content.color === color
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return <div className="text-slate-500 text-center py-10">Éditeur non disponible pour ce type de bloc</div>;
    }
  };

  // Render canvas preview of blocks
  const renderBlockPreview = (block: PageBlock, index: number) => {
    const { type, content } = block;
    const isSelected = selectedBlockId === block.id;

    let preview = null;

    switch (type) {
      case 'heading':
        const HeadingTag = content.level as 'h1' | 'h2' | 'h3';
        const headingSize = content.level === 'h1' ? 'text-4xl' : content.level === 'h2' ? 'text-3xl' : 'text-2xl';
        preview = (
          <HeadingTag className={`${headingSize} font-bold text-${content.align} text-white`}>
            {content.text}
          </HeadingTag>
        );
        break;

      case 'text':
        const textSize = content.size === 'sm' ? 'text-sm' : content.size === 'lg' ? 'text-lg' : 'text-base';
        preview = (
          <p className={`${textSize} text-${content.align} text-slate-300 whitespace-pre-wrap`}>
            {content.text}
          </p>
        );
        break;

      case 'gallery':
        preview = (
          <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${content.columns}, 1fr)` }}>
            {content.vetementIds?.slice(0, 8).map((id: string) => {
              const v = vetements.find(v => v.id === id);
              return v ? (
                <div key={id} className="aspect-square rounded-lg overflow-hidden bg-slate-800 shadow-lg hover:shadow-purple-500/20 transition">
                  <img src={v.image} alt={v.titre} className="w-full h-full object-cover" />
                </div>
              ) : null;
            })}
          </div>
        );
        break;

      case 'outfit':
        preview = (
          <div className={`p-6 rounded-xl bg-gradient-to-br ${GRADIENTS[currentGradient]} bg-opacity-20 border border-purple-500/30 shadow-xl`}>
            <h3 className="text-2xl font-bold mb-4 text-white">{content.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.vetementIds?.map((id: string) => {
                const v = vetements.find(v => v.id === id);
                return v ? (
                  <div key={id} className="bg-white/10 backdrop-blur rounded-lg p-3 hover:bg-white/20 transition">
                    <img src={v.image} alt={v.titre} className="w-full aspect-square object-cover rounded mb-2" />
                    <p className="text-sm text-white truncate">{v.titre}</p>
                    <p className="text-xs text-white/60">{v.partie}</p>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        );
        break;

      case 'stats':
        preview = (
          <div className="grid grid-cols-3 gap-4">
            {content.stats?.map((stat: any, i: number) => {
              const colorMap: any = {
                purple: 'purple-400',
                pink: 'pink-400',
                blue: 'blue-400',
                green: 'green-400',
                orange: 'orange-400',
                red: 'red-400',
              };
              return (
                <div key={i} className="text-center p-6 bg-slate-800/50 backdrop-blur rounded-lg border border-slate-700 hover:border-purple-500/50 transition">
                  <div className={`text-4xl font-bold text-${colorMap[stat.color] || 'purple-400'} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        );
        break;

      case 'quote':
        preview = (
          <div className="text-center py-10 px-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur rounded-xl border border-slate-700/50">
            <div className="text-6xl text-purple-400/20 mb-4">"</div>
            <p className="text-2xl italic text-slate-200 mb-4 leading-relaxed">{content.text}</p>
            {content.author && (
              <p className="text-sm text-slate-400 font-medium">
                <span className="text-purple-400">—</span> {content.author}
              </p>
            )}
          </div>
        );
        break;

      case 'hero':
        preview = (
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            {content.image && (
              <img src={content.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[currentGradient]} ${content.image ? 'opacity-75' : 'opacity-100'}`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
              <h1 className="text-6xl font-bold mb-4 drop-shadow-2xl">{content.title}</h1>
              <p className="text-2xl drop-shadow-lg">{content.subtitle}</p>
            </div>
          </div>
        );
        break;

      case 'timeline':
        preview = (
          <div className="space-y-8">
            {content.events?.map((event: any, i: number) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
                  {i < content.events.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-500 to-purple-500/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-sm text-purple-400 font-semibold mb-2">{event.date}</p>
                  <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'spacer':
        const spacerHeight = content.size === 'sm' ? 'h-4' : content.size === 'lg' ? 'h-16' : 'h-8';
        preview = (
          <div className={`${spacerHeight} flex items-center justify-center`}>
            <div className="text-xs text-slate-600">━━━ espace {content.size} ━━━</div>
          </div>
        );
        break;

      case 'divider':
        const dividerStyle = content.style === 'dashed' ? 'border-dashed' : 'border-solid';
        const dividerColor = content.color === 'purple' ? 'border-purple-500' : content.color === 'pink' ? 'border-pink-500' : 'border-slate-600';
        preview = <hr className={`border-t-2 ${dividerStyle} ${dividerColor}`} />;
        break;

      default:
        preview = <div className="text-slate-500 text-center py-6">Aperçu non disponible: {type}</div>;
    }

    return (
      <div
        key={block.id}
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={(e) => handleDragOver(e, index)}
        onDragEnd={handleDragEnd}
        onClick={() => setSelectedBlockId(block.id)}
        className={`relative p-6 rounded-xl border-2 transition-all cursor-move group ${
          isSelected
            ? 'border-purple-500 bg-purple-500/5 shadow-lg shadow-purple-500/10'
            : 'border-transparent hover:border-slate-600 hover:bg-slate-800/30'
        }`}
      >
        {preview}
        
        {/* Block controls */}
        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              duplicateBlock(block.id);
            }}
            className="p-2 bg-slate-700/90 hover:bg-slate-600 backdrop-blur rounded-lg text-white text-sm shadow-lg transition"
            title="Dupliquer"
          >
            📋
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteBlock(block.id);
            }}
            className="p-2 bg-red-600/90 hover:bg-red-500 backdrop-blur rounded-lg text-white text-sm shadow-lg transition"
            title="Supprimer"
          >
            ✕
          </button>
        </div>

        {/* Drag indicator */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 text-xl">
          ⋮⋮
        </div>

        {/* Block type badge */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="px-2 py-1 bg-slate-700/90 backdrop-blur rounded text-xs text-slate-300">
            {blockLibrary.find(b => b.type === type)?.icon} {blockLibrary.find(b => b.type === type)?.label}
          </span>
        </div>
      </div>
    );
  };

  if (showTemplates) {
    return (
      <div className="fixed inset-0 bg-slate-900 z-50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="border-b border-slate-800 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                ✨ Choisir un Template
              </h2>
              <p className="text-slate-400">20 layouts professionnels prêts à l'emploi</p>
            </div>
            <button
              onClick={() => setShowTemplates(false)}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition shadow-lg"
            >
              Commencer vide
            </button>
          </div>
        </div>

        {/* Templates grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TEMPLATES.map(template => (
              <button
                key={template.id}
                onClick={() => loadTemplate(template)}
                className="group text-left p-5 bg-slate-800/50 hover:bg-slate-800 backdrop-blur rounded-2xl border border-slate-700 hover:border-purple-500 transition-all shadow-lg hover:shadow-purple-500/20 hover:scale-105"
              >
                {/* Preview gradient */}
                <div className={`h-32 rounded-xl bg-gradient-to-br ${GRADIENTS[template.gradient]} mb-4 flex items-center justify-center text-white font-bold shadow-xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative">
                    <div className="text-3xl mb-1">{template.blocks.length}</div>
                    <div className="text-sm opacity-80">blocs</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{template.name}</h3>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">{template.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-600">
                    {template.blocks.map(b => blockLibrary.find(bl => bl.type === b.type)?.icon).join(' ')}
                  </div>
                  <div className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Utiliser →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 overflow-hidden flex">
      {/* Left Panel - Block Library */}
      <div className="w-72 border-r border-slate-800 overflow-y-auto bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="p-5 border-b border-slate-800 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <h3 className="text-xl font-bold text-white mb-3">📚 Bibliothèque</h3>
          <button
            onClick={() => setShowTemplates(true)}
            className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl text-sm transition shadow-lg hover:shadow-purple-500/50 font-semibold"
          >
            ✨ Templates
          </button>
        </div>
        
        <div className="p-4 space-y-2.5">
          {blockLibrary.map(({ type, icon, label, desc }) => (
            <button
              key={type}
              onClick={() => addBlock(type)}
              className="w-full text-left p-4 bg-slate-800/50 hover:bg-slate-800 backdrop-blur rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all group shadow-sm hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-2xl">{icon}</span>
                <span className="font-semibold text-white group-hover:text-purple-300 transition">{label}</span>
              </div>
              <p className="text-xs text-slate-500 group-hover:text-slate-400 transition leading-relaxed">{desc}</p>
            </button>
          ))}
        </div>

        {/* Gradient selector */}
        <div className="p-5 border-t border-slate-800">
          <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <span>🎨</span> Gradient
          </h4>
          <div className="grid grid-cols-2 gap-2.5">
            {Object.entries(GRADIENTS).map(([key, gradient]) => (
              <button
                key={key}
                onClick={() => setCurrentGradient(key as keyof typeof GRADIENTS)}
                className={`h-10 rounded-lg bg-gradient-to-r ${gradient} border-2 transition-all shadow-sm hover:shadow-lg ${
                  currentGradient === key ? 'border-white scale-105 shadow-xl' : 'border-transparent hover:border-white/30'
                }`}
                title={key}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center - Canvas */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-5xl mx-auto p-10">
          {/* Preview mode toggle */}
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className={`px-6 py-3 rounded-xl transition-all shadow-lg font-semibold ${
                isPreviewMode
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isPreviewMode ? '✏️ Mode Édition' : '👁️ Aperçu'}
            </button>
            
            <div className="text-sm text-slate-500 font-medium">
              {blocks.length} bloc{blocks.length > 1 ? 's' : ''}
            </div>
          </div>

          {/* Blocks */}
          <div className={`space-y-6 ${isPreviewMode ? 'pointer-events-none' : ''}`}>
            {blocks.length === 0 ? (
              <div className="text-center py-32 text-slate-500">
                <div className="text-8xl mb-6">✨</div>
                <p className="text-2xl font-bold text-white mb-3">Page vide</p>
                <p className="text-lg mb-6">Ajoutez des blocs depuis la bibliothèque</p>
                <button
                  onClick={() => setShowTemplates(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition shadow-xl shadow-purple-500/30 font-semibold"
                >
                  📚 Choisir un template
                </button>
              </div>
            ) : (
              blocks.map((block, index) => renderBlockPreview(block, index))
            )}
          </div>
        </div>
      </div>

      {/* Right Panel - Block Editor */}
      <div className="w-96 border-l border-slate-800 overflow-y-auto bg-gradient-to-b from-slate-950 to-slate-900 p-5">
        {renderBlockEditor()}
      </div>

      {/* Bottom Toolbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 p-5 flex items-center justify-between backdrop-blur shadow-2xl">
        <button
          onClick={onCancel}
          className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition shadow-lg font-semibold"
        >
          ← Annuler
        </button>
        
        <div className="flex gap-3">
          <button
            onClick={() => setBlocks([])}
            className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl transition shadow-lg font-semibold"
          >
            🗑️ Tout effacer
          </button>
          <button
            onClick={handleSave}
            className="px-10 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition font-bold shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70"
          >
            💾 Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

// Export types for use in other components
export type { CollectionPage, PageBlock, BlockType };
