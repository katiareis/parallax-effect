const parallax = document.getElementById("js-parallax-effect");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

// Another way
/*
const parallax = document.querySelectorAll(".parallax");
  window.addEventListener("scroll", function() {
      let offset = window.pageYOffset;
      parallax.forEach(function(prllx, i) {
          console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
          prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
      })
  })

*/
