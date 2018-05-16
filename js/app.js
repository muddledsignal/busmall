'use strict';


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

// ====================Chart Variables====================

var votes = [];
var productNamesArray = [];
var productNamesArray = ['r2d2', 'bananaSlicer', 'ipadStand', 'rainBoots', 'breakfastCenter', 'bubblegum', 'awkwardChair', 'cthulhu', 'dogMuzzle', 'dragonMeat', 'penCap', 'petSweep', 'pizzaScissors', 'sharkSleepingBag', 'babySweeper', 'tauntaunSleepingBag', 'unicornMeat', 'tentacle', 'wateringCan', 'wineGlass'];
// var slateColorsArray = ['#97ffff', '#8deeee', '#79cdcd', '#00ced1'];
// var purpleColorsArray = ['#ffe1ff','#eed2ee','#d8bfd8','#cdb5cd'];
var chartDrawn = false;

// Constructor function
function Product(src, name, productDescription) {
  this.src = src;
  this.name = name;
  this.productDescription = productDescription;

  this.timesClicked = 0;

  allProducts.push(this);
}

function updateChartArrays() {
  for (var i = 0; i < allProducts.length; i++) {
    productNamesArray[i] = allProducts[i].name;
    console.log(productNamesArray);
    votes[i] = allProducts[i].timesClicked;
    // backgroundColors = slateColorsArray[i];
  }
}


var data = {
  labels: productNamesArray,
  datasets: [{
    data: votes,
    backgroundColor: [
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue'
    ],
    hoverBackgroundColor: [
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple'
    ]
  }]
};

function drawChart() {
  var ctx = document.getElementById('productVoteChart').getContext('2d');
  var voteChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      // animation:
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}

// =========================================


// Event Listeners
sectionElement.addEventListener('click', sectionCallBack);

function sectionCallBack(event) {
  checkTotalClicks();
  // console.log(event);
  
  if (event.target.id) {
    totalClicks++;
    allProducts[event.target.id].timesClicked++;
    
    replaceProducts();
  } else {
    alert('Please click on an image');
  }
}





if (chartDrawn) {
  productVoteChart.update();
}

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
}
// ======================================================

function renderResults() {
  for (var i in allProducts) {
    var liElement = document.createElement('li');
    liElement.textContent = allProducts[i].name + ' clicked: ' + allProducts[i].timesClicked + ' times';
    resultUlist.append(liElement);
  }
}

function tallyVotes(thisProduct) {
  for (var i = 0; i < allProducts.length; i++) {
    votes[i] = allProducts[i].timesClicked;
  }
}



function checkTotalClicks() {
  if (totalClicks === 6) {
    tallyVotes();
    renderResults();
    drawChart();

    sectionElement.removeEventListener('click', sectionCallBack);
  }
}

// Math to Calculate Random Number - via mdn
function getRandom() {
  return Math.random();
}

new Product('../img/bag.jpg', 'r2d2', 'R2D2 Bag');
new Product('../img/banana.jpg', 'bananaSlicer', 'Banana Slicer');
new Product('../img/bathroom.jpg', 'ipadStand', 'Bathroom iPad Stand');
new Product('../img/boots.jpg', 'rainBoots', 'Rain Boots');
new Product('../img/breakfast.jpg', 'breakfastCenter', 'All in One Breakfast Center');
new Product('../img/bubblegum.jpg', 'bubblegum', 'Meatball Bubblegum');
new Product('../img/chair.jpg', 'awkwardChair', 'Awkward Uncomfortable Chair');
new Product('../img/cthulhu.jpg', 'cthulhu', 'Cthulhu Action Figure');
new Product('../img/dog-duck.jpg', 'dogMuzzle', 'Duck Dog Muzzle');
new Product('../img/dragon.jpg', 'dragonMeat', 'Dragon Meat Can');
new Product('../img/pen.jpg', 'penCap', 'Pen Cap Eating Utensils');
new Product('../img/pet-sweep.jpg', 'petSweep', 'Pet Sweep Debris Removal System');
new Product('../img/scissors.jpg', 'pizzaScissors', 'Pizza Server Scissors');
new Product('../img/shark.jpg', 'sharkSleepingBag', 'Shark Sleeping Bag');
new Product('../img/sweep.png', 'babySweeper', 'Baby Sweeper Onesie');
new Product('../img/tauntaun.jpg', 'tauntaunSleepingBag', 'Tauntaun Sleeping Bag');
new Product('../img/unicorn.jpg', 'unicornMeat', 'Unicorn Meat');
new Product('../img/usb.gif', 'tentacle', 'Tentacle USB');
new Product('../img/water-can.jpg', 'wateringCan', 'Useful Watering Can');
new Product('../img/wine-glass.jpg', 'wineGlass', 'Wine Glass');

replaceProducts();