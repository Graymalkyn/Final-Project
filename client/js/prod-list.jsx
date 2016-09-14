import React from 'react';
import store from './prod-store.jsx';

class ProdList extends React.Component{

constructor() {
  super();

  store.actions.load();

  this.state = store.getState();

  var self = this;
  store.addListener(function(state){
    console.log('changed', state)
    self.setState(state);
  })
};

  render() {
    console.log('this.state', this.state);

    var newItem = [];

    return (
      <div>
        <div>Results: {this.state.name.map(function(listStuff, i){
            return (<li listStuff={i} > {i + 1}</li>)
          })}
        </div>
      </div>
    )

    // $(this.state.name).filter(function(user){
    //   if ('user_id' === '54614032'){
    //     newItem.push(user)
    //   }
    // });

    return (
      <ul>
        {newItem}
      </ul>
    )
  };
};

module.exports = ProdList;
