import React from 'react';
import store from './prod-store.jsx';
import { Link } from 'react-router'

class ProdList extends React.Component{

constructor() {
  console.log('step 1');
  super();

  this.state = store.getState();


}

componentWillMount(){
  console.log('step2', this.state);
  store.actions.load();
  // var self = this;

  this.listeningFunc = (state) => {
    this.setState(state);
  }

  store.addListener(this.listeningFunc);

}

componentWillUnmount(){
  store.removeListener(this.listeningFunc);

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
