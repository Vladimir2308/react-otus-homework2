import React from 'react';
import { Speed } from './Wrapper';
import styled from 'styled-components';

const BottomPanelStyle = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 628px;
  height: 100px;
  border: 1px solid black;
  font-size: 14pt;
  flex-wrap: wrap;
  text-align: center;
  vertical-align: middle;
  border-radius: 0 0 12px 12px;
  .Name {
    margin: 15px 15px 0 0;
    width: 120px;
    display: inline-block;
  }
  .Row {
    display: inline;
    justify-content: space-evenly;
  }
  button {
    margin: 0 30px 0 0;
    width: 120px;
    height: 30px;
  }
`;

interface ComponentProps {
  onclickItemToField: (button_id: string) => void;
  selected_size: number;
  selected_speed: number;
}

export function BottomPanel(props: ComponentProps): JSX.Element {
  return (
    <BottomPanelStyle>
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
    </BottomPanelStyle>
  );
}

export default React.memo(BottomPanel);
