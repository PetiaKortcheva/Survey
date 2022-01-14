$(document).ready(function() {
  $("form#program-language-suggester").submit(function(event) {
    event.preventDefault();
    let loveVideoGames = parseInt($("input#loveVideoGames").val());
    let loveToDesign = parseInt($("input#loveToDsign").val());
    let loveCoffee = parseInt($("input#loveCoffee").val());
    let loveTea= parseInt($("input#loveTea").val());
    let loveDogs = parseInt($("loveDogs").val());
    $("#C#").hide();
    $("#JavaScript").hide();
    $("#Python").hide();
    console.log(loveVideoGames);
    console.log(loveToDesign);
    console.log(loveCoffee);
    console.log(loveTea);
    console.log(loveDogs);


    if (loveVideoGames === Yes && loveDogs === Yes && loveCoffee === Yes) {
      $("C#").show();
     } else if (loveToDesign === Yes && LoveTea === Yes && loveDogs === Yes) {
       $("#JavaScript").show();
     } else if (loveVideoGames === Yes && LoveTea === Yes && loveToDesign === Yes) {
       $("#Python").show();
     } else {
       $ ("C#JavaScriptPython").show();
     }
  }); 
});