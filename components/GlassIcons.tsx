import React from 'react';
import './GlassIcons.css';

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
  purple: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
  red: 'linear-gradient(135deg, #ef4444, #dc2626)',
  indigo: 'linear-gradient(135deg, #6366f1, #4f46e5)',
  orange: 'linear-gradient(135deg, #f97316, #ea580c)',
  green: 'linear-gradient(135deg, #10b981, #059669)',
  pink: 'linear-gradient(135deg, #ec4899, #db2777)'
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => (
        <button key={index} type="button" className={`icon-btn ${item.customClass || ''}`} aria-label={item.label}>
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)}></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
