import React, { Props } from 'react';
import { Field } from './Field';
import './field.css';
import fetch from 'node-fetch';

interface ComponentState {
  date: Date;
  fact: string;
  isLoading: boolean;
  error?: Error | null;
  factNum: number;
  infoMsg?: string | null;
}

class Wrapper extends React.Component<unknown, ComponentState> {
  timerID: NodeJS.Timer | undefined;
  constructor(state: ComponentState) {
    super(state);
    console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      date: new Date(),
      fact: '',
      isLoading: false,
      error: null,
      factNum: 0,
      infoMsg: null,
    };
  }

  componentDidMount(): void {
    console.log('componentDidMount');
    this.setState({ isLoading: true });
    this.timerID = setInterval(() => this.tick(), 1000);

    this.getExternalData();
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
    clearInterval(this.timerID as NodeJS.Timeout);
    document.removeEventListener('click', this.handleClick);
  }

  componentDidUpdate(nextState: ComponentState): void {
    console.log('__________this.state.factNum - ' + this.state.factNum);
    console.log('__________nextState.factNumm - ' + nextState.factNum);
    if (this.state.factNum != nextState.factNum) {
      if (this.state.factNum === 10) {
        console.log('_____________  fact num set 10 !!!!!!!!!');
        this.setState({ infoMsg: '10 фактов было показано', factNum: 11 });
      }
    }
  }

  tick(): void {
    this.setState({ date: new Date() });
  }

  async doFetch(url: string) {
    const response = await fetch(url);
    // const response = fetch(url);
    return response;
  }

  async getExternalData() {
    const url = 'https://catfact.ninja/fact';
    let factNum = this.state.factNum;
    // const factFrom;
    let infoMsg: string | null;
    if (factNum == 11) {
      infoMsg = null;
    } else {
      factNum++;
    }
    console.log('before fetch');
    let json;
    const response = this.doFetch(url);
    response
      .then((response) => {
        const promise = response.json();
        console.log('json() ' + promise);
        return promise;
      })
      .then((data) =>
        this.setState({
          fact: data.fact,
          factNum: factNum,
          isLoading: false,
          infoMsg: infoMsg,
        })
      )
      .catch((error) => {
        console.log('error!!!! ' + error);
        this.setState({ error, isLoading: false });
      });

    console.log('after fetch before then');

    await this.setState({
      fact: json.fact,
      factNum: factNum,
      isLoading: false,
      infoMsg: infoMsg,
    });
  }

  handleClick = (e: Event) => {
    if ((e.target as Element).id === 'button1') {
      this.getExternalData();
      e.cancelBubble;
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
    const { isLoading, error } = this.state;

    if (error) {
      return <p>Произошла ошибка {error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    let infoMsg;
    if (this.state.infoMsg) {
      infoMsg = <h3>{this.state.infoMsg}</h3>;
    }
    return (
      <div>
        <h3>Текущее время {this.currentTime(this.state.date)}</h3>
        <Field horiz_count={5} vertic_count={5} />
        <h3>Случайный факт: {this.state.fact}</h3>
        {infoMsg}
        <button id="button1">Следующий факт</button>
      </div>
    );
  }
}

export { Wrapper };