import React from 'react';
import './item.css';

interface ComponentProps {
  value: number;
}

const Item = React.memo((props: ComponentProps) => (
  <div
    className="Item"
    style={{
      backgroundColor: props.value === 1 ? 'red' : 'blue',
    }}
  />
));

export default Item;
