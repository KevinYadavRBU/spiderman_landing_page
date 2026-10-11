const items = document.querySelectorAll(".tl-item");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

items.forEach((item, i) => {
  item.style.opacity = "0";
  item.style.transform = "translateX(-16px)";
  item.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  io.observe(item);
});
