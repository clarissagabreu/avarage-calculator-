function resultado() {
  var notaDoPrimeiroBimestre = parseInt(
    window.document.getElementById("notaDoPrimeiroBimestre").value
  );
  var notaDoSegundoBimestre = parseInt(
    window.document.getElementById("notaDoSegundoBimestre").value
  );
  var notaDoTerceiroBimestre = parseInt(
    window.document.getElementById("notaDoTerceiroBimestre").value
  );
  var notaDoQuartoBimestre = parseInt(
    window.document.getElementById("notaDoQuartoBimestre").value
  );
  var notaSoma =
    notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre;
  var notaMedia = notaSoma / 4;
  var notaFinal = notaMedia.toFixed(1);

  if (notaFinal <= 6) {
    alert(" you FAILED with an average of " + notaFinal);
  } else {
    alert(" you were APPROVED with an average of " + notaFinal);
  }
}