import React from 'react';
import store from './prod-store.jsx';

class Detail extends React.Component {



  componentDidMount() {
    var listingID = Number(this.props.params.index);
    console.log('listingID', listingID);
    var stateObj = store.getState();
    console.log('stateObj', stateObj);
    var item = stateObj.name.find(function(item){
      return item.listing_id === listingID;
    });

    console.log(item);
    this.setState(item);
  }


  render() {


    if (this.state === null) {
      return (<div>Loading item...</div>)
    }


    return (
      <div id="detail-container">
        <div id="detail-left-column">
          <div><img src={this.state.Images[0].url_570xN} /></div>
          <div className="detail-description"><strong>Description:</strong> {this.state.description}</div>
        </div>
        <div id="detail-right-column">
          <a href="http://localhost:5000/#/"><div className="back-link">Back to Selection Page</div></a>
          <div className="title"><strong>Title:</strong> {this.state.title} </div>
          <div>Listing ID#: {this.state.listing_id}</div>
          <div className="price"><strong>Price:</strong> {this.state.price}</div>
          <div><strong>Currency Type:</strong> {this.state.currency_code}</div>
          <a href={"https://www.etsy.com/listing/"  + this.state.listing_id}><div className="goto-link">Go to item on Etsy page</div></a>

        </div>
      </div>
    );
  }

}

module.exports = Detail;
