import "./styles.css";

let btn = document.getElementById("but");
let block = document.getElementById("child");
let block_l = document.getElementById("child_left");
let block_btn = document.getElementById("app-button");
let color = "rgb(217,155,238)";
let colorDarc = "rgb(174, 20, 225)";
let light = {
  body: "#fff",
  block: color,
  block_l: color,
  block_btn: "rgb(173,83,202)",
  class: "button-on"
};
let darc = {
  body: "#000",
  block: colorDarc,
  block_l: colorDarc,
  block_btn: "rgb(115,12,161)",
  class: "button-on"
};

btn.addEventListener("click", () => {
  btn.classList.contains("button-on") ? changeTheme(light) : changeTheme(darc);
});
let changeTheme = (theme) => {
  if (JSON.stringify(theme) === JSON.stringify(light)) {
    btn.classList.remove(light.class);
  } else if (JSON.stringify(theme) === JSON.stringify(darc)) {
    btn.classList.add(darc.class);
  }
  localStorage.setItem("NewTheme", JSON.stringify(theme));
  document.body.style.backgroundColor = theme.body;
  block.style.backgroundColor = theme.block;
  block_l.style.backgroundColor = theme.block_l;
  block_btn.style.backgroundColor = theme.block_btn;
};
if (localStorage["NewTheme"]) {
  changeTheme(JSON.parse(localStorage["NewTheme"]));
}
