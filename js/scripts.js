
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

    //OMSI marker object
    var markerOMSI = new google.maps.Marker({
      position: new google.maps.LatLng(45.5084, -122.666),
      map: map,
      title: "OMSI",
      icon: "img/big-icons/sun-icon.png"
    });
    var omsiString = "I was up all night wondering where the Sun had gone… then it dawned on me."


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
      icon: "img/big-icons/mercury-icon.png",
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
      icon: "img/big-icons/venus-icon.png"

    });
    var venusString = "I'm Venus and I am the hottest planet in the solar system.";
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
      icon: "img/big-icons/earth-icon.png"

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
      icon: "img/big-icons/mars-icon.png"
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
      icon: "img/big-icons/jupiter-icon.png"
    });
    var jupiterString = "Q: How does Jupiter hold up his trousers? <br>A: With an asteroid belt.";
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
      icon: "img/big-icons/saturn-icon.png"
    });
    var saturnString = "Q: What did Mars say to Saturn? <br>A: Give me a ring sometime!";
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
      icon: "img/big-icons/ismene-icon.png"
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
      icon: "img/big-icons/uranus-icon.png"

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
      icon: "img/big-icons/neptune-icon.png"

    });
    var neptuneString = "What kind of music do planets listen to? ...Nep-tunes.";
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
      icon: "img/big-icons/pluto-icon.png"
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

//planet navbar
  $("#sun-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#sun-hidden, #sun-hidden-img").fadeIn(2000);
    });

  $("#mercury-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#mercury-hidden").fadeIn(2000);
    $("#mercury-hidden-img").fadeIn(2000);
    });

  $("#venus-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#venus-hidden").fadeIn(2000);
    $("#venus-hidden-img").fadeIn(2000);
  });

  $("#earth-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#earth-hidden").fadeIn(2000);
    $("#earth-hidden-img").fadeIn(2000);
  });

  $("#mars-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#mars-hidden").fadeIn(2000);
    $("#mars-hidden-img").fadeIn(2000);
  });

  $("#jupiter-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#jupiter-hidden").fadeIn(2000);
    $("#jupiter-hidden-img").fadeIn(2000);
  });

  $("#saturn-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#saturn-hidden").fadeIn(2000);
    $("#saturn-hidden-img").fadeIn(2000);
  });

  $("#uranus-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#uranus-hidden").fadeIn(2000);
    $("#uranus-hidden-img").fadeIn(2000);
  });

  $("#neptune-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#neptune-hidden").fadeIn(2000);
    $("#neptune-hidden-img").fadeIn(2000);
  });

  $("#pluto-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#pluto-hidden").fadeIn(2000);
    $("#pluto-hidden-img").fadeIn(2000);
  });

  $("#ismene-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").hide();
    $("#ismene-hidden").fadeIn(2000);
    $("#ismene-hidden-img").fadeIn(2000);
  });

  $("#map-navbar").click(function() {
    $(".planets-hidden").hide();
    $(".directions-hidden").hide();
    $("#intro").hide();
    $("#map").fadeIn(2000);
    myMap();
  });


//map buttons
  $("#button-sun").click(function() {
    $("#sun-hidden-img").hide();
    $("#sun-hidden").hide();
    $("#sun-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-mercury").click(function() {
    $("#mercury-hidden-img").hide();
    $("#mercury-hidden").hide();
    $("#mercury-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-venus").click(function() {
    $("#venus-hidden-img").hide();
    $("#venus-hidden").hide();
    $("#venus-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-earth").click(function() {
    $("#earth-hidden-img").hide();
    $("#earth-hidden").hide();
    $("#earth-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-mars").click(function() {
    $("#mars-hidden-img").hide();
    $("#mars-hidden").hide();
    $("#mars-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-jupiter").click(function() {
    $("#jupiter-hidden-img").hide();
    $("#jupiter-hidden").hide();
    $("#jupiter-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-saturn").click(function() {
    $("#saturn-hidden-img").hide();
    $("#saturn-hidden").hide();
    $("#saturn-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-uranus").click(function() {
    $("#uranus-hidden-img").hide();
    $("#uranus-hidden").hide();
    $("#uranus-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-neptune").click(function() {
    $("#neptune-hidden-img").hide();
    $("#neptune-hidden").hide();
    $("#neptune-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-pluto").click(function() {
    $("#pluto-hidden-img").hide();
    $("#pluto-hidden").hide();
    $("#pluto-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });

  $("#button-ismene").click(function() {
    $("#ismene-hidden-img").hide();
    $("#ismene-hidden").hide();
    $("#ismene-directions-hidden").fadeIn(2000);
    $("#map").fadeIn(2000);
    myMap();
  });
});
