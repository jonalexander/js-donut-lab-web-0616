//donut-counter.js

var donuts = parseInt(prompt("How many donuts?"));
var guests = parseInt(prompt("How many guests?"));

if (guests > donuts) {
 alert('You have ${donuts} and ${guests}. You dont have enough donuts!')
} else {
 alert("You have " + donuts + " and " + guests + ". You have enough donuts!")
}
