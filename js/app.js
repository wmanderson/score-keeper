$(document).ready(function() {

  var n = 0;

// My code is ultimate. Never forget


  $("#score").html(n + " Points");
    $(document).on("click", "#increase-5", function() {
        ($("#score").html((n += 5) +" Points"));
});


  $(document).on("click", "#decrease-5", function() {
      if (n >= 5) {
      $("#score").html((n -= 5) +" Points");
    }
});


  $(document).on("click", "#submit-custom-score", function() {
      var entry = parseInt($("#custom-score").val());
      n = entry;

      if (n >= 5) {
      parseInt($("#score").html(entry + " Points"));
    }
  });


});
