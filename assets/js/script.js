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

let video_popup = document.querySelector(".video-popup");
let vp_video = video_popup.querySelector("video");
console.log(vp_video);
let close_video_popup = document.querySelector(".close_video_popup");
let patient_video_play = document.querySelectorAll(
  ".what-patient-speak .video-play"
);
console.log(patient_video_play);

patient_video_play.forEach((video_play) => {
  video_play.addEventListener("click", () => {
    video_popup.classList.add("active-video-popup");
    vp_video.src = video_play.getAttribute("video_url");
    vp_video.play();
  });
});

close_video_popup.addEventListener("click", () => {
  video_popup.classList.remove("active-video-popup");
  vp_video.pause();
});
