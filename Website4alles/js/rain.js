function random(min, max) {
  return ~~(Math.random() * (max - min + 1) + min);
}

$(document).ready(function () {
  var linkerAbstand = 0;
  var character = "ABCDEFGHIJKLMNOP12345";
  var groesse = 1;
  var verschiebeUeberschrift = function () {
    $("#ueberschrift").offset({
      top: linkerAbstand,
      left: linkerAbstand,
    });

    linkerAbstand++;
    groesse = groesse + 0.1;
    $("#ueberschrift").css("font-size", groesse + "em");
    if (linkerAbstand > 625) {
      var platz = random(1, 21);
      $("#ueberschrift").text(character.charAt(platz));
      linkerAbstand = 0;
      groesse = 0;
    }
  };

  setInterval(verschiebeUeberschrift, 2);
});
