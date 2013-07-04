$(document).ready(function(){
  $("#map_form").on("submit", function(event){

    var options = {
      type: "GET",
      url: "http://bwb.webscript.io/weather?x=" + $("#lat").val() + "&y=" + $("#long").val(),

      complete: function(response, status_text){
        // 1. console.log(response)
        // 2. console.log(response.responseText) <-- Looks like JSON!
        // 3. $.parseJSON(response.responseText) <-- Now it IS JSON!
        // 4. $.parseJSON(response.responseText).currently
        // 5. $.parseJSON(response.responseText).currently.summary
        var weather = $.parseJSON(response.responseText).currently.summary;

        $("body").append(weather);
      }
    };

    // Uses the options from above.
    $.ajax(options);

    event.preventDefault();
  });
});