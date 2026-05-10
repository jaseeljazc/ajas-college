import React from 'react';

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  orbPrimarySize?: string;
  orbSecondarySize?: string;
  variant?: 'default' | 'accent';
  shadowSize?: 'lg' | '2xl';
  style?: React.CSSProperties;
}

const PremiumCard = ({ 
  children, 
  className = "", 
  orbPrimarySize = "w-36 h-36", 
  orbSecondarySize = "w-24 h-24",
  variant = 'default',
  shadowSize = 'lg',
  style = {}
}: PremiumCardProps) => {
  const shadowClass = shadowSize === '2xl' ? 'shadow-2xl' : 'shadow-lg';
  
  return (
    <div 
      className={`relative overflow-hidden ${shadowClass} shadow-blue-900/40 transition-all duration-300 ${className}`} 
      style={{ 
        background: 'linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)', 
        borderRadius: 'var(--radius-lg)', 
        color: 'var(--c-text-inverse)', 
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.09)',
        border: '1px solid rgba(255,255,255,0.05)',
        ...style
      }}
    >
      {/* Decorative orbs */}
      <div className={`absolute -top-8 -right-8 ${orbPrimarySize} rounded-full pointer-events-none`} style={{ background: 'rgba(255,255,255,0.04)' }} />
      <div className={`absolute -bottom-6 -left-6 ${orbSecondarySize} rounded-full pointer-events-none`} style={{ background: 'rgba(255,255,255,0.03)' }} />
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }} />
      
      {children}
    </div>
  );
};

export default PremiumCard;
