$(document).ready(function () {


  // Seconds hand
  setInterval(function () {
    var seconds = new Date().getSeconds();
    var sDegree = seconds * 6;
    var sRotate = "rotate(" + sDegree + "deg)";
    $(".seconds").css({ "transform": sRotate });
    $(".seconds").css({ "transform-origin": "bottom" });
  }, 1000);


  // Hours hand
  setInterval(function () {
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var hDegree = hours * 30 + (min / 2);
    var hRotate = "rotate(" + hDegree + "deg)";
    $(".hour").css({ "transform": hRotate });
    $(".hour").css({ "transform-origin": "bottom" });
  }, 1000);


  // Minutes hand
  setInterval(function () {
    var minutes = new Date().getMinutes();
    var mDegree = minutes * 6;
    var mRotate = "rotate(" + mDegree + "deg)";
    $(".minutes").css({ "transform": mRotate });
    $(".minutes").css({ "transform-origin": "bottom" });
  }, 1000);

});
