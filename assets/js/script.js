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

let patient_name = document.querySelector(
  ".what-patient-speak .slider .patient-name"
);
let patient_address = document.querySelector(
  ".what-patient-speak .slider .patient-address"
);
let patient_disease = document.querySelector(
  ".what-patient-speak .slider .patient-disease"
);

let patient_videos = ["patient-speak.mp4", "big_buck_bunny_720p_5mb.mp4"];
let patient_content = [
  {
    video: "patient-speak.mp4",
    name: "Wade Warren",
    disease: "Bones & Joints Patient",
    address: "Bhopal, Madhya Pradesh",
  },

  {
    video: "big_buck_bunny_720p_5mb.mp4",
    name: "name",
    disease: "heart patient",
    address: "Haryana, Faridabad",
  },
];

let patient_slide = 0;

const change_patient_content = () => {
  patient_slide_video.src = `./assets/videos/${patient_content[patient_slide].video}`;
  patient_name.innerHTML = patient_content[patient_slide].name;
  patient_disease.innerHTML = `<small>${patient_content[patient_slide].address}</small>`;
  patient_address.innerHTML = `<small><i class="fa-solid fa-location-dot primary"></i>&nbsp; ${patient_content[patient_slide].address}</small>`;
};

change_patient_content();
patient_slide_left.addEventListener("click", () => {
  if (patient_slide > 0) {
    patient_slide--;
    change_patient_content();
  }
});

patient_slide_right.addEventListener("click", () => {
  if (patient_slide < patient_content.length - 1) {
    patient_slide++;
    change_patient_content();
  }
});
