//backend

//Constructor for celestial bodies
var CelestialBody = function() {
  this.bodyName = "";
  this.orbits = "";
  this.satellites = [];
  this.circumference = 0;
  this.distance = 0;
  this.pdxLocation = 0;
  this.details = [materials, axial tilt, etc.];

};
//The Sun
var Sol = new CelestialBody();

//The planets
var Mercury = new CelestialBody();
Mercury.bodyName = "Mercury";
Mercury.orbits = Sol;
Mercury.satellites = [];
Mercury.circumference = 9525.1;
Mercury.distance = 36000000;
Mercury.pdxLocation = "img/mercuryMap.jpg";
Mercury.details = ["represented by a hematite", "mostly ferrous metals"];

var Venus = new CelestialBody();
var Earth = new CelestialBody();
var Mars = new CelestialBody();
var Jupiter = new CelestialBody();
var Saturn = new CelestialBody();
var Ismene = new CelestialBody();
var Uranus = new CelestialBody();
var Neptune = new CelestialBody();
var Pluto = new CelestialBody();



//Jupiter
// var Jupiter = new CelestialBody();
// Jupiter.orbits = Sol;
// Jupiter.satellites = [Ganymede, Callisto, Io, Europa];
// //Jupiter's moons
// var Ganymede = new CelestialBody();
// Ganymede.orbits = Jupiter;
// Ganymede.satellites = [];

//Methods for Celestial bodies
CelestialBody.prototype.quickStats = function () {
  return [this.bodyName, this.circumference, this.distance];
};

//fullstats function that returns every property?

//frontend
$(document).ready(function() {

  //hover event for displaying quickstats
  $("#popup").hover(function() {
    $(this).show();
    $(this).text(this.name, this.quickStats[0])
  }, function() {
    $(this).hide();
  });
  //click event for displaying full info



});
