$(document).ready(function(){
  var key = "0026315b38907d284485dbe2c881d699";
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = Math.floor(position.coords.latitude);
      var long = Math.floor(position.coords.longitude);
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID="+key,function(data){
        $("#temp").html(JSON.stringify(data));
        var temp = round(data.main.temp-273);
        containerColor(temp);
        var stat = data.weather[0].main;
        var loc = data.name+", "+data.sys.country;
        var icon = "wi-owm-"+data.weather[0].id;
        $("#icon").addClass(icon);
        $("#weatherStatus").html(stat);
        $("#location").html(loc);
        $("#temp").html(temp);
      });// ends getjson
    }, function(error) {
      if(error.code == error.PERMISSION_DENIED) {
        alert("Weather app has not been given LOCATION permissions. Grant them and try again.");
      }
      else{
        console.log("Location fetching error:", error);
        alert("Error happened! Check console for more info.");
      }
    }, {timeout: 6000}); 
  }// if ends

  $(".convert").clickToggle( function(){
    $("#cel").html("°F");
    $("#fah").html("°C");
    $("#temp").html( toFah($("#temp").html()) );
    }
    , function(){
    $("#cel").html("°C");
    $("#fah").html("°F");
    $("#temp").html( toCel($("#temp").html()) );
  });
});//ends document ready function

function round(no, precision){
  var multp = Math.pow(10, precision || 1);
  return (Math.round(no * multp))/ multp;
}

function toFah(temp){
  return round(9/5*temp + 32);
}

function toCel(temp){
  return round(5/9*(temp-32));
}

(function($) {
  $.fn.clickToggle = function(func1, func2) {
    var funcs = [func1, func2];
    this.data('toggleclicked', 0);
    this.click(function() {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
    });
      return this;
  };
}(jQuery));

function containerColor(temp){
  if(temp > 40)
    $(".container").css("background","#eab28e");
  else if(temp > 30)
    $(".container").css("background","rgb(234, 237, 130)");
  else
    $(".container").css("background","#a3d0e7")
}
