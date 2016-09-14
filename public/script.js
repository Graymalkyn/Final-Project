if (window.Etsy === undefined) window.Etsy = {};

(function (Etsy){

  function start() {

    $.ajax({
      url: '/api/listings/active'
    })
    .done(function(data){
      console.log('listings', data);
    });

  }
  Etsy.start = start;


})(window.Etsy);
