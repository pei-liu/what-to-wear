import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>What To Wear</h1>
        {this.props.children}
      </div>
    );
  }
}
