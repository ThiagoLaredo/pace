import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

interface ArrowIconProps {
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
};

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className = '' }) => (
  <Icon name="arrow_forward" className={className} />
);
export const MenuIcon = () => <Icon name="menu" />;
export const CheckCircleIcon = () => <Icon name="check_circle" />;
export const SendIcon = () => <Icon name="send" />;
export const ShareIcon = () => <Icon name="share" />;
