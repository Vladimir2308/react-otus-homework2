import React from 'react';
import { Field } from './Field';
import './field.css';
import Panel from './Panel';

interface ComponentState {
  date: Date;
  isLoading: boolean;
  error?: Error | null;
  infoMsg?: string | null;
  horiz_count: number;
  vertic_count: number;
  speed: number;
}

class Wrapper extends React.Component<unknown, ComponentState> {
  timerID: NodeJS.Timer | undefined;
  constructor(state: ComponentState) {
    super(state);
    console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      date: new Date(),
      isLoading: false,
      error: null,
      infoMsg: null,
      horiz_count: 50,
      vertic_count: 30,
      speed: 1,
    };
  }

  componentDidMount(): void {
    console.log('componentDidMount');
    this.setState({ isLoading: true });
    this.timerID = setInterval(() => this.tick(), 1000);

    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
    clearInterval(this.timerID as NodeJS.Timeout);
    document.removeEventListener('click', this.handleClick);
  }

  componentDidUpdate(nextState: ComponentState): void {}

  tick(): void {
    this.setState({ date: new Date() });
  }

  handleClick = (e: Event) => {
    if ((e.target as Element).id === 'button1') {
      e.cancelBubble;
    }
  };

  setSpeed = (speed: number): void => {
    this.setState({ speed: speed });
  };

  onclickItemToField = (button_id: number): void => {
    if (button_id === 1) {
      this.setState({ horiz_count: 50, vertic_count: 30 });
    } else if (button_id === 2) {
      this.setState({ horiz_count: 70, vertic_count: 50 });
    } else if (button_id === 3) {
      this.setState({ horiz_count: 100, vertic_count: 80 });
    }
    if (button_id === 11 && this.state.speed != 1) {
      this.setState({ speed: 1 });
    } else if (button_id === 12 && this.state.speed != 2) {
      this.setState({ speed: 2 });
    } else if (button_id === 13 && this.state.speed != 3) {
      this.setState({ speed: 3 });
    }
  };

  currentTime(date: Date): string {
    let seconds = '' + date.getSeconds();
    let minutes = '' + date.getMinutes();
    if (seconds.length == 1) {
      seconds = '0' + seconds;
    }
    if (minutes.length == 1) {
      minutes = '0' + minutes;
    }
    return date.getHours() + ' : ' + minutes + ' : ' + seconds;
  }

  render() {
    console.log('Wrapper render');
    const { error } = this.state;

    if (error) {
      return <p>Произошла ошибка {error.message}</p>;
    }
    let infoMsg;

    if (this.state.infoMsg) {
      infoMsg = <h3>{this.state.infoMsg}</h3>;
    }
    return (
      <div>
        <h3>Текущее время {this.currentTime(this.state.date)}</h3>
        <Field
          horiz_count={this.state.horiz_count}
          vertic_count={this.state.vertic_count}
          speed={this.state.speed}
          // setSpeed={this.setSpeed}
          // parentCallback={this.setSpeed}
        />
        {infoMsg}
        {/*<button id="button1">Следующий факт</button>*/}
        <Panel
          onclickItemToField={this.onclickItemToField}
          selected_size={1}
          selected_speed={11}
        />
      </div>
    );
  }
}

export { Wrapper };
