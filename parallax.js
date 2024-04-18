const el = document.querySelector("body");
el.addEventListener("mousemove", (e) => {
  const x = -e.clientX / window.innerWidth;
  const y = -e.clientY / window.innerHeight;
  el.style.setProperty("--x", x * 10 + "px");
  el.style.setProperty("--y", y * 10 + "px");
});