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
Venus.distance = 67000000;
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
Earth.distance = 93000000;
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
Mars.distance = 140000000;
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
Jupiter.distance = 483000000;
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
Saturn.distance = 483000000;
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
Uranus.distance = 483000000;
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
Pluto.distance = 3700000000;
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
  myMap = function() {
    var mapOptions = {
      center: new google.maps.LatLng(45.5244733, -122.6513304),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    //create map object
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //OMSI icon object
    var imageOMSI = {
      url: "img/small-icons/sun-icon.png",
      size: new google.maps.Size(25, 25),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0, 25)
    };
    //OMSI marker object
    var markerOMSI = new google.maps.Marker({
      position: new google.maps.LatLng(45.5084, -122.666),
      map: map,
      title: "OMSI",
      icon: imageOMSI
    });
    var omsiString = "I am a mass of incandescent gas, a gigantic nuke-lee-ear furnace!";
    var omsiInfoWindow = new google.maps.InfoWindow({
      content: omsiString
    });
    markerOMSI.addListener("click", function() {
      omsiInfoWindow.open(map, markerOMSI)
    });

    // Mercury marker object
    var markerMercury = new google.maps.Marker({
      position: new google.maps.LatLng(45.5094, -122.666916),
      map: map,
      title: "Mercury",
      icon: "img/small-icons/mercury-icon.png",
      anchor: new google.maps.Point(12, 12),
    });
    var mercuryString = "";
    var mercuryInfoWindow = new google.maps.InfoWindow({
      content: mercuryString
    });
    markerMercury.addListener("click", function() {
      mercuryInfoWindow.open(map, markerMercury)
    });

    // Venus marker object
    var markerVenus = new google.maps.Marker({
      position: new google.maps.LatLng(45.5102973, -122.66655),
      map: map,
      title: "Venus",
      icon: "img/small-icons/venus-icon.png"

    });
    var venusString = "Venus is the hottest planet in the solar system.";
    var venusInfoWindow = new google.maps.InfoWindow({
      content: venusString
    });
    markerVenus.addListener("click", function() {
      venusInfoWindow.open(map, markerVenus)
    });


    // Earth marker object
    var markerEarth = new google.maps.Marker({
      position: new google.maps.LatLng(45.5108753, -122.6670293),
      map: map,
      title: "Earth",
      icon: "img/small-icons/earth-icon.png"

    });
    var earthString = "";
    var earthInfoWindow = new google.maps.InfoWindow({
      content: earthString
    });
    markerEarth.addListener("click", function() {
      earthInfoWindow.open(map, markerEarth)
    });


    // Mars marker object
    var markerMars = new google.maps.Marker({
      position: new google.maps.LatLng(45.5121377, -122.6679734),
      map: map,
      title: "Mars",
      icon: "img/small-icons/mars-icon.png"
    });
    var marsString = "";
    var marsInfoWindow = new google.maps.InfoWindow({
      content: marsString
    });
    markerMars.addListener("click", function() {
      marsInfoWindow.open(map, markerMars)
    });

    // Jupiter marker object
    var markerJupiter = new google.maps.Marker({
      position: new google.maps.LatLng(45.5218451, -122.6660479),
      map: map,
      title: "Jupiter",
      icon: "img/small-icons/jupiter-icon.png"
    });
    var jupiterString = "";
    var jupiterInfoWindow = new google.maps.InfoWindow({
      content: jupiterString
    });
    markerJupiter.addListener("click", function() {
      jupiterInfoWindow.open(map, markerJupiter)
    });

    // Saturn marker object
    var markerSaturn = new google.maps.Marker({
      position: new google.maps.LatLng(45.4755784, -122.6685779),
      map: map,
      title: "Saturn",
      icon: "img/small-icons/saturn-icon.png"
    });
    var saturnString = "";
    var saturnInfoWindow = new google.maps.InfoWindow({
      content: saturnString
    });
    markerSaturn.addListener("click", function() {
      saturnInfoWindow.open(map, markerSaturn)
    });

    // Ismene marker object
    var markerIsmene = new google.maps.Marker({
      position: new google.maps.LatLng(45.5177771, -122.6537634),
      map: map,
      title: "Ismene",
      icon: "img/small-icons/ismene-icon.png"
    });
    var ismeneString = "";
    var ismeneInfoWindow = new google.maps.InfoWindow({
      content: ismeneString
    });
    markerIsmene.addListener("click", function() {
      ismeneInfoWindow.open(map, markerIsmene)
    });

    // Uranus marker object
    var markerUranus = new google.maps.Marker({
      position: new google.maps.LatLng(45.5125688, -122.5933671),
      map: map,
      title: "Uranus",
      icon: "img/small-icons/uranus-icon.png"

    });
    var uranusString = "I am an ice giant.";
    var uranusInfoWindow = new google.maps.InfoWindow({
      content: uranusString
    });
    markerUranus.addListener("click", function() {
      uranusInfoWindow.open(map, markerUranus)
    });

    // Neptune marker object
    var markerNeptune = new google.maps.Marker({
      position: new google.maps.LatLng(45.5467316, -122.5660408),
      map: map,
      title: "Neptune",
      icon: "img/small-icons/neptune-icon.png"

    });
    var neptuneString = "I have a very active climate.";
    var neptuneInfoWindow = new google.maps.InfoWindow({
      content: neptuneString
    });
    markerNeptune.addListener("click", function() {
      neptuneInfoWindow.open(map, markerNeptune)
    });

    // Pluto marker object
    var markerPluto = new google.maps.Marker({
      position: new google.maps.LatLng(45.570384, -122.726872),
      map: map,
      title: "Pluto",
      icon: "img/small-icons/pluto-icon.png"
    });
    var plutoString = "I was not discovered until 1930.";
    var plutoInfoWindow = new google.maps.InfoWindow({
      content: plutoString
    });
    markerPluto.addListener("click", function() {
      plutoInfoWindow.open(map, markerPluto)
    });
} //function myMap

//frontend
  //initialize map


  //hover event for displaying quickstats
  //img is placeholder for icon object
  // $("img").hover(function() {
  //   $("#sun-hidden").show();
  // }, function() {
  //   $("#sun-hidden").hide();
  // });

  // $("img").click(function() {
  //
  // });
  //click event for displaying full info

  // $("#sun-navbar, #sun-hidden").click(function() {
  //   $("#sun-navbar").toggle();
  //     $("#sun-hidden").toggle();
  //     $("#map").show();
  //     myMap();
  //    });
    // $("#sun-navbar").click(function() {
    //   console.log("CLICK");
    //   $(".planets-hidden").fadeOut(2000, function(){
    //     $("#sun-hidden").fadeIn(2000);
    //     $("#map").show();
    //     myMap();
    //     });
    //   });

//frontend

  $("#sun-navbar").click(function() {
    $(".planets-hidden").hide();
      $("#sun-hidden, #sun-hidden-img").fadeIn(2000);
    });

  $("#mercury-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#mercury-hidden").fadeIn(2000);
      $("#mercury-hidden-img").fadeIn(2000);
    });

  $("#venus-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#venus-hidden").fadeIn(2000);
    $("#venus-hidden-img").fadeIn(2000);
  });

  $("#earth-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#earth-hidden").fadeIn(2000);
    $("#earth-hidden-img").fadeIn(2000);
  });

  $("#mars-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#mars-hidden").fadeIn(2000);
    $("#mars-hidden-img").fadeIn(2000);
  });

  $("#jupiter-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#jupiter-hidden").fadeIn(2000);
    $("#jupiter-hidden-img").fadeIn(2000);
  });

  $("#saturn-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#saturn-hidden").fadeIn(2000);
    $("#saturn-hidden-img").fadeIn(2000);
  });

  $("#uranus-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#uranus-hidden").fadeIn(2000);
    $("#uranus-hidden-img").fadeIn(2000);
  });

  $("#neptune-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#neptune-hidden").fadeIn(2000);
    $("#neptune-hidden-img").fadeIn(2000);
  });

  $("#pluto-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#pluto-hidden").fadeIn(2000);
    $("#pluto-hidden-img").fadeIn(2000);
  });

  $("#moon-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#moon-hidden").fadeIn(2000);
    $("#moon-hidden-img").fadeIn(2000);
  });

  $("#ismene-navbar").click(function() {
    $(".planets-hidden").hide();
    $("#ismene-hidden").fadeIn(2000);
    $("#ismene-hidden-img").fadeIn(2000);
  });

  $("#button-sun").click(function() {
    $("#sun-hidden, #sun-hidden-img").hide();
    $("#map").show();
    myMap();
  });
});
