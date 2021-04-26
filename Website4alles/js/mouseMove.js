var klicks = 0;
$("#field").mousemove(function (event) {
  var klicks = 0;
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $("#res")
    .first()
    .text("Die Mouse ist an diesem Standort : " + pageCoords);
  $("#res")
    .last()
    .text("Die Mouse ist an diesem Standort : " + clientCoords);
});
$("#bild").click(function (event) {
  klicks++;
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $("#out")
    .first()
    .text(
      "Sie haben auf die Koordinaten " +
        pageCoords +
        ". Sie haben so viele Klicks gemacht " +
        klicks
    );
  $("#out")
    .last()
    .text(
      "Der Klick war bei" +
        clientCoords +
        "gedrückt" +
        ". \n Sie haben so viele Klicks gemacht " +
        klicks
    );
});
