$(document).ready(function () { // load json file using jquery ajax

  var german = [];
  var english = [];

    $.getJSON('data.json', function (data) {
      // Push German and English words to array
      for(var i = 0; i < data.length; i++) {
        german.push(data[i]["german"]);
        english.push(data[i]["english"]);
      }
    });

    function translate(){
        // Get random string between 0 and number of objects in json
      var max = german.length;
      var n = Math.floor(Math.random() * max);
      console.log(n);
      $('#german').text(german[n]);
      $('.reveal').click(function(){
        $('#english').text(english[n]);
      });
    }

translate();

$('.load').click(function(){
  translate();
  $('#english').text("?"); 	// replace all existing content
});


$(document).keyup(function(event){
  if(event.keyCode == 39){
    translate();
    $('#english').text("?"); 	// replace all existing content
  }
  if(event.keyCode == 40){
    $('.reveal').click();
  }
});





});


// How it works:
// Write a JSON file full of objects with german: and english: properties. √
// Put these object properties into two arrays in app.js. They will be numbered in the array. √
// use math.random to select a random number and grab text and its translation √
// use jquery to insert this data √


//TODO
// Find an API or publicly available XML/JSON file for German-> English text. √
// Design interface and how the app works. √
// Maybe build in sections for numbers, particular phrases.
