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

// ---- patients speaks about us Slider ----

let patient_slide_video = document.querySelector(
  ".what-patient-speak .slider .slide video"
);

let patient_slide_left = document.querySelector(
  ".patient-slider-controls .leftBtn"
);

let patient_slide_right = document.querySelector(
  ".patient-slider-controls .rightBtn"
);

let patient_videos = ["patient-speak.mp4", "big_buck_bunny_720p_5mb.mp4"];
let patient_slide = 0;

patient_slide_video.src = `./assets/videos/${patient_videos[patient_slide]}`;

patient_slide_left.addEventListener("click", () => {
  if (patient_slide > 0) {
    patient_slide--;
    patient_slide_video.src = `./assets/videos/${patient_videos[patient_slide]}`;
  }
});

patient_slide_right.addEventListener("click", () => {
  if (patient_slide < patient_videos.length - 1) {
    patient_slide++;
    patient_slide_video.src = `./assets/videos/${patient_videos[patient_slide]}`;
  }
});
