$(document).ready(function() {
  var placeholderImage = "https://s19.postimg.org/qygpcxncj/unknown.png";
  var results = $("#resultArea");
  var users = [
    "freecodecamp",
    "storbeck",
    "terakilobyte",
    "habathcx",
    "RobotCaleb",
    "thomasballinger",
    "noobs2ninjas",
    "!@#*",
    "brunofin",
    "comster404",
    "esl_sc2",
    "ogamingsc2",
    "pewdiepie"
  ];

  const closedAccount = function(name) {
          status = "Account closed";
          channelLink = "undefined";
          channelName = name;
          img = placeholderImage;
          displayResults(img, channelName, channelLink, status);
        };
const accountDNE = function(name) {
          status = "Account doesn't exist";
          channelLink = "undefined";
          channelName = name;
          img = placeholderImage;
          displayResults(img, channelName, channelLink, status);
        };

const showUserInfo = (link, status, fallbackName) => {
  $.getJSON(link, function(channelJson) {
          channelName = channelJson.display_name || fallbackName;
    console.log(channelName);

    img = channelJson.logo;
          if (!img) img = placeholderImage;
          channelLink = channelJson.url;
          displayResults(img, channelName, channelLink, status);
        });
};
  
  function storeResults(name, index) {
    var status = "";
    var link = "";
    var channelLink = "";
    var img = "";
    var channelName = "";
    var url = "https://wind-bow.glitch.me/twitch-api/streams/" + name;
    $.ajax({
      url,
      success: function(json) {
        if (json.stream) status = "Streaming: " + json.stream.game;
        else status = "Offline";
        if(json._links) {
          
        link =
          "https://wind-bow.glitch.me/twitch-api/channels/" +
          json._links.channel.split("/").reverse()[0];
        showUserInfo(link,status, name); 
        } else {
          accountDNE(name);
        }
      },
      statusCode: {
        404: () => accountDNE(name),
        422: () => closedAccount(name)
      }
    }); //main get Req ends
    return "successfully returned from storeResults";
  } //storeResults ends

  //display part starts here
  function displayResults(img, channelName, channelLink, status) {
    var superElem = $("<div>").attr("class", "row");
    var elem = $("<div>");

    elem.attr("class", "col-xs-12 col-md-12");
    elem.append(
      $("<div>").attr("class", "col-xs-2 col-md-2").append($("<img>").attr({ src: img }))
    );

    var nameWithLink = $("<div>").attr("class", "col-xs-10 col-md-5").append();
    var nameLink = $("<a>").attr({ href: channelLink, target: "_blank" });
    nameLink.append($("<p>").text(channelName));
    elem.append(nameWithLink.append(nameLink));
    elem.append($("<div>").attr("class", "col-xs-10 col-md-5").append($("<p>").text(status)));
    superElem.append(elem);

    if (status.substring(0, 9) === "Streaming")
      results.append($("<li>").css("border-left", "9px solid rgb(75, 167, 75)").append(superElem));
    else if (status === "Offline")
      results.append($("<li>").css("border-left", "9px solid #aaa").append(superElem));
    else results.append($("<li>").css("border-left", "9px solid #c96554").append(superElem));
  } //displayResults ends

  function getResults() {
    for (var index = 0; index < users.length; index++) {
      storeResults(users[index], index);
    }
    return true;
  } //getResult ends;
  getResults();

  setTimeout(function() {
    var fimg = $("<img>").attr({
      src: "https://s19.postimg.org/5g4p3n90z/claping_hands.png",
      class: "flogo"
    });
    var footerText = $("<h2>").append(fimg);
    footerText.append($("<span>").text("th-th-th-that's all folks!"));
    $("footer").append(footerText);
  }, 2000);
});
