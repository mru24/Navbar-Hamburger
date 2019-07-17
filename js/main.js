$(document).ready(function() {


//****************NAVBAR HAMBURGER***********************

var icon = $('nav button.navbar-toggler');

// MOUSEOVER
$(icon)
.mouseout(function() {
  $('span', this).removeClass('stage1');
})

.mouseover(function() {
  $('span', this).addClass('stage1');
});

// CLICK
$(icon).click(function() {
  if($('span', this).hasClass('stage2')) {
    $('span', this).removeClass('stage3');
    $('span', this).removeClass('stage2');
  } else {
    $('span', this).addClass('stage2');
    setTimeout(function() {
      $('span.navbar-toggler-icon').addClass('stage3');
    }, 1200);
  }
});
//****************NAVBAR HAMBURGER END***********************



});
