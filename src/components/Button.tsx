import React from 'react';

interface ComponentProps {
  onclickItemToField: (button_id: string) => void;
  button_id: string;
  title: string;
}

export const Button: React.FC<ComponentProps> = (props: ComponentProps) => {
  return (
    <button
      type="button"
      onClick={(): void => props.onclickItemToField(props.button_id)}
    >
      {props.title}
    </button>
  );
};
