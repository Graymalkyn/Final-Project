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
          {this.state.name.map(function(listings, i){
          console.log('listings', listings);
            return (
              <li key={i} >
                <div id="title">Title: {listings.title} </div>
                <div id="listing_id">Listing ID#: {listings.listing_id} </div>
                <div id="description">Description: {listings.description} </div>
                <div id="currency_code">Currency Code: {listings.currency_code}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )

  };
};

module.exports = ProdList;
