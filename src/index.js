import "./style.css";
import * as THREE from "three";
let scrollable = document.querySelector(".scrollable");

let current = 0;
let target = 0;
let ease = 0.075;

// Linear inetepolation used for smooth scrolling and image offset uniform adjustment

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

// init function triggered on page load to set the body height to enable scrolling and EffectCanvas initialised
function init() {
  document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}

// translate the scrollable div using the lerp function for the smooth scrolling effect.
function smoothScroll() {
  target = window.scrollY;
  current = lerp(current, target, ease);
  scrollable.style.transform = `translate3d(0,${-current}px, 0)`;
  requestAnimationFrame(smoothScroll);
}

// class EffectCanvas {
//   constructor()
// }

init();

smoothScroll();
