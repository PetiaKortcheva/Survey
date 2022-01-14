$(document).ready(function() {
  $("form#program-language-suggester").submit(function(event) {
    event.preventDefault();
    let loveVideoGames = $("input#loveVideoGames").val();
    let loveToDesign = $("input#loveToDsign").val();
    let loveCoffee = $("input#loveCoffee").val();
    let loveTea= $("input#loveTea").val();
    let loveDogs = $("loveDogs").val();
    $("#C#").hide();
    $("#JavaScript").hide();
    $("#Python").hide();
    console.log(loveVideoGames);
    console.log(loveToDesign);

    if (loveVideoGames === 'Yes' && loveDogs === Yes && loveCoffee === Yes) {
      $("C#").show();
     } else if (loveToDesign === 'Yes' && LoveTea === 'Yes') {
       $("#JavaScript").show();
     } else {
       $("#Python").show();
     }
     event.preventDefault();
  });
});