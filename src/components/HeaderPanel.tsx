import React from 'react';
import './panel.css';

interface ComponentProps {
  onclickItemToField: (button_id: string) => void;
  generation: number;
  isTimerPause: boolean;
  active_btn?: string | null;
}

export default function HeaderPanel(props: ComponentProps): JSX.Element {
  let buttonRun;

  if (props.generation === 0) {
    buttonRun = (
      <button type="button" onClick={() => props.onclickItemToField('start')}>
        Start
      </button>
    );
  } else if (props.isTimerPause) {
    buttonRun = (
      <button type="button" onClick={() => props.onclickItemToField('resume')}>
        Run
      </button>
    );
  } else {
    buttonRun = (
      <button type="button" onClick={() => props.onclickItemToField('pause')}>
        Pause
      </button>
    );
  }
  return (
    <div className="Panel Panel2">
      <div className="Row">
        <div className="Name">
          <span>Generate:</span>
        </div>
        <button
          type="button"
          onClick={() => props.onclickItemToField('gen1')}
          disabled={props.active_btn === 'gen1'}
        >
          0.25
        </button>
        <button
          type="button"
          onClick={() => props.onclickItemToField('gen2')}
          disabled={props.active_btn === 'gen2'}
        >
          0.5
        </button>
        <button
          type="button"
          onClick={() => props.onclickItemToField('gen3')}
          disabled={props.active_btn === 'gen3'}
        >
          0.75
        </button>
      </div>
      <div className="Row">
        <div className="EmptyBlock"></div>
        {buttonRun}
        <button type="button" onClick={() => props.onclickItemToField('clear')}>
          Clear
        </button>
      </div>
      <div className="Generation">
        <span>Generation: {props.generation}</span>
      </div>
    </div>
  );
}
