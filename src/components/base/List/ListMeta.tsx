import React from 'react';
import { List } from './List';
import type { ListConfig } from './List.types';

interface ListMetaProps {
  config: ListConfig;
}

/**
 * Composant meta pour configuration déclarative complète
 * Usage: <ListMeta config={{...}} />
 */
export const ListMeta: React.FC<ListMetaProps> = ({ config }) => {
  return <List {...config} />;
};