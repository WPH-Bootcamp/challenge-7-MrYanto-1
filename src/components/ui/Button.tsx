import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  leftIcon,
  rightIcon,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none select-none';

  const variantStyles = {
    primary: 'btn',
    secondary: 'bg-neutral-800 text-neutral-25 hover:bg-neutral-700 border border-neutral-700 rounded-full',
    outline: 'border-2 border-primary-200 text-primary-200 bg-transparent rounded-full hover:bg-primary-200 hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-xs',
    md: 'px-6 py-3 text-md gap-sm', // default
    lg: 'px-8 py-4 text-lg gap-md',
  };

  const disabledStyles = 'opacity-40 cursor-not-allowed pointer-events-none';

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {leftIcon && <span className="flex shrink-0 items-center justify-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex shrink-0 items-center justify-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;