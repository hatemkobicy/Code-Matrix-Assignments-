$(document).ready(function () {
  $(".toggle-img").click(function () {
    let currentSrc = $(this).attr("src");
    let altSrc = $(this).attr("data-alt");
    $(this).attr("src", altSrc);
    $(this).attr("data-alt", currentSrc);
  });
});
