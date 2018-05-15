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

var imgElement1 = document.getElementById('product1');
var imgElement2 = document.getElementById('product2');
var imgElement3 = document.getElementById('product3');
var sectionElement = document.getElementById('click-tracker-container');
var resultUlist = document.getElementById('vote-result-container');

var product1Index = 0;
var product2Index = 0;
var product3Index = 0;

var totalClicks = 0;


// Constructor function
function Product(src, name) {
    this.src = src;
    this.name = name;

    this.timesClicked = 0;

    allProducts.push(this);
};

// Event Listeners
sectionElement.addEventListener('click', sectionCallBack);

function sectionCallBack(event) {
    checkTotalClicks();
    console.log(event);

    if (event.target.id) {
        totalClicks++;
        allProducts[event.target.id].timesClicked++;

        replaceProducts();
    } else {
        alert('Please click on an image');
    }
};

// Helper functions
function replaceProducts() {

    var cantBeThis = [product1Index, product2Index, product3Index];

    do {
        product1Index = Math.floor(Math.random() * allProducts.length);
    } while (cantBeThis.includes(product1Index));
    cantBeThis.push(product1Index);

    do {
        product2Index = Math.floor(Math.random() * allProducts.length);
    } while (cantBeThis.includes(product2Index));
    cantBeThis.push(product2Index);

    do {
        product3Index = Math.floor(Math.random() * allProducts.length);
    } while (cantBeThis.includes(product3Index));
    cantBeThis.push(product3Index);

    imgElement1.src = allProducts[product1Index].src;
    imgElement1.id = product1Index;

    imgElement2.src = allProducts[product2Index].src;
    imgElement2.id = product2Index;

    imgElement3.src = allProducts[product3Index].src;
    imgElement3.id = product3Index;
};
// ======================================================

function renderResults() {
    for (var i in allProducts) {
        var liElement = document.createElement('li');
        liElement.textContent = allProducts[i].name + ' clicked: ' + allProducts[i].timesClicked + ' times';
        resultUlist.append(liElement);
    }
};

function checkTotalClicks() {
    if (totalClicks === 24) {
        renderResults();

        sectionElement.removeEventListener('click', sectionCallBack);
    }
};

// Math to Calculate Random Number - via mdn
function getRandom() {
    return Math.random();
}

var r2d2bag = new Product('../img/bag.jpg', 'R2D2 Bag');
var bananaSlicer = new Product('../img/banana.jpg', 'Banana Slicer');
var ipadStand = new Product('../img/bathroom.jpg', 'Bathroom iPad Stand');
var rainBoots = new Product('../img/boots.jpg', 'Rain Boots');
var toasterOven = new Product('../img/breakfast.jpg', 'All in One Breakfast Center');
var meatballGum = new Product('../img/bubblegum.jpg', 'Meatball Bubblegum');
var awkwardChair = new Product('../img/chair.jpg', 'Awkward Uncomfortable Chair');
var cthulhu = new Product('../img/cthulhu.jpg', 'Cthulhu Action Figure');
var duckDogMuzzle = new Product('../img/dog-duck.jpg', 'Duck Dog Muzzle');
var dragonMeat = new Product('../img/dragon.jpg', 'Dragon Meat Can');
var penUtensils = new Product('../img/pen.jpg', 'Pen Cap Eating Utensils');
var petSweeperFeet = new Product('../img/pet-sweep.jpg', 'Pet Sweep Debris Removal System');
var pizzaScissors = new Product('../img/scissors.jpg', 'Pizza Server Scissors');
var sharkSleepingBag = new Product('../img/shark.jpg', 'Shark Sleeping Bag');
var babySweeper = new Product('../img/sweep.png', 'Baby Sweeper Onesie');
var tauntaunSleepingBag = new Product('../img/tauntaun.jpg', 'Tauntaun Sleeping Bag');
var unicornMeat = new Product('../img/unicorn.jpg', 'Unicorn Meat');
var tentacleUsb = new Product('../img/usb.gif', 'Tentacle USB');
var wateringCan = new Product('../img/water-can.jpg', 'Useful Watering Can');
var wineGlass = new Product('../img/wine-glass.jpg', 'Wine Glass');


replaceProducts();