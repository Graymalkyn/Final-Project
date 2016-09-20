import React from 'react';
import store from './prod-store.jsx';


class Detail extends React.Component {

  componentDidMount() {
    var listingID = Number(this.props.params.index);
    console.log('listing_id', listingID);
    var stateObj = store.copyState();
    console.log('stateObj', stateObj);
    var dude = stateObj.listings[listingID];
    console.log('dude', dude);
    this.setState(dude);
  }


  render() {
    console.log('detail state is what?', this.state);

    if (this.state === null) {
      return (<div>Loading item...</div>)
    }


    return (
      <div>
        <ul className="listing">
          {this.state.name.map(function(listings, i){
          // console.log('listings', listings);
            return (
              <li id="item-listing-box-1" key={i} >
                <div id="image"><strong></strong> <img src={listings.Images[0].url_170x135} /></div>
                <div id="title"><strong>Title:</strong> {listings.title} </div>
                <div id="listing_id"><strong>Listing ID#:</strong> {listings.listing_id} </div>
                <div id="description"><strong>Description:</strong> {listings.description} </div>
                <div id="price"><strong>Price:</strong> {listings.price} </div>
                <div id="url"><strong>URL:</strong><a href={listings.url} id="url"> {listings.url} </a></div>
              <button id="goToEtsy">See Full Listing</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

}

module.exports = Detail;
