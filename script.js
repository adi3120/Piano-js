let c = document.querySelector(".c");
let csh = document.querySelector(".csh");
let d = document.querySelector(".d");
let dsh = document.querySelector(".dsh");
let e = document.querySelector(".e");
let f = document.querySelector(".f");
let fsh = document.querySelector(".fsh");
let g = document.querySelector(".g");
let gsh = document.querySelector(".gsh");
let a = document.querySelector(".a");
let ash = document.querySelector(".ash");
let b = document.querySelector(".b");

let keys = [c, csh, d, dsh, e, f, fsh, g, gsh, a, ash, b];

function getdata(e) {
    let val = e.target.getAttribute("data-key");
    let audio = document.querySelector(`audio[data-key="${val}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();

}
keys.forEach(key => { key.addEventListener("click", getdata) });