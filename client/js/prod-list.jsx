import React from 'react';
import store from './prod-store.jsx';

class ProdList extends React.Component{

constructor() {
  super();

  store.actions.load();

  this.state = store.getState();

  var self = this;

  store.addListener(function(state){
    // console.log('changed', state)
    self.setState(state);
  })
};

  render() {

    var className = '';
    return (
      <div>Results:
        <ul className="list">
          {this.state.name.map(function(listStuff, i){
          console.log('listStuff', listStuff);
            return (<li key={i}  > {listStuff.title}</li>)
          })}
        </ul>
      </div>
    )

  };
};

module.exports = ProdList;
