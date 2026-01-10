import React from 'react';
import { ListItem } from './ListItem';
import type { ListConfig } from './List.types';

export const List: React.FC<ListConfig> = ({
  items,
  container = {},
  itemDefaults = {},
}) => {
  const { className = '', gap = 'gap-2' } = container;

  return (
    <ul className={`space-y-${gap.replace('gap-', '')} ${className}`.trim()}>
      {items.map((item, index) => (
        <ListItem
          key={item.id || index}
          {...item}
          style={{ ...itemDefaults, ...item.style }}
        />
      ))}
    </ul>
  );
};