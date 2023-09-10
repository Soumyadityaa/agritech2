// script.js
var adminButton = document.getElementById("adminButton");
var userButton = document.getElementById("userButton");
var community =document.getElementById("community");
var weather =document.getElementById("weather");
var water =document.getElementById("water");


adminButton.addEventListener("click", function () {
    window.location.href = "admin_login.html";
});

userButton.addEventListener("click", function () {
    window.location.href = "farmer_login.html";
});

community.addEventListener("click", function () {
    window.location.href = "community_forum.html";
});

weather.addEventListener("click", function () {
    window.location.href = "weather.html";
});

water.addEventListener("click", function () {
    window.location.href = "water.html";
});