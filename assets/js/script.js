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
let video_play = document.querySelectorAll(".video-play");
console.log(video_play);

video_play.forEach((video_play) => {
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

// veteren-section
let veterenMoreText = document.querySelectorAll(".veteren-content .hide-text");
let moreLessBtn = document.querySelectorAll(".moreless-button");

moreLessBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("hello");
    let show_hide_text = btn.previousElementSibling.querySelector(".text");
    show_hide_text.classList.toggle("hide-text");
    if (show_hide_text.classList.contains("hide-text")) {
      btn.textContent = "Read more";
    } else {
      btn.textContent = "Read Less";
    }
  });
});
