var $ = require('jQuery');


var state = {
  name: []
}

var store = {
  listeners: [],
  actions: {}
}

store.addListener = function(listener) {
  store.listeners.push(listener);
}

// console.log('store', store)
store.change = function(){
  // console.log('store change', state);
  store.listeners.forEach(function(cb){
    cb(store.getState());
  });
}

store.getState = function() {
  return{
      name: state.name
  };
}

store.actions.load = function() {
  // console.log('window', window);

  $.ajax({
    url:'/api/listings/active',
    method: 'GET'
  })


  .done(function(data){
    console.log('data', data);
    data.results.forEach(function(newListing){
      state.name.push(newListing);
    })
    store.change();
  });
}

module.exports = store;
