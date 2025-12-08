import React, { useState } from 'react';
import { CLOTHING_TAXONOMY } from './clothingTaxonomy';

interface ClothingTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const ClothingTypeSelect: React.FC<ClothingTypeSelectProps> = ({ value, onChange }) => {
  const [selectedSuper, setSelectedSuper] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Find current selection
  React.useEffect(() => {
    for (const [superKey, superCat] of Object.entries(CLOTHING_TAXONOMY)) {
      for (const [catKey, category] of Object.entries(superCat.categories)) {
        if (value in category.items) {
          setSelectedSuper(superKey);
          setSelectedCategory(catKey);
          return;
        }
      }
    }
  }, [value]);

  const handleSuperChange = (superKey: string) => {
    setSelectedSuper(superKey);
    setSelectedCategory('');
    // Auto-select first category
    const firstCat = Object.keys(CLOTHING_TAXONOMY[superKey as keyof typeof CLOTHING_TAXONOMY].categories)[0];
    setSelectedCategory(firstCat);
  };

  const handleCategoryChange = (catKey: string) => {
    setSelectedCategory(catKey);
  };

  const handleItemChange = (itemKey: string) => {
    onChange(itemKey);
  };

  const getSuperCategories = () => {
    return Object.entries(CLOTHING_TAXONOMY).map(([key, cat]) => ({
      value: key,
      label: cat.label,
    }));
  };

  const getCategories = () => {
    if (!selectedSuper) return [];
    const superCat = CLOTHING_TAXONOMY[selectedSuper as keyof typeof CLOTHING_TAXONOMY];
    return Object.entries(superCat.categories).map(([key, cat]) => ({
      value: key,
      label: cat.label,
    }));
  };

  const getItems = () => {
    if (!selectedSuper || !selectedCategory) return [];
    const superCat = CLOTHING_TAXONOMY[selectedSuper as keyof typeof CLOTHING_TAXONOMY];
    const category = superCat.categories[selectedCategory as keyof typeof superCat.categories];
    return Object.entries(category.items).map(([key, label]) => ({
      value: key,
      label: label as string,
    }));
  };

  return (
    <div className="space-y-3">
      {/* Super Category */}
      <div>
        <label className="block text-xs text-slate-400 mb-1">Catégorie principale</label>
        <select
          value={selectedSuper}
          onChange={(e) => handleSuperChange(e.target.value)}
          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
        >
          <option value="">Choisir...</option>
          {getSuperCategories().map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      {selectedSuper && (
        <div>
          <label className="block text-xs text-slate-400 mb-1">Sous-catégorie</label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          >
            <option value="">Choisir...</option>
            {getCategories().map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Items */}
      {selectedCategory && (
        <div>
          <label className="block text-xs text-slate-400 mb-1">Type précis</label>
          <select
            value={value}
            onChange={(e) => handleItemChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          >
            <option value="">Choisir...</option>
            {getItems().map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
