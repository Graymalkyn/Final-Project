import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';
import ProdList from './js/prod-list.jsx';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import Detail from './js/detail.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

          <div className="container">

            <p>app</p>
            <Link to={'/ProdList'}>ProdList</Link>
            <Link to={'/detail/'}>Detail</Link>

            {this.props.children}
          </div>

      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProdList} />
      <Route path="detail/:index" component={Detail} />
    </Route>
  </Router>
), document.getElementById('app'));
