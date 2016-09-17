

var revealButton = $('#reveal-button');
var hiddenText = $('#hidden-text');

revealButton.on('click', function(){
  console.log('clicked reveal')
  hiddenText.toggleClass('appear');
});


// **********************************************


var goToUrl = $('#goToEtsy');

goToUrl.on('click', function(){
  console.log('clicked link')
  location.href = "https://www.etsy.com/?ref=hdr";
  // document.location = "https://www.etsy.com/?ref=hdr";
  // document.open("https://www.etsy.com/?ref=hdr");
  // document.open({listings.url});
});
