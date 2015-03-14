$(document).ready(function () { // load json file using jquery ajax

  var german = [];
  var english = [];

  var english_r = [];
  var russian = [];
  var sentence_r = [];

  var prevWords = [];


    $.getJSON('data.json', function (data) {
      // Push German and English words to array
      for(var i = 0; i < data.length; i++) {
        german.push(data[i]["german"]);
        english.push(data[i]["english"]);
      }
    });

    $.getJSON('german/data_r.json', function (data) {
      // Push German and English words to array
      for(var i = 0; i < data.length; i++) {
        russian.push(data[i]["russian"]);
        english_r.push(data[i]["english"]);
        sentence_r.push(data[i]["sentence"]);
      }
    });

    function showLast() {
      var lastWord = prevWords[(prevWords.length -1)];
    }

    function translate(){
        // Get random string between 0 and number of objects in json
      var max = german.length;
      var n = Math.floor(Math.random() * max);
      console.log("current word is " + n);
      prevWords.push(n);
      $('#german').text(german[n]);
      $('.reveal').click(function(){
      $('#english').text(english[n]);
      showLast();
      });

    }
    function translateRussian(){
        // Get random string between 0 and number of objects in json
      var max = russian.length;
      var r = Math.floor(Math.random() * max);
      console.log(r);
      prevWords.push(r);
      console.log(prevWords);
      $('#russian').text(russian[r]);
      $('.reveal').click(function(){
        $('#english').text(english_r[r]);
        $('#sentence').text(sentence_r[r]);
      });
    }
    function getLastGerman() {
      var index = (prevWords.length - 1);
      if (index > 0) { prevWords.splice(index, 1); }
      var lastWord = prevWords[(prevWords.length -1)];
      console.log("previous words are " + prevWords);
      console.log("last words is " + lastWord);
      $('#german').text(german[lastWord]);
      $('#russian').text(russian[lastWord]);
      $('.reveal').click(function(){
      $('#english').text(english[lastWord]);
      $('#sentence').text(sentence_r[lastWord]);
      });
    }



// defines russian and german
  if (window.location.href.indexOf('/german') > -1 ) {

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
  $('.last').click(function(){
    $('#english').text("?"); 	// replace all existing content
    getLastGerman();
  });
} else
 if (window.location.href.indexOf('russian') > -1 ) {
  translateRussian();
    $('.load').click(function(){
      translateRussian();
      $('#english').text("?"); 	// replace all existing content
      $('#sentence').text("?"); 	// replace all existing content
    });
  }
  $('.last').click(function(){
    $('#english').text("?"); 	// replace all existing content
    $('#sentence').text("?"); 	// replace all existing content
    getLastGerman();
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
