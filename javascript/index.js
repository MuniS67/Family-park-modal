let d = document;

let data_open = d.querySelector("[data-open]");
let data_close = d.querySelector("[data-close]");
let mw = d.querySelector(".modal_window");
let mw_bg = d.querySelector(".mw_bg");
let logo = d.querySelector(".logo");
data_open.onclick = () => {
  data_open.classList.toggle("active_none");
  data_close.classList.toggle("active");
  mw.style.display = "flex";
  mw.classList.add("mw_anim_open");
  logo.classList.add("logo_open");
};
data_close.onclick = () => {
  data_close.classList.toggle("active");
  data_open.classList.toggle("active_none");
  mw.style.display = "none";
  logo.classList.remove("logo_open");
  mw.classList.remove("mw_anim_open");
};
