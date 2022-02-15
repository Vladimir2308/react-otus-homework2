import React from 'react';
import { Field } from './Field';
import './field.css';
import BottomPanel from './BottomPanel';
import HeaderPanel from './HeaderPanel';

interface ComponentState {
  date: Date;
  filling_btn_id?: string | null;
  horiz_count: number;
  vertic_count: number;
  speed: number;
  size: number;
  generation: number;
  isTimerPause: boolean;
  isClear: boolean;
  isStarted: boolean;
}

interface ComponentProps {
  error?: Error | null;
}

class Wrapper extends React.Component<unknown, ComponentState> {
  timerID: NodeJS.Timer | undefined;
  private readonly fieldElement: React.RefObject<Field>;
  constructor(state: ComponentState) {
    super(state);
    this.fieldElement = React.createRef();
    console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    // this.setGeneration = this.setGeneration.bind(this);
    this.state = {
      date: new Date(),
      horiz_count: 50,
      vertic_count: 30,
      speed: 1000,
      size: 1,
      generation: 0,
      isTimerPause: false,
      isClear: false,
      isStarted: false,
    };
  }

  componentDidMount(): void {
    // this.timerID = setInterval(() => this.tick(), 1000);
    // document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID as NodeJS.Timeout);
    document.removeEventListener('click', this.handleClick);
  }

  componentDidUpdate(nextState: ComponentState): boolean {
    return true;
  }

  shouldComponentUpdate(
    nextProps: ComponentProps,
    nextState: ComponentState
  ): boolean {
    return true;
  }

  tick(): void {
    this.setState({ date: new Date() });
  }

  handleClick = (e: Event) => {
    if ((e.target as Element).id === 'button1') {
      e.cancelBubble;
    }
  };

  setGeneration = (generation: number): void => {
    if (generation === -1) {
      this.setState({ isStarted: false, generation: generation });
    } else {
      this.setState({ generation: generation });
    }
  };

  onclickItemToField = (button_id: string): void => {
    if (button_id === 'size1') {
      this.setState({ horiz_count: 50, vertic_count: 30, size: 1 });
    } else if (button_id === 'size2') {
      this.setState({ horiz_count: 70, vertic_count: 50, size: 2 });
    } else if (button_id === 'size3') {
      this.setState({ horiz_count: 100, vertic_count: 80, size: 3 });
    }
    if (button_id === 'speed1') {
      this.fieldElement.current?.changeSpeed(1000);
      this.setState({ speed: 1000 });
    } else if (button_id === 'speed2') {
      this.fieldElement.current?.changeSpeed(250);
      this.setState({ speed: 250 });
    } else if (button_id === 'speed3') {
      this.fieldElement.current?.changeSpeed(25);
      this.setState({ speed: 25 });
    } else if (button_id === 'start') {
      this.fieldElement.current?.startLife();
      this.setState({ isStarted: true });
      this.setState({ isTimerPause: false });
    } else if (button_id === 'resume') {
      this.fieldElement.current?.resumeLife();
      this.setState({ isTimerPause: false });
    } else if (button_id === 'pause') {
      this.fieldElement.current?.pauseLife();
      this.setState({ isTimerPause: true });
    } else if (button_id === 'clear') {
      this.setState({ filling_btn_id: null });
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

  render() {
    return (
      <div>
        <HeaderPanel
          onclickItemToField={this.onclickItemToField}
          generation={this.state.generation}
          isTimerPause={this.state.isTimerPause}
          active_btn={this.state.filling_btn_id}
        />
        <Field
          horiz_count={this.state.horiz_count}
          vertic_count={this.state.vertic_count}
          intervalMs={this.state.speed}
          ref={this.fieldElement}
          setGeneration={this.setGeneration}
          filling_btn_id={this.state.filling_btn_id}
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
