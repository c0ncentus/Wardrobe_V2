import React from 'react';
import { CLOTHING_TAXONOMY } from './clothingTaxonomy';

interface TreeNode {
  key: string;
  label: string;
  children?: TreeNode[];
}

interface ClothingTreeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const buildTreeNodes = (): TreeNode[] => {
  const nodes: TreeNode[] = [];
  
  for (const [superKey, superCat] of Object.entries(CLOTHING_TAXONOMY)) {
    const superNode: TreeNode = {
      key: superKey,
      label: superCat.label,
      children: [],
    };
    
    for (const [catKey, category] of Object.entries(superCat.categories)) {
      const catNode: TreeNode = {
        key: `${superKey}-${catKey}`,
        label: category.label,
        children: [],
      };
      
      for (const [itemKey, itemLabel] of Object.entries(category.items)) {
        catNode.children!.push({
          key: itemKey,
          label: itemLabel as string,
        });
      }
      
      superNode.children!.push(catNode);
    }
    
    nodes.push(superNode);
  }
  
  return nodes;
};

export const ClothingTreeSelect: React.FC<ClothingTreeSelectProps> = ({ value, onChange }) => {
  const [nodes] = React.useState(buildTreeNodes());
  const [selectedKey, setSelectedKey] = React.useState(value);
  
  // Simple tree view implementation (PrimeReact-style but custom)
  const TreeView: React.FC<{ nodes: TreeNode[]; level?: number }> = ({ nodes, level = 0 }) => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<string>>(new Set());
    
    const toggleExpand = (key: string) => {
      const newExpanded = new Set(expandedKeys);
      if (newExpanded.has(key)) {
        newExpanded.delete(key);
      } else {
        newExpanded.add(key);
      }
      setExpandedKeys(newExpanded);
    };
    
    const isLeaf = (node: TreeNode) => !node.children || node.children.length === 0;
    
    return (
      <div>
        {nodes.map((node) => {
          const isExpanded = expandedKeys.has(node.key);
          const leaf = isLeaf(node);
          
          return (
            <div key={node.key} style={{ marginLeft: `${level * 20}px` }}>
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors ${
                  selectedKey === node.key
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'hover:bg-slate-700/50 text-slate-300'
                }`}
                onClick={() => {
                  if (leaf) {
                    setSelectedKey(node.key);
                    onChange(node.key);
                  } else {
                    toggleExpand(node.key);
                  }
                }}
              >
                {!leaf && (
                  <span className="text-slate-400">
                    {isExpanded ? '▼' : '▶'}
                  </span>
                )}
                {leaf && <span className="w-3" />}
                <span>{node.label}</span>
              </div>
              {isExpanded && node.children && (
                <TreeView nodes={node.children} level={level + 1} />
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <div className="space-y-2">
      <label className="block text-xs text-slate-400 mb-1">
        Type de vêtement (arborescence)
      </label>
      <div className="w-full max-h-96 overflow-y-auto bg-slate-800/50 border border-slate-700 rounded-lg p-2">
        <TreeView nodes={nodes} />
      </div>
    </div>
  );
};
