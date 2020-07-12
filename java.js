// a esplicação completa da matematica por trás das contas para fazer andar os ponteiros neste site https://css-tricks.com/css3-clock/

$(document).ready(function() {


// Ponteiro dos segundos
  setInterval(function() {
    var seconds = new Date().getSeconds();
    var sDegree = seconds * 6;
    var sRotate = "rotate(" + sDegree + "deg)";
    $(".ponteiro-segundos").css({"transform": sRotate});
    $(".ponteiro-segundos").css({"transform-origin": "bottom"});
  }, 1000);


  // Ponteiro das horas
  setInterval(function() {
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var hDegree = hours * 30 + (min / 2);
    var hRotate = "rotate(" + hDegree + "deg)";
    $(".ponteiro-horas").css({"transform": hRotate});
    $(".ponteiro-horas").css({"transform-origin": "bottom"});
  }, 1000);


  // Ponteiro das minutos
  setInterval(function() {
    var minutes = new Date().getMinutes();
    var mDegree = minutes * 6;
    var mRotate = "rotate(" + mDegree + "deg)";
    $(".ponteiro-minutos").css({"transform": mRotate});
    $(".ponteiro-minutos").css({"transform-origin": "bottom"});
  }, 1000);

})
