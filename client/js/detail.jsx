import React from 'react';
import store from './prod-store.jsx';

class Detail extends React.Component {



  componentDidMount() {
    var listingID = Number(this.props.params.index);
    // console.log('listingID', listingID);
    var stateObj = store.getState();
    console.log('stateObj', stateObj);

    if (stateObj.name.length > 0) {
      var item = stateObj.name.find(function(item){
        console.log('item', item);
        return item.listing_id === listingID;
      });
      this.setState(item);
      console.log('stateObj', stateObj.name.length)
    }
    else {
      store.actions.load();
      console.log('2nd load?')
      this.listeningFunc = (state) => {
        var item = state.name.find(function(item){
          return item.listing_id === listingID;
        });
        this.setState(item);
      }
      store.addListener(this.listeningFunc);
    }

    // var item = stateObj.name.find(function(item){
    //   return item.listing_id === listingID;
    // });

    // console.log(item);
    // this.setState(item);
  }

  componentWillUnmount(){
    store.removeListener(this.listeningFunc);
  }



  render() {


    if (this.state === null) {
      return (<div>Loading item...</div>)
    }

    // if (this.state.who_made === "i_did") {
    //   changeText.who_made("I made this item.");
    // }


    return (
      <div className="detail-container">
        <div className="detail-left-column">
          <div className="detail-image"><img src={this.state.Images[0].url_570xN} /></div>
          <div className="description"><strong>Description:</strong> {this.state.description}</div>
        </div>
        <div className="detail-right-column">
          <a href="https://mark-shuler-etsy.herokuapp.com/#/"><div className="back-link">Back to Selection Page</div></a>
          <div className="title"><strong>Title:</strong> {this.state.title} </div>
          <div className="listing-id">Listing ID#: {this.state.listing_id}</div>
          <div className="price"><strong>Price:</strong> ${this.state.price}</div>
          <div><strong>Currency Type:</strong> {this.state.currency_code}</div>
          <div><strong>Who Made this item?</strong> {this.state.who_made}</div>
          <div><strong>When was it made?</strong> {this.state.when_made}</div>
          <div>Height: {this.state.item_height} {this.state.item_dimensions_unit}</div>
          <div>Width: {this.state.item_width} {this.state.item_dimensions_unit}</div>
          <div>Length: {this.state.item_length} {this.state.item_dimensions_unit}</div>
          <div>Weight: {this.state.item_weight} {this.state.item_weight_units}</div>
          <a href={"https://www.etsy.com/listing/"  + this.state.listing_id}><div className="goto-link">Go to item on Etsy page</div></a>

        </div>
      </div>
    );
  }

}

module.exports = Detail;
