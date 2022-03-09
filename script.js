$(document).ready(function () {
  $(".number").click(function () {
    $("#display").append(this.value);
  });

  $("#clear").click(function () {
    $("#display").empty();
  });
  $("#delete").click(function () {
    let value = $("#display").text();
    $("#display").text(value.substring(0, value.length - 1));
  });
  $("#decimal").click(function () {
    let x = Number($("#display").text());
    console.log(x);
    x = 1 / x;
    $("#display").text(x);
  });
  $("#square").click(function () {
    let x = Number($("#display").text());
    console.log(x);
    x = x * x;
    $("#display").text(x);
  });
  $("#squareRoot").click(function () {
    let x = Number($("#display").text());

    x = Math.sqrt(x);
    $("#display").text(x);
  });
  $("#opposite").click(function () {
    let x = Number($("#display").text());

    x = x * -1;
    $("#display").text(x);
  });
  $("#equal").click(function () {
    let result = eval($("#display").text());
    console.log(result);
    $("#display").text(result);
  });
});
