import React from 'react';
import store from './prod-store.jsx';

class ProdList extends React.Component{

constructor() {
  super();

  store.actions.load();

  this.state = store.getState();
};

  render() {
    console.log('this.state', this.state);
    return (
      <div>
        <div>Name: {this.state.name}</div>
      </div>
    )
  };
};

module.exports = ProdList;
