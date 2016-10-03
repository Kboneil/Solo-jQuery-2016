$(function (){
var red = 0;
var blue = 0;
var green = 0;
var yellow = 0;
$('button').on('click', function (){
  var $color = $(this).data('color');


  if($color === "red"){
    console.log('red');
    $('.container').append('<div class="red"></div>');
    $('.red').addClass("color-cube");

    red++;
    console.log(red);
    $('#red').text("Total Red: " + red);
  }
  if($color==="blue"){
    console.log('blue');
    $('.container').append('<div class="blue"></div>');
    $('.blue').addClass("color-cube");
    blue++;
    console.log(blue);
      $('#blue').text("Total Blue: " + blue);
  }
  if($color==="green"){
    console.log('green');
    $('.container').append('<div class="green"></div>');
    $('.green').addClass("color-cube");
    green++;
      $('#green').text("Total Green: " + green);
  }
  if($color==="yellow"){
    console.log('yellow');
    $('.container').append('<div class="yellow"></div>');
    $('.yellow').addClass("color-cube");
    yellow++;
      $('#yellow').text("Total Yellow: " + yellow);
  }

});//end of click function

}); //end of doc ready
