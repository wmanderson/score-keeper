$(document).ready(function() {

  var n = 0;




  $("#score").html(n + " Points");
    $(document).on("click", "#increase-5", function() {
        ($("#score").html((n += 5) +" Points"));
});


  $(document).on("click", "#decrease-5", function() {
      if (n >= 5) {
      $("#score").html((n -= 5) +" Points");}
});



  $(document).on("click", "#submit-custom-score", function() {

      var entry = parseInt($("#custom-score").val());
      n = entry;

      parseInt($("#score").html(entry + " Points"));
  });


});
