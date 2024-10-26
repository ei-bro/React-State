import React, { Component } from 'react';

class MyWillMountAndDidMount extends Component {
  constructor() {
    super();
    this.state = {
      randomText: '',
    };
  }

  // componentDidMount() {
  //   alert('component mounted');
  //   this.setState({ randomText: 'Loading ...' });
  // }

  componentDidMount() {
    // alert("component mounted")
    this.setState({ randomText: this.generateRandomString() });
  }

  generateRandomString = () => {
    const characters = 'abc defg hijklm nopqrst uvwxyz';
    let randomString = '';

    for (let i = 0; i < 25; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }

    return randomString;
  };

  render() {
    return (
      <div>
        <h1>Component Will Mount & Component Did Mount Example</h1>
        <br />
        <h1>Random String </h1>
        <h3>{this.state.randomText}</h3>
      </div>
    );
  }
}

export default MyWillMountAndDidMount;
