export type IconType = 'emoji' | 'fontawesome' | 'image';

export interface ListItemConfig {
  id?: string;
  content: string | React.ReactNode;
  icon?: {
    type: IconType;
    value: string; // emoji char | fa class | image url
  };
  style?: {
    bg?: string; // 'slate-800' | 'gradient-to-r from-purple-500 to-pink-500'
    text?: string; // 'white' | 'slate-300'
    border?: string;
    hover?: string;
    padding?: string;
  };
  onClick?: () => void;
  className?: string;
}

export interface ListConfig {
  items: ListItemConfig[];
  container?: {
    className?: string;
    gap?: string; // 'gap-2' | 'gap-4'
  };
  itemDefaults?: Partial<ListItemConfig['style']>;
}