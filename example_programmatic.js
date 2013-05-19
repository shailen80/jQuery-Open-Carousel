// Generated by CoffeeScript 1.3.3

/*
This is a demo coffeescript file for the programmatic example

The .ocarousel-example-programmatic carousel is NOT initialized automatically 
in the main coffeescript file, because it does not include the .ocarousel 
class.  All setup is done here.
*/


(function() {

  $(document).ready(function() {
    var ocarouselProg;
    ocarouselProg = new Ocarousel($(".ocarousel_example_programmatic"));
    $('button#add_submit').on('click', function() {
      var frame, index;
      frame = document.createElement("div");
      frame.innerHTML = $("#add_content").val();
      frame.className = "example_programmatic_slide";
      index = $("#add_index").val();
      return ocarouselProg.add(frame, index);
    });
    $('button#remove_submit').on('click', function() {
      var index;
      index = $("#remove_index").val();
      return ocarouselProg.remove(index);
    });
    return $('button#play_submit').on('click', function() {
      return ocarouselProg.timerToggle();
    });
  });

}).call(this);
