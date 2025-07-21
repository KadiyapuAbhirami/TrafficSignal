let stop = document.getElementById("stop");
let ready = document.getElementById("ready");
let go = document.getElementById("go");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
b1.onclick=function() {
    red();
}
b2.onclick=function() {
    yellow();
}
b3.onclick=function() {
    green();
}

function red() {
    b1.style.backgroundColor = "red";
    b2.style.backgroundColor = "#f7c948";
    b3.style.backgroundColor = "#f7c948";
    c1.style.backgroundColor = "red";
    c2.style.backgroundColor = "#1f1d41";
    c3.style.backgroundColor = "#1f1d41";
}
function yellow() {
    b1.style.backgroundColor = "#f7c948";
    b2.style.backgroundColor = "yellow";
    b3.style.backgroundColor = "#f7c948";
    c1.style.backgroundColor = "#2d27a0ff";
    c2.style.backgroundColor = "yellow";
    c3.style.backgroundColor = "#2d27a0ff";

}
function green() {
    b1.style.backgroundColor = "#f7c948";
    b2.style.backgroundColor = "#f7c948";
    b3.style.backgroundColor = "green";
    c1.style.backgroundColor = "#27219eff";
    c2.style.backgroundColor = "#27219eff";
    c3.style.backgroundColor = "green";

}