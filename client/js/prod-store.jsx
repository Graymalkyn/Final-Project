var $ = require('jQuery');


var state = {
  name: []
}

var store = {
  callbacks: [],
  actions: {}
}

store.change = function(){
  console.log('store change', state);
  store.callbacks.forEach(function(cb){
    cb(store.getState());
  });
}

store.getState = function() {
  return{
      name: state.name
  };
}


store.actions.load = function() {
  console.log('window', window);


  // request('/api/listings/active', function(error, response, body){
  //   if (!error && response.statusCode == 200) {
  //     console.log(body);
  //   }
  // })


  $.ajax({
    url:'/api/listings/active',
    method: 'GET'
  })


  .done(function(data){
    console.log('data', data);
    data.results.forEach(function(newList){
      state.name.push(newList);
    })
    store.change();
  });
}

module.exports = store;
