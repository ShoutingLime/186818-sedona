"use strict";

var link = document.querySelector(".search-form-button");
var el = document.querySelector(".search-popup");

link.addEventListener("click", function(event) {
    event.preventDefault();
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
});
