import React from 'react';
import './panel.css';

interface ComponentProps {
  onclickItemToField: (button_id: string) => void;
  selected_size: number;
  selected_speed: number;
  // started: boolean;
}

export default function BottomPanel(props: ComponentProps): JSX.Element {
  return (
    <div className="Panel">
      <div className="Row">
        <div className="Name">
          <span>Board Size:</span>
        </div>
        <button
          type="button"
          onClick={() => props.onclickItemToField('size1')}
          disabled={props.selected_size === 1}
        >
          Size: 50x30
        </button>
        <button
          type="button"
          onClick={() => props.onclickItemToField('size2')}
          disabled={props.selected_size === 2}
        >
          Size: 70x50
        </button>
        <button
          type="button"
          onClick={() => props.onclickItemToField('size3')}
          disabled={props.selected_size === 3}
        >
          Size: 100x80
        </button>
      </div>
      <div className="Row">
        <div className="Name">
          <span>Sim Speed:</span>
        </div>
        <button
          type="button"
          onClick={() => props.onclickItemToField('speed1')}
          disabled={props.selected_speed === 1000}
        >
          Slow
        </button>
        <button
          type="button"
          onClick={() => props.onclickItemToField('speed2')}
          disabled={props.selected_speed === 250}
        >
          Medium
        </button>
        <button
          type="button"
          onClick={() => props.onclickItemToField('speed3')}
          disabled={props.selected_speed === 25}
        >
          Fast
        </button>
      </div>
    </div>
  );
}
