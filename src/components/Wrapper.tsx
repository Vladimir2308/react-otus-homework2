import React from 'react';
import { Field } from './Field';
import './wrapper.css';
import BottomPanel from './BottomPanel';
import HeaderPanel from './HeaderPanel';

interface ComponentState {
  filling_btn_id?: string;
  speed: number;
  size: number;
  generation: number;
  isTimerPause: boolean;
}

export enum Speed {
  SpeedSlow = 500,
  SpeedMedium = 150,
  SpeedFast = 50,
}

class Wrapper extends React.Component<unknown, ComponentState> {
  private readonly fieldElement: React.RefObject<Field>;
  constructor(state: ComponentState) {
    super(state);
    this.fieldElement = React.createRef();
    console.log(' Wrapper constructor');
    this.state = {
      speed: Speed.SpeedSlow,
      size: 1,
      generation: 0,
      isTimerPause: false,
    };
  }

  setGeneration = (generation: number): void => {
    if (generation === 0) {
      this.setState({ generation: generation });
    } else {
      this.setState({ generation: generation });
    }
  };

  onclickItemToField = (button_id: string): void => {
    if (button_id === 'size1') {
      this.setState({ size: 1 });
      this.fieldElement.current?.changeFieldSize(50, 30);
    } else if (button_id === 'size2') {
      this.setState({ size: 2 });
      this.fieldElement.current?.changeFieldSize(70, 50);
    } else if (button_id === 'size3') {
      this.setState({ size: 3 });
      this.fieldElement.current?.changeFieldSize(100, 80);
    } else if (button_id === Speed[Speed.SpeedSlow]) {
      this.fieldElement.current?.changeSpeed(Speed.SpeedSlow);
      this.setState({ speed: Speed.SpeedSlow });
    } else if (button_id === Speed[Speed.SpeedMedium]) {
      this.fieldElement.current?.changeSpeed(Speed.SpeedMedium);
      this.setState({ speed: Speed.SpeedMedium });
    } else if (button_id === Speed[Speed.SpeedFast]) {
      this.fieldElement.current?.changeSpeed(Speed.SpeedFast);
      this.setState({ speed: Speed.SpeedFast });
    } else if (button_id === 'start') {
      this.fieldElement.current?.startLife();
      this.setState({ isTimerPause: false });
    } else if (button_id === 'resume') {
      this.fieldElement.current?.resumeLife();
      this.setState({ isTimerPause: false });
    } else if (button_id === 'pause') {
      this.fieldElement.current?.pauseLife();
      this.setState({ isTimerPause: true });
    } else if (button_id === 'clear') {
      this.setState({ filling_btn_id: undefined });
      this.fieldElement.current?.clearField();
    } else if (button_id === 'gen1') {
      this.fieldElement.current?.generateField(0.25);
      this.setState({ filling_btn_id: 'gen1' });
    } else if (button_id === 'gen2') {
      this.fieldElement.current?.generateField(0.5);
      this.setState({ filling_btn_id: 'gen2' });
    } else if (button_id === 'gen3') {
      this.fieldElement.current?.generateField(0.75);
      this.setState({ filling_btn_id: 'gen3' });
    }
  };

  render(): JSX.Element {
    console.log('Wrapper render');

    return (
      <div className="Wrapper">
        <HeaderPanel
          onclickItemToField={this.onclickItemToField}
          generation={this.state.generation}
          isTimerPause={this.state.isTimerPause}
          active_btn={this.state.filling_btn_id}
        />
        <Field
          intervalMs={this.state.speed}
          ref={this.fieldElement}
          setGeneration={this.setGeneration}
          filling_btn_id={this.state.filling_btn_id}
          horiz_count={50}
          vertic_count={30}
        />
        <BottomPanel
          onclickItemToField={this.onclickItemToField}
          selected_size={this.state.size}
          selected_speed={this.state.speed}
        />
      </div>
    );
  }
}

export { Wrapper };
