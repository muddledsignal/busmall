'use strict';

/*
Array of picture objects
Picture constructor
Event listener
Event handler
Variable to hold clicks
Picture clicks ++
Change Source
Change Text
*/

// Global Variables
var allProducts = [];

// var imgElement1 = document.getElementById('product1');
// var imgElement2 = document.getElementById('product2');
// var imgElement3 = document.getElementById('product3');

var product1Index = 0;
var product2Index = 0;
var product3Index = 0;


// Constructor function
function Product (name, src) {
    this.name = name;
    this.src = src;

    this.timesClicked = 0;

    allProducts.push(this);
};
// ====================Old Table=============================
// Product.prototype.render = function() {
//     var tableElement = document.getElementById('allProductsTable');
//     var tableRow = document.createElement('tr');
//     var tableHeader = document.createElement('th');
//     var tableData = document.createElement('td');

//     tableHeader.textContent = this.url;
//     tableRow.append(tableHeader);

//     tableData.textContent = this.name;
//     tableRow.append(tableData);

//     tableElement.append(tableRow);
// }==========================================================

// Product.prototype.render = function() {
//     var listElement = document.getElementById('allProductsList');
//     var ulElement = document.createElement('ul');
//     var liElement = document.createElement('li');

//     ulElement.textContent = '';


//     liElement.textContent = this.url;

// }

// function loadNewProducts() {
//     product1Index = Math.floor(Math.random() * allProducts.length);
// }

var listElement = document.getElementById('allProductsList');
// var ulElement = document.createElement('ul');
var liElement = document.createElement('li');
var pElement = document.createElement('p');





var r2d2bag = new Product('R2D2 Bag', '../img/bag.jpg');
var bananaSlicer = new Product('Banana Slicer', '../img/banana.jpg');
var ipadStand = new Product('Bathroom iPad Stand', '../img/bathroom.jpg');
var rainBoots = new Product('Rain Boots', '../img/boots.jpg');
var toasterOven = new Product('All in One Breakfast Center', '../img/breakfast.jpg');
var meatballGum = new Product('Meatball Bubblegum','../img/bubblegum.jpg');
var awkwardChair = new Product('Awkward Uncomfortable Chair','../img/.jpg');
var cthulhu = new Product('Cthulhu Action Figure','../img/cthulhu.jpg');
var duckDogMuzzle = new Product('Duck Dog Muzzle','../img/dog-duck.jpg');
var dragonMeat = new Product('Dragon Meat Can','../img/dragon.jpg');
var penUtensils = new Product('Pen Cap Eating Utensils','../img/pen.jpg');
var petSweeperFeet = new Product('Pet Sweep Debris Removal System','../img/pet-sweep.jpg');
var pizzaScissors = new Product('Pizza Server Scissors','../img/scissors.jpg');
var sharkSleepingBag = new Product('Shark Sleeping Bag','../img/shark.jpg');
var babySweeper = new Product('Baby Sweeper Onesie','../img/sweep.jpg');
var tauntaunSleepingBag = new Product('Tauntaun Sleeping Bag','../img/tauntaun.jpg');
var unicornMeat = new Product('Unicorn Meat','../img/unicorn.jpg');
var tentacleUsb = new Product('Tentacle USB','../img/usb.gif');
var wateringCan = new Product('Useful Watering Can','../img/water-can.jpg');
var wineGlass = new Product('Wine Glass','../img/wine-glass.jpg');

// Math to Calculate Random Number - via mdn
// function getRandom() {
//     return Math.random();
// }