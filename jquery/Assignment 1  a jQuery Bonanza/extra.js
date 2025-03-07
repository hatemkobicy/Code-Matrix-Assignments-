$(document).ready(function () {
  $("#clickBtn").click(function () {
    alert("Button Clicked!");
  });

  $("#fadeInBtn").click(function () {
    $("#box").fadeIn();
  });

  $("#fadeOutBtn").click(function () {
    $("#box").fadeOut();
  });

  $("#addClassBtn").click(function () {
    $("#textDisplay").addClass("highlight");
  });

  $("#appendBtn").click(function () {
    $("#textDisplay").append(" - Appended Text");
  });

  $("#htmlBtn").click(function () {
    $("#textDisplay").html("<strong>Changed HTML Content</strong>");
  });

  $("#textBtn").click(function () {
    $("#textDisplay").text("Changed Text Content");
  });

  $("#valBtn").click(function () {
    alert($("#textInput").val());
  });

  $("#hideBtn").click(function () {
    $("#textDisplay").hide();
  });

  $("#showBtn").click(function () {
    $("#textDisplay").show();
  });

  $("#slideDownBtn").click(function () {
    $("#box").slideDown();
  });
});
