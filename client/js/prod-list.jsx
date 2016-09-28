import React from 'react';
import store from './prod-store.jsx';
import { Link } from 'react-router'

class ProdList extends React.Component{

constructor() {
  super();

  store.actions.load();

  this.state = store.getState();

  var self = this;

  store.addListener(function(state){
    // console.log('changed', state)
    self.setState(state);
  });
}

  render() {

    return (
      <div className="prod-container">
        <ul className="prod-list">
          {this.state.name.map(function(listings, i){
            return (
              <li className="prod-list-item" key={i} >
                <div className="prod-image"><strong></strong> <img src={listings.Images[0].url_170x135} /></div>
                <div className="title"> {listings.title} </div>
                <div className="description"><strong>Description: </strong>{listings.description}</div>
                <div className="price"><strong>Price: </strong> ${listings.price} </div>
                <Link to={'/detail/' + listings.listing_id}><div className="full-listing-button">See Full Listing</div></Link>
              </li>
            )
          })}
        </ul>
      </div>
    );

  }

}

module.exports = ProdList;
