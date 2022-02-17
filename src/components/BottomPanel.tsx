import React from 'react';
import './panel.css';
import { Speed } from './Wrapper';

interface ComponentProps {
  onclickItemToField: (button_id: string) => void;
  selected_size: number;
  selected_speed: number;
}

function BottomPanel(props: ComponentProps): JSX.Element {
  console.log(' BottomPanel render');
  return (
    <div className="Panel">
      <div className="Row">
        <div className="Name">
          <span>Board Size:</span>
        </div>
        <button
          type="button"
          onClick={(): void => props.onclickItemToField('size1')}
          disabled={props.selected_size === 1}
        >
          Size: 50x30
        </button>
        <button
          type="button"
          onClick={(): void => props.onclickItemToField('size2')}
          disabled={props.selected_size === 2}
        >
          Size: 70x50
        </button>
        <button
          type="button"
          onClick={(): void => props.onclickItemToField('size3')}
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
          onClick={(): void => props.onclickItemToField(Speed[Speed.SpeedSlow])}
          disabled={props.selected_speed === Speed.SpeedSlow}
        >
          Slow
        </button>
        <button
          type="button"
          onClick={(): void =>
            props.onclickItemToField(Speed[Speed.SpeedMedium])
          }
          disabled={props.selected_speed === Speed.SpeedMedium}
        >
          Medium
        </button>
        <button
          type="button"
          onClick={(): void => props.onclickItemToField(Speed[Speed.SpeedFast])}
          disabled={props.selected_speed === Speed.SpeedFast}
        >
          Fast
        </button>
      </div>
    </div>
  );
}

export default React.memo(BottomPanel);
