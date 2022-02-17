import React from 'react';
import styled from 'styled-components';

interface ComponentProps {
  onclickItemToField: (button_id: string) => void;
  generation: number;
  isTimerPause: boolean;
  active_btn?: string | null;
}

const HeaderPanelStyle = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 628px;
  height: 115px;
  border: 1px solid black;
  font-size: 14pt;
  flex-wrap: wrap;
  text-align: center;
  vertical-align: middle;
  border-radius: 12px 12px 0 0;
  .Name {
    margin: 15px 15px 0 0;
    width: 120px;
    display: inline-block;
  }
  .Row {
    display: inline;
    justify-content: space-evenly;
  }
  .Generation {
    margin: 25px 15px 0 0;
    width: 140px;
    display: inline-block;
    text-align: left;
  }

  .EmptyBlock {
    margin: 25px 20px 0 0;
    width: 120px;
    display: inline-block;
  }
  button {
    margin: 0 30px 0 0;
    width: 120px;
    height: 30px;
  }
`;

export default function HeaderPanel(props: ComponentProps): JSX.Element {
  let buttonRun;

  if (props.generation === 0) {
    buttonRun = (
      <button
        type="button"
        onClick={(): void => props.onclickItemToField('start')}
      >
        Start
      </button>
    );
  } else if (props.isTimerPause) {
    buttonRun = (
      <button
        type="button"
        onClick={(): void => props.onclickItemToField('resume')}
      >
        Run
      </button>
    );
  } else {
    buttonRun = (
      <button
        type="button"
        onClick={(): void => props.onclickItemToField('pause')}
      >
        Pause
      </button>
    );
  }
  return (
    <HeaderPanelStyle>
      <div className="Row">
        <div className="Name">
          <span>Filling:</span>
        </div>
        <button
          type="button"
          onClick={(): void => props.onclickItemToField('gen1')}
          disabled={props.active_btn === 'gen1'}
        >
          0.25
        </button>
        <button
          type="button"
          onClick={(): void => props.onclickItemToField('gen2')}
          disabled={props.active_btn === 'gen2'}
        >
          0.5
        </button>
        <button
          type="button"
          onClick={(): void => props.onclickItemToField('gen3')}
          disabled={props.active_btn === 'gen3'}
        >
          0.75
        </button>
      </div>
      <div className="Row">
        <div className="EmptyBlock" />
        {buttonRun}
        <button
          type="button"
          onClick={(): void => props.onclickItemToField('clear')}
        >
          Clear
        </button>

        <div className="Generation">
          <span>Generation: {props.generation}</span>
        </div>
      </div>
    </HeaderPanelStyle>
  );
}

export { HeaderPanel };
