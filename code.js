// image("pen", "assets/pen.png");
// setSize("pen", 50, 50);
// setPosition("pen", 154, 190); // y - 50, x - 6

// var ball_pen = [154, 190]; // pos of pen;

// function penMove(x, y) {
//   setPosition("pen", x, y);
//   penUp();
//   moveTo(x + 6, y + 50);
//   penDown();
//   return [x, y];
// } // same as moveTo (but doesn't draw)

// function ballMove(distance, dir, bp) { // move in a line in any dierction and distance.
//   hide();
//   var pen_x = bp[0];
//   var pen_y = bp[1];
//   var tx = pen_x + 6;
//   var ty = pen_y + 50;
//   penUp();
//   moveTo(tx, ty);
//   penDown();
//   var inc = distance / 50;
//   for (var i = 0; i < 50; i++) {
//     setPosition("pen", pen_x, pen_y);
//     moveTo(tx, ty);
//     if (dir == "forward") {
//       ty -= inc;
//       pen_y -= inc;
//     }
//     else if (dir == "backward") {
//       ty += inc;
//       pen_y += inc;
//     }
//     else if (dir == "right") {
//       tx += inc;
//       pen_x += inc;
//     }
//     else if (dir == "left") {
//       tx -= inc;
//       pen_x -= inc;
//     }
//   }
//   var ball_pen = [pen_x, pen_y];
//   return ball_pen;
// }

// function ballArc(s_angle, e_angle, radius, direction, bp) {
//   hide();
//   var radPerDeg = Math.PI/180;
//   var pen_x = bp[0];
//   var pen_y = bp[1];
//   var tx = pen_x + 6;
//   var ty = pen_y + 50;
//   function genPointRight(centerX, centerY, degree, radius){
//     var x = 0;
//     var y = 0;
//     var d = s_angle;
//     var inc = (e_angle - s_angle) / 100;
//     var points = [];
//     for (var i = 0; i < 100; i++) {
//       x = centerX - (radius * Math.cos(d*radPerDeg));
//       y = centerY - (radius * Math.sin(d*radPerDeg));
//       var point = [x, y];
//       d += inc;
//       points.push(point);
//     }
//     return points;
//   }
//   function genPointLeft(centerX, centerY, degree, radius){
//     var x = 0;
//     var y = 0;
//     var d = e_angle;
//     var inc = (e_angle - s_angle) / 100;
//     var points = [];
//     for (var i = 0; i < 100; i++) {
//       x = centerX + (radius * Math.cos(d*radPerDeg));
//       y = centerY - (radius * Math.sin(d*radPerDeg));
//       var point = [x, y];
//       d -= inc;
//       points.push(point);
//     }
//     return points;
//   }
//   var circle_points = [];
//   if (direction == "right") {
//     circle_points = genPointRight(pen_x, pen_y, 0, radius);
//   }
//   else if (direction == "left") {
//     circle_points = genPointLeft(pen_x, pen_y, 0, radius);
//   }
//   penUp();
//   moveTo(circle_points[0][0] + 6, circle_points[0][1] + 50);
//   penDown();
//   for (var i = 0; i < circle_points.length; i++) {
//     setPosition("pen", circle_points[i][0], circle_points[i][1]);
//     moveTo(circle_points[i][0] + 6, circle_points[i][1] + 50);
//   }
//   return bp;
// } 

// ball_pen = ballArc(5, 315, 25, "left", ball_pen);
// var pos = [160, 140];
// // drawWord(pos, ball_pen);

// function drawWord(corner, bp) {
//   // DRAW P
//   bp = penMove(corner[0], corner[1]);
//   bp = ballMove(25, "forward", bp);
//   bp = ballMove(10, "right", bp);
//   bp = ballMove(10, "left", bp);
//   bp = ballMove(25, "forward", bp);
//   bp = ballMove(10, "right", bp);
//   bp = penMove(bp[0], bp[1] + 12.5);
//   for (var i = 0; i < 10; i++) {
//     bp = ballArc(90, 270, 12.5, "right", bp);
//   }
//   // DRAW E
//   ball_pen = ballArc(5, 315, 25, "left", ball_pen);
  
  
// }

// SET TITLE SCREEN BUTTONS
onEvent("charles1", "click", function(){
  setScreen("c1_screen");
}); 
  
onEvent("ferenc_deak", "click", function() {
  setScreen("fd_screen");
});

onEvent("elec_motor", "click", function() {
  setScreen("elec_screen");
});


onEvent("telep_exch", "click", function() {
  setScreen("tele_screen");
});

onEvent("flag", "click", function() {
  setScreen("nat_anthem");
  playSound("assets/nat_anthem.mp3");
});

// ------------------------

// SET BACK BUTTONS

onEvent("go_back_c1", "click", function() {
  setScreen("Title_Screen");
});

onEvent("go_back_fd", "click", function() {
  setScreen("Title_Screen");
});

onEvent("go_back_elec", "click", function() {
  setScreen("Title_Screen");
});

onEvent("go_back_tele", "click", function() {
  setScreen("Title_Screen");
});

onEvent("go_back_ant", "click", function() {
  stopSound();
  setScreen("Title_Screen");
});

// ------------------------

