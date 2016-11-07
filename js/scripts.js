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
Venus.bodyName = "Venus";
Venus.orbits = Sol;
Venus.satellites = [];
Venus.circumference = 9525.1;
Venus.distance = 36000000;
Venus.pdxLocation = "img/mercuryMap.jpg";
Venus.details = ["represented by a hematite", "mostly ferrous metals"];

var Earth = new CelestialBody();
Earth.bodyName = "Earth";
Earth.orbits = Sol;
Earth.satellites = [];
Earth.circumference = 9525.1;
Earth.distance = 36000000;
Earth.pdxLocation = "img/mercuryMap.jpg";
Earth.details = ["represented by a hematite", "mostly ferrous metals"];

var Mars = new CelestialBody();
Mars.bodyName = "Mars";
Mars.orbits = Sol;
Mars.satellites = [];
Mars.circumference = 9525.1;
Mars.distance = 36000000;
Mars.pdxLocation = "img/mercuryMap.jpg";
Mars.details = ["represented by a hematite", "mostly ferrous metals"];

var Jupiter = new CelestialBody();
Jupiter.bodyName = "Jupiter";
Jupiter.orbits = Sol;
Jupiter.satellites = [];
Jupiter.circumference = 9525.1;
Jupiter.distance = 36000000;
Jupiter.pdxLocation = "img/mercuryMap.jpg";
Jupiter.details = ["represented by a hematite", "mostly ferrous metals"];

var Saturn = new CelestialBody();
Saturn.bodyName = "Saturn";
Saturn.orbits = Sol;
Saturn.satellites = [];
Saturn.circumference = 9525.1;
Saturn.distance = 36000000;
Saturn.pdxLocation = "img/mercuryMap.jpg";
Saturn.details = ["represented by a hematite", "mostly ferrous metals"];

var Ismene = new CelestialBody();
Ismene.bodyName = "Ismene";
Ismene.orbits = Sol;
Ismene.satellites = [];
Ismene.circumference = 9525.1;
Ismene.distance = 36000000;
Ismene.pdxLocation = "img/mercuryMap.jpg";
Ismene.details = ["represented by a hematite", "mostly ferrous metals"];

var Uranus = new CelestialBody();
Uranus.bodyName = "Uranus";
Uranus.orbits = Sol;
Uranus.satellites = [];
Uranus.circumference = 9525.1;
Uranus.distance = 36000000;
Uranus.pdxLocation = "img/mercuryMap.jpg";
Uranus.details = ["represented by a hematite", "mostly ferrous metals"];

var Neptune = new CelestialBody();
Neptune.bodyName = "Neptune";
Neptune.orbits = Sol;
Neptune.satellites = [];
Neptune.circumference = 9525.1;
Neptune.distance = 36000000;
Neptune.pdxLocation = "img/mercuryMap.jpg";
Neptune.details = ["represented by a hematite", "mostly ferrous metals"];

var Pluto = new CelestialBody();
Pluto.bodyName = "Pluto";
Pluto.orbits = Sol;
Pluto.satellites = [];
Pluto.circumference = 9525.1;
Pluto.distance = 36000000;
Pluto.pdxLocation = "img/mercuryMap.jpg";
Pluto.details = ["represented by a hematite", "mostly ferrous metals"];




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
  $("#sun-icon").hover(function() {
    $("#sun-hidden").show();
  }, function() {
    $(this).hide();
  });
  //click event for displaying full info



});
