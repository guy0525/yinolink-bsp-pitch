(() => {
  const els = document.querySelectorAll(".card, .arch-wrap, .mobius-panel, .matrix, .diff-table, .flywheel");
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.transition = "opacity .5s ease, transform .5s ease";
          e.target.style.opacity = "1";
          e.target.style.transform = "none";
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    io.observe(el);
  });
})();
