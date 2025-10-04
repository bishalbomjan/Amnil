function theme() {
  document.body.style.background =
    document.body.style.background === "white" ? "rgb(22, 22, 92)" : "white";
}

//   function head() {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//             entry.target.classList.remove("remove");
//           } else {
//             entry.target.classList.remove("show");
//             entry.target.classList.add("remove");
//           }
//         });
//       },
//       { threshold: 0.3 } // 20% of element visible
//     );
//     const head = document.querySelectorAll(".seanContainer");
//     head.forEach((item) => observer.observe(item));
//   }

function anmimation(showAnimi, removeAnimi, img, threshold = 0.3) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(showAnimi);
          entry.target.classList.remove(removeAnimi);
        } else {
          entry.target.classList.remove(showAnimi);
          entry.target.classList.add(removeAnimi);
        }
      });
    },
    { threshold: threshold }
  );
  const image2 = document.querySelectorAll(img);
  image2.forEach((item) => observer.observe(item));
}
anmimation("show2", "remove2", ".img2");
anmimation("show", "remove", ".img1");
