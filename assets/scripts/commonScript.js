const FbBackToTop = () => {
  window.scrollTo(0, 0);
};

$(window).on("scroll", function () {
  if (window.scrollY > window.outerHeight + window.outerHeight / 8) {
    $("#scrollToTop").addClass("active");
    setTimeout(function () {
      var theta =
        ($(window).scrollTop() -
          (window.outerHeight + window.outerHeight / 2)) /
        500;
      $("#scrollToTop").css({ transform: "rotate(" + theta + "rad)" });
    });
  } else {
    $("#scrollToTop").removeClass("active");
  }
});
