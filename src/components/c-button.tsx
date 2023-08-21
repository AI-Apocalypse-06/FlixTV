import { HTMLAttributes } from 'react';
import { Button, ButtonProps } from '@mantine/core';

interface CButtonProps {
  text: string;
  loading?: boolean;
  props?: ButtonProps | HTMLAttributes<any>;
}

function CButton({ text, props }: CButtonProps) {
  return (
    <Button
      fullWidth
      radius="lg"
      size="lg"
      uppercase
      className="sendbtn"
      mb={20}
      styles={{
        root: {
          transitionTime: '0.8s',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#131720'
          }
        }
      }}
      {...props}
    >
      {text}
    </Button>
  );
}

export default CButton;
