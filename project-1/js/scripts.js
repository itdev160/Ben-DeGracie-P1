//welcome message
var salutation = 'Welcome, ';
var greeting = salutation + 'here are the best budget, mid-tier, and high-roller lights that you can use to spice up your office.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//light strip
var strip = 'RGB Light Strip';
var stripEl = document.getElementById('strip');
stripEl.textContent = strip;

var price1 = '$18.99';
var price1El = document.getElementById('price1');
price1El.textContent = price1;

var reviews1 = '4.5 / 5 stars';
var reviews1El = document.getElementById('reviews1');
reviews1El.textContent = reviews1;

var recommend = 'YES!';
var recommendEl = document.getElementById('recommend');
recommendEl.textContent = recommend;

//phillips
var phillips = 'Phillips Hue Go Light';
var phillipsEl = document.getElementById('phillips');
phillipsEl.textContent = phillips;

var price2 = '$79.99';
var price2El = document.getElementById('price2');
price2El.textContent = price2;

var reviews2 = '4.7 / 5 stars';
var reviews2El = document.getElementById('reviews2');
reviews2El.textContent = reviews2;

//nanoleaf
var nanoleaf = 'Nanoleaf Rhythm Light Panels';
var nanoleafEl = document.getElementById('nanoleaf');
nanoleafEl.textContent = nanoleaf;

var price3 = '$199.99';
var price3El = document.getElementById('price3');
price3El.textContent = price3;

var reviews3 = '4.7 / 5 stars';
var reviews3El = document.getElementById('reviews3');
reviews3El.textContent = reviews3;

(function(){
/**
 * Utility Functions
 */

 //Returns today's date, formatted
 var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

//Returns DOM element by id
//We're just wrapping document.getElementById
//in a shorthand function. If this seems confusing,
//then just replace getEl with document.getElementById
//in the write PackageInfo function
var getEl = function (id) {
    return document.getElementById(id);
};

//write date
dateEl = getEl('date');
dateEl.textContent = getTodaysDate();
}());
