var $ = require('jQuery');
console.log('prod-store');

var state = {
  name: []
}

var store = {
  listeners: [],
  actions: {}
}
// console.log('store', store)

store.addListener = function(listener) {
  store.listeners.push(listener);
}

store.removeListener = function(listener) {
  var index = store.listeners.indexOf(listener);
  console.log('store index', index);
  store.listeners.splice(index, 1);
}

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
  if (state.name.length > 0) {
    store.change();
    return;
  }

  $.ajax({
    url:'/api/users/shopListings',
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
