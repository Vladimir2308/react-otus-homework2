import React from 'react';
import './item.css';

interface ComponentProps {
  onclickItemToField: (order_num: number) => void;
  order_num: number;
  display_num: number | null;
}

export default function Item(props: ComponentProps): JSX.Element {
  return (
    <div
      className="Item"
      id={'' + props.order_num}
      onClick={() => props.onclickItemToField(props.order_num)}
    >
      {props.display_num}
    </div>
  );
}
