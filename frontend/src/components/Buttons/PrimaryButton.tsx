import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'secondary',
  icon,
}) => {
  const baseStyles = 'primary-button';

  const variantStyles = {
    primary: 'primary-button--primary',
    secondary: 'primary-button--secondary',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {icon && icon}
    </button>
  );
};
