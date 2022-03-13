$(document).ready(function () {
  //Displays number
  $(".number").click(function () {
    $("#display").append(this.value);
  });
  // Displays operation
  $(".operator").click(function () {
    let value = $("#display").text();
    operator = this.value;
    value = value.split("");
    if (value[value.length - 1] !== operator) {
      $("#display").append(this.value);
    }
  });
  // Clear screen
  $("#clear").click(function () {
    $("#display").empty();
  });
  // Delete last number or operations
  $("#delete").click(function () {
    let value = $("#display").text();
    $("#display").text(value.substring(0, value.length - 1));
  });
  // Divides 1
  $("#decimal").click(function () {
    let x = Number($("#display").text());
    console.log(x);
    x = 1 / x;
    $("#display").text(x);
  });
  // Numbers square
  $("#square").click(function () {
    let x = Number($("#display").text());
    console.log(x);
    x = x * x;
    $("#display").text(x);
  });
  // Numbers square root
  $("#squareRoot").click(function () {
    let x = Number($("#display").text());

    x = Math.sqrt(x);
    $("#display").text(x);
  });
  // Numbers opposite sign
  $("#opposite").click(function () {
    let x = Number($("#display").text());

    x = x * -1;
    $("#display").text(x);
  });
  // Display result
  $("#equal").click(function () {
    let result = eval($("#display").text());
    console.log(result);
    $("#display").text(result);
  });
});
