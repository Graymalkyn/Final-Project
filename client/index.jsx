import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';
import ProdList from './js/prod-list.jsx';


require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

          <div className="container">


            <ProdList/>

          </div>

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
