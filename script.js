// nav fixed
const navLinks = document.querySelector(".nav-links");
function ontoggleMenu(e) {
    e.name = e.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[1%]");
}

window.onscroll = function () {
    const header = document.querySelector('header');
    if (!header) return;
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});


// learn more
function showAlert() {
    alert("Hi there! Thanks for visiting, let’s connect and get to know each other better 😊")
    console.log("learn More")
}

// on scroll



  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const type = el.dataset.anime;

          if (type === "slide-left") {
            el.classList.remove("opacity-0", "-translate-x-10");
            el.classList.add("opacity-100", "translate-x-0");
          }
        }
      });
    },
    { threshold: 0.2 } // animasi jalan kalau 20% elemen sudah masuk viewport
  );

  document.querySelectorAll("[data-anime]").forEach((el) => {
    observer.observe(el);
  });




    const body = document.getElementById('aboutme');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // 
        body.classList.remove("bg-white");
        body.classList.add("bg-gray-200");
      } else {
        body.classList.remove('bg-gray-200');
        body.classList.add('bg-white');
      }
    });
