$(document).ready(function() {
  $("form#program-language-suggester").submit(function(event) {
    const loveToDesign = parseInt($("input#YesorNo").val());
    const loveCoffee = $("select#YesorNo").val();
    $("#C#").hide();
    $("#JavaScript").hide();
    $("#Python").hide();
    console.log(age);
    console.log(gender);

    if (gender === 'female' && age > 21 && age <= 30) {
      $("#BradPitt").show();
     } else if (gender === 'female' && age > 31) {
       $("#TomHanks").show();
     } else {
       $("#SandraBullock").show();
     }
     event.preventDefault();
  });
});