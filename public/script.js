if (window.Etsy === undefined) window.Etsy = {};

(function (Etsy){

  function start() {
    console.log('hello');

    $.ajax({
      url: '/api/listings/active'
    })
    .done(function(data){
      console.log('listings', data);
    });

  }
  Etsy.start = start;

  
})(window.Etsy);
