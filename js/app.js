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

// Constructor function
function Product (name, src) {
    this.name = name;
    this.url = src;

    this.clicked = 0;

    allProducts.push(this);
}


