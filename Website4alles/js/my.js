$(document).ready(function () {
  $("#text").css({ color: "#0769AA " });
  $("body").css({ marginLeft: "20px" });
  $("header").css({ marginBottom: "20px", marginTop: "20px" });
  $("#footer").css({ fontWeight: "bold" });
});

$("img").click(function () {
  $("img").css("border", "3px solid black");
  $("#text").css({ fontSize: "20px" });
});

$("#footer").click(function () {
  $("img").removeAttr("style");
  $("#text").removeAttr("style");
  $("#text").css({ color: "#0769AA " });
});

$("img").dblclick(function () {
  $("img").removeAttr("style");
  $("#text").removeAttr("style");
  $("#text").css({ color: "#0769AA " });
});

$("#field").mousemove(function (event) {
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $("#res")
    .first()
    .text("( event.pageX, event.pageY ) : " + pageCoords);
  $("#res")
    .last()
    .text("( event.clientX, event.clientY ) : " + clientCoords);
});
