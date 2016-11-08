//backend

//Constructor for celestial bodies
var CelestialBody = function() {
  this.bodyName = "";
  this.orbits = "";
  this.satellites = [];
  this.circumference = 0;
  this.distance = 0;
  this.pdxLocation = 0;
};
//The Sun (satellites defined at bottom)
var Sol = new CelestialBody();
Sol.bodyName = "Sol";
Sol.orbits = "";
Sol.circumference = 9525.1;
Sol.distance = 36000000;
Sol.pdxLocation = "img/mercuryMap.jpg";

//The planets
//Mercury
var Mercury = new CelestialBody();
Mercury.bodyName = "Mercury";
Mercury.orbits = Sol;
Mercury.satellites = [];
Mercury.circumference = 9525.1;
Mercury.distance = 36000000;
Mercury.pdxLocation = "img/mercuryMap.jpg";

//Venus
var Venus = new CelestialBody();
Venus.bodyName = "Venus";
Venus.orbits = Sol;
Venus.satellites = [];
Venus.circumference = 23627;
Venus.distance = 21402600;
Venus.pdxLocation = "img/mercuryMap.jpg";
//Earth and Moon
var Luna = new CelestialBody();
Luna.bodyName = "Luna";
Luna.orbits = Earth;
Luna.satellites = [];
Luna.circumference = 6785;
Luna.distance = 238855;
Luna.pdxLocation = "img/earthMap.jpg";

var Earth = new CelestialBody();
Earth.bodyName = "Earth";
Earth.orbits = Sol;
Earth.satellites = [Luna];
Earth.circumference = 9525.1;
Earth.distance = 36000000;
Earth.pdxLocation = "img/earthMap.jpg";
//Mars and mooons
var Deimos = new CelestialBody();
Deimos.bodyName = "Deimos";
Deimos.orbits = Mars;
Deimos.satellites = [];
Deimos.circumference = 15;
Deimos.distance = 45794;
Deimos.pdxLocation = "img/mercuryMap.jpg";

var Phobos = new CelestialBody();
Phobos.bodyName = "Phobos";
Phobos.orbits = Mars;
Phobos.satellites = [];
Phobos.circumference = 46.8;
Phobos.distance = 18095;
Phobos.pdxLocation = "img/mercuryMap.jpg";

var Mars = new CelestialBody();
Mars.bodyName = "Mars";
Mars.orbits = Sol;
Mars.satellites = [Deimos, Phobos];
Mars.circumference = 9525.1;
Mars.distance = 36000000;
Mars.pdxLocation = "img/mercuryMap.jpg";

//Jupiter and moooons

var Europa = new CelestialBody();
Europa.bodyName = "Europa";
Europa.orbits = Jupiter;
Europa.satellites = [];
Europa.circumference = 46.8;
Europa.distance = 414000;
Europa.pdxLocation = "img/mercuryMap.jpg";

var Ganymede = new CelestialBody();
Ganymede.bodyName = "Ganymede";
Ganymede.orbits = Jupiter;
Ganymede.satellites = [];
Ganymede.circumference = 10273;
Ganymede.distance = 665000;
Ganymede.pdxLocation = "img/mercuryMap.jpg";

var Callisto = new CelestialBody();
Callisto.bodyName = "Callisto";
Callisto.orbits = Jupiter;
Callisto.satellites = [];
Callisto.circumference = 9410.3;
Callisto.distance = 1169855;
Callisto.pdxLocation = "img/mercuryMap.jpg";

var Io = new CelestialBody();
Io.bodyName = "Io";
Io.orbits = Jupiter;
Io.satellites = [];
Io.circumference = 7111.9;
Io.distance = 262,219 ;
Io.pdxLocation = "img/mercuryMap.jpg";

var Jupiter = new CelestialBody();
Jupiter.bodyName = "Jupiter";
Jupiter.orbits = Sol;
Jupiter.satellites = [Europa, Ganymede, Callisto, Io];
Jupiter.circumference = 272946;
Jupiter.distance = 483800000;
Jupiter.pdxLocation = "img/mercuryMap.jpg";

//Saturn and moon

var Titan = new CelestialBody();
Titan.bodyName = "Titan";
Titan.orbits = Saturn;
Titan.satellites = [];
Titan.circumference = 10053;
Titan.distance = 759234;
Titan.pdxLocation = "img/mercuryMap.jpg";

var Saturn = new CelestialBody();
Saturn.bodyName = "Saturn";
Saturn.orbits = Sol;
Saturn.satellites = [Titan];
Saturn.circumference = 235298;
Saturn.distance = 888200000;
Saturn.pdxLocation = "img/mercuryMap.jpg";

//Ismene
var Ismene = new CelestialBody();
Ismene.bodyName = "Ismene";
Ismene.orbits = Sol;
Ismene.satellites = [];
Ismene.circumference = 166;
Ismene.distance = 370337230;
Ismene.pdxLocation = "img/mercuryMap.jpg";
//Uranus and moons

var Oberon = new CelestialBody();
Oberon.bodyName = "Oberon";
Oberon.orbits = Uranus;
Oberon.satellites = [];
Oberon.circumference = 2971;
Oberon.distance = 362880;
Oberon.pdxLocation = "img/mercuryMap.jpg";

var Titania = new CelestialBody();
Titania.bodyName = "Titania";
Titania.orbits = Uranus;
Titania.satellites = [];
Titania.circumference = 3080;
Titania.distance = 271000;
Titania.pdxLocation = "img/mercuryMap.jpg";

var Uranus = new CelestialBody();
Uranus.bodyName = "Uranus";
Uranus.orbits = Sol;
Uranus.satellites = [Oberon, Titania];
Uranus.circumference = 9525.1;
Uranus.distance = 36000000;
Uranus.pdxLocation = "img/mercuryMap.jpg";


//Neptune and moon
var Triton = new CelestialBody();
Triton.bodyName = "Triton";
Triton.orbits = Neptune;
Triton.satellites = [];
Triton.circumference = 5284;
Triton.distance = 205000;
Triton.pdxLocation = "img/mercuryMap.jpg";

var Neptune = new CelestialBody();
Neptune.bodyName = "Neptune";
Neptune.orbits = Sol;
Neptune.satellites = [Triton];
Neptune.circumference = 96685;
Neptune.distance = 2795000000;
Neptune.pdxLocation = "img/mercuryMap.jpg";

//Pluto and Charon
var Charon = new CelestialBody();
Charon.bodyName = "Charon";
Charon.orbits = Pluto;
Charon.satellites = [];
Charon.circumference = 1190;
Charon.distance = 12200;
Charon.pdxLocation = "img/mercuryMap.jpg";

var Pluto = new CelestialBody();
Pluto.bodyName = "Pluto";
Pluto.orbits = Sol;
Pluto.satellites = [Charon];
Pluto.circumference = 4494;
Pluto.distance = 3670000000;
Pluto.pdxLocation = "img/mercuryMap.jpg";

//Sun satellites defined now that they're created
Sol.satellites = [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto];

//Methods for Celestial bodies
CelestialBody.prototype.quickStats = function () {
  return this.bodyName;
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
