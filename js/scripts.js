$(document).ready(function() {
  $("form#program-language-suggester").submit(function(event) {
    const loveVideoGames = confirm ("input#YesorNo").val();
    const loveToDesign = confirm ("input#YesorNo").val();
    const loveCoffee = confirm ("select#YesorNo").val();
    const loveTea= confirm ("input#YesorNo").val();
    const loveDogs = confirm ("select#YesorNo").val();
    $("#C#").hide();
    $("#JavaScript").hide();
    $("#Python").hide();
    console.log(age);
    console.log(gender);

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