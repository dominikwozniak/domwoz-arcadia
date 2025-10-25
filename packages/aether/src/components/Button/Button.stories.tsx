import type { Meta, StoryObj } from '@storybook/react-native';
import { Button } from './Button';

const meta = {
  title: 'Aether/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    title: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    title: 'Button',
    onPress: () => console.log('Button pressed'),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Primary button variant
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'Primary Button',
  },
};

/**
 * Secondary button variant
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    title: 'Secondary Button',
  },
};

/**
 * Accent button variant
 */
export const Accent: Story = {
  args: {
    variant: 'accent',
    title: 'Accent Button',
  },
};

/**
 * Small button size
 */
export const Small: Story = {
  args: {
    size: 'sm',
    title: 'Small Button',
  },
};

/**
 * Medium button size (default)
 */
export const Medium: Story = {
  args: {
    size: 'md',
    title: 'Medium Button',
  },
};

/**
 * Large button size
 */
export const Large: Story = {
  args: {
    size: 'lg',
    title: 'Large Button',
  },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    disabled: true,
  },
};
