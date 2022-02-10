import React from 'react';
import './panel.css';

interface ComponentProps {
  onclickItemToField: (button_id: number) => void;
  selected_size: number;
  selected_speed: number;
}

export default function Panel(props: ComponentProps): JSX.Element {
  // function onclickItemToField(button_id: number) {
  //   if (button_id === 1) {
  //   } else if (button_id === 2) {
  //   } else if (button_id === 3) {
  //   } else if (button_id === 11) {
  //   } else if (button_id === 12) {
  //   } else if (button_id === 13) {
  //   }
  // }

  // const [value, setValue] = React.useState('');
  // function after_click(button_id: number): void {
  //   console.log('button_id: ' + button_id);
  //   props.onclickItemToField(button_id);
  //
  // }

  return (
    <div className="Panel">
      <div className="Row">
        <div className="Name">
          <span>Board Size:</span>
        </div>
        {/*<button type="button" onClick={() => after_click(1)} disabled={true}>*/}
        <button type="button" onClick={() => props.onclickItemToField(2)}>
          Size: 50x30
        </button>
        <button type="button" onClick={() => props.onclickItemToField(2)}>
          Size: 70x50
        </button>
        <button type="button" onClick={() => props.onclickItemToField(3)}>
          Size: 100x80
        </button>
      </div>
      <div className="Row">
        <div className="Name">
          <span>Sim Speed:</span>
        </div>
        <button type="button" onClick={() => props.onclickItemToField(11)}>
          Slow
        </button>
        <button type="button" onClick={() => props.onclickItemToField(12)}>
          Medium
        </button>
        <button type="button" onClick={() => props.onclickItemToField(13)}>
          Fast
        </button>
      </div>
    </div>
  );
}
