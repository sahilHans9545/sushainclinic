let mobile_menubar = document.querySelector(".mobile-menubar");
let close_mobileMenu = document.querySelector(".close_mobileMenu ");
mobile_menubar.addEventListener("click", () => {
  document
    .querySelector(".header nav .menu")
    .classList.add("active-mobileMenu");
});

close_mobileMenu.addEventListener("click", () => {
  document
    .querySelector(".header nav .menu")
    .classList.remove("active-mobileMenu");
});

// Multiple videos will not play at a time in what patient speaks about us
var videos = document.querySelectorAll(".what-patient-speak video");
for (var i = 0; i < videos.length; i++)
  videos[i].addEventListener(
    "play",
    function () {
      pauseAll(this);
    },
    true
  );

function pauseAll(elem) {
  for (var i = 0; i < videos.length; i++) {
    if (videos[i] == elem) {
      videos[i].play();
      continue;
    }
    videos[i].pause();
  }
  // alert("hello");
}

for (var i = 0; i < videos.length; i++)
  videos[i].addEventListener(
    "pause",
    function () {
      // alert("paused");
    },
    true
  );

// function pauseAll(elem) {
//   for (var i = 0; i < videos.length; i++) {
//     if (videos[i] == elem) {
//       videos[i].play();
//       continue;
//     }
//     videos[i].pause();
//   }
//   alert("hello");
// }
