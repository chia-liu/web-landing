console.clear()
function scrollY(){
  if (window.pageYOffset > 0){
    $(".header").addClass("clrDark");
  }else {
    $(".header").removeClass("clrDark");
  }
}



