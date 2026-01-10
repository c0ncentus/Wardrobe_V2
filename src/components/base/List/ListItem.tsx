import React from 'react';
import type { ListItemConfig } from './List.types';

export const ListItem: React.FC<ListItemConfig> = ({
  content,
  icon,
  style = {},
  onClick,
  className = '',
}) => {
  const {
    bg = 'slate-800',
    text = 'white',
    border = 'slate-700',
    hover = 'slate-700',
    padding = 'p-4',
  } = style;

  const bgClass = bg.includes('gradient') ? `bg-${bg}` : `bg-${bg}`;
  const textClass = `text-${text}`;
  const borderClass = `border-${border}`;
  const hoverClass = `hover:bg-${hover}`;

  const renderIcon = () => {
    if (!icon) return null;

    switch (icon.type) {
      case 'emoji':
        return <span className="text-2xl mr-3">{icon.value}</span>;
      case 'fontawesome':
        return <i className={`${icon.value} text-xl mr-3`} />;
      case 'image':
        return <img src={icon.value} alt="" className="w-6 h-6 mr-3" />;
      default:
        return null;
    }
  };

  return (
    <li
      className={`
        ${padding} ${bgClass} ${textClass} ${borderClass} ${hoverClass}
        rounded-lg border transition-all cursor-pointer
        ${className}
      `.trim()}
      onClick={onClick}
    >
      <div className="flex items-center">
        {renderIcon()}
        <div className="flex-1">{content}</div>
      </div>
    </li>
  );
};