import React from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  /**
   * Button text
   */
  title: string;

  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'accent';

  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Aether Button Component
 *
 * A customizable button component with Tailwind CSS styling
 */
export function Button({
  title,
  variant = 'primary',
  size = 'md',
  disabled,
  ...props
}: ButtonProps) {
  // Variant classes
  const variantClasses = {
    primary: 'bg-aether-primary',
    secondary: 'bg-aether-secondary',
    accent: 'bg-aether-accent',
  };

  // Size classes
  const sizeClasses = {
    sm: 'p-aether-sm',
    md: 'p-aether-md',
    lg: 'p-aether-lg',
  };

  const buttonClass = `${variantClasses[variant]} ${sizeClasses[size]} rounded-lg ${
    disabled ? 'opacity-50' : ''
  }`;

  return (
    <Pressable
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      <Text className="text-white font-bold text-center">
        {title}
      </Text>
    </Pressable>
  );
}
