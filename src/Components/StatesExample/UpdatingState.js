import React, { Component } from 'react';
import Reset from './Reset';

class UpdatingState extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      status: 'Even',
    };
  }

  increment = () => {
    this.setState(x => {
      if (x.counter < 3) {
        return { counter: this.state.counter + 1 };
      }
      return x;
    });

    // with out call-back function (unexpected result)
    // if (this.state.counter % 2 == 0) {
    //   this.setState({ status: 'Even' });
    // } else {
    //   this.setState({ status: 'Odd' });
    // }

    // with call-back function
    this.setState(prevState => {
      //   console.log(prevState);
      if (prevState.counter % 2 == 0) {
        return { status: 'Even' };
      } else {
        return { status: 'Odd' };
      }
    });

    // use call back functions inside setState method to avoid unexpected errors.
  };

  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  reset = () => {
    this.setState(() => ({ counter: 0 }));
  };

  render() {
    return (
      <div>
        <h1>Updating State</h1>

        <h2> counter : {this.state.counter}</h2>
        <h2> status : {this.state.status}</h2>

        <button onClick={this.increment}>Add 1</button>

        <button onClick={this.decrement}>Minus 1</button>

        <button onClick={this.reset}>reset</button>

        {/* <Reset resetBtn={this.reset} /> */}
      </div>
    );
  }
}

export default UpdatingState;
