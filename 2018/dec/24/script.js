$(".crossRotate").click(function() {
    //alert($( this ).css( "transform" ));
    if ($(this).css("transform") == "none") {
      $(this).css("transform", "rotate(45deg)");
    } else {
      $(this).css("transform", "");
    }
  });
  
  $("p").click(function() {
    $(this).slideUp();
  });
  