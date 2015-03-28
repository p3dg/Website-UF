

(function() {
  "use strict";

  var el = document.getElementById("quotes");

  var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  ];

  function rand(xs) {
    return xs.slice(0).sort(function(){
      return .5 - Math.random();
    });
  }

  function quote(q) {
    return "<p>&ldquo;"+ q[0] +"&rdquo; &mdash; <em>"+ q[1] +"</em></p>";
  }
  el.innerHTML = rand(quotes).map(quote).join('');

}());