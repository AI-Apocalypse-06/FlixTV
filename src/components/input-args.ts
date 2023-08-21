import { DefaultProps, InputProps } from '@mantine/core';

export const inputArgs: InputProps | DefaultProps = {
  variant: 'filled',
  radius: 'md',
  size: 'md',
  w: 318,
  styles: {
    input: {
      backgroundColor: '#151f30',
      color: '#fff',
      '::placeholder': {
        color: '#fff5'
      }
    },
    innerInput: {
      '::placeholder': {
        color: '#fff5'
      }
    },
    visibilityToggle: {
      '&hover': { background: 'none' }
    },
    icon: {
      '&hover': { background: 'transparent' }
    }
  }
};
