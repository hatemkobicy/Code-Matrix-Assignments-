$(document).ready(function () {
  let timer;
  let timeRemaining; // Total time in milliseconds
  let isRunning = false;

  // Start button
  $("#startButton").click(function () {
    if (isRunning) {
      return;
    }

    let minutes = $("#minuteInput").val();
    let seconds = $("#secondInput").val();
    let milliseconds = $("#millisecondInput").val();

    // Converter
    timeRemaining =
      parseInt(minutes) * 60 * 1000 +
      parseInt(seconds) * 1000 +
      parseInt(milliseconds) * 10;

    if (timeRemaining <= 0) {
      alert("Please set a valid time.");
      return;
    }

    isRunning = true;

    // Update the timer
    timer = setInterval(function () {
      if (timeRemaining <= 0) {
        clearInterval(timer);
        isRunning = false;
      } else {
        timeRemaining -= 10; // Decrement by 10ms

        let minutesLeft = Math.floor(timeRemaining / (60 * 1000));
        let secondsLeft = Math.floor((timeRemaining % (60 * 1000)) / 1000);
        let millisecondsLeft = Math.floor((timeRemaining % 1000) / 10);

        // Update the display
        $("#timeDisplay").text(
          `${minutesLeft}:${
            secondsLeft < 10 ? "0" + secondsLeft : secondsLeft
          }:${
            millisecondsLeft < 10 ? "0" + millisecondsLeft : millisecondsLeft
          }`
        );
      }
    }, 10);
  });

  // Reset
  $("#resetButton").click(function () {
    clearInterval(timer);
    $("#timeDisplay").text("25:00:00");
    $("#minuteInput").val("25");
    $("#secondInput").val("0");
    $("#millisecondInput").val("0");
    isRunning = false;
  });
});
