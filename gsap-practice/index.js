gsap.defaults({ duration: 2, ease: "power4.inOut" });

gsap.from(".name", {
  x: -500,
  opacity: 0,
});
gsap.from(".name2", {
  x: 500,
  opacity: 0,
});

let tween = gsap.to(".box", {
  x: 900,
  opacity: 1,
  duration: 6,
  ease: "power2.inOut",
  rotation: 360,
  // repeat: 1,
  onComplete: () => console.log("Tween completed"),
});

document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#speed").onclick = () => tween.timeScale(2);
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
document.querySelector("#stop").onclick = () => {
  tween.kill();
};

const tl = gsap.timeline();
tl.to(".step1", { opacity: 0, y: -20, duration: 0.5 });
tl.to(".step2", { opacity: 0, y: -20, duration: 0.5 });
tl.to(".step3", { opacity: 0, y: -20, duration: 0.5 });
const tl2 = gsap.timeline();
tl2.to("#tl2-a", { width: "100%", duration: 0.8 });
tl2.to("#tl2-b", { width: "100%", duration: 0.8 }, "<=0.3");
tl2.to("#tl2-c", { width: "100%", duration: 0.8 }, "<=0.4");

