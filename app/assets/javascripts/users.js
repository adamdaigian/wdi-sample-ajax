$(document).ready(function(){
  $("form[data-remote]").on("submit", function(event){

    console.log(this);

    var options = {
      type: $(this).attr("method"),
      url: $(this).attr("action") + ".js",

      data: $(this).serialize(),

      beforeSend: function(){
        console.log("beforeSend");
      },

      complete: function(){
        console.log("complete");
      }
    };

    console.log(options);

    $.ajax(options);

    event.preventDefault();
  });
});