// nav fixed
const navLinks = document.querySelector(".nav-links");
function ontoggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[1%]");
}

window.onscroll = function () {
  const header = document.querySelector("header");
  if (!header) return;
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  });
});

function showAlert() {
  alert(
    "Hi there! Thanks for visiting, let’s connect and get to know each other better 😊"
  );
  console.log("learn More");
}

document.querySelectorAll("[data-anime]").forEach((el) => {
  observer.observe(el);
});

const body = document.getElementById("aboutme");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    //
    body.classList.remove("bg-white");
    body.classList.add("bg-gray-200");
  } else {
    body.classList.remove("bg-gray-200");
    body.classList.add("bg-white");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const buram = document.querySelectorAll(".buram, .geserAtas");
  buram.forEach((el, i) => {
    setTimeout(() => {
      if (el.classList.contains("buram")) {
        el.classList.remove("opacity-0");
      } else if (el.classList.contains("geserAtas")) {
        el.classList.remove("opacity-0", "translate-y-7");
      }
    }, 300 + i * 100);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const tombol = document.querySelectorAll(".tombol");
  tombol.forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-7");
    }, 700 + i * 600);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: ["Reychan Abdillah"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 300,
    startDelay: 700,
    loop: true,
    showCursor: false,
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const geserAtasv2 = document.querySelectorAll(".geserAtasv2");
  geserAtasv2.forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-15");
    }, 300 + i * 300);
  });
});

window.addEventListener("scroll", () => {
  const geserX = document.querySelectorAll(".geserX");
  geserX.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 300) {
      el.classList.remove("opacity-0");

      if (el.classList.contains("geserKiri")) {
        el.classList.remove("translate-x-16");
      }

      if (el.classList.contains("geserKanan")) {
        el.classList.remove("-translate-x-16");
      }
    }
  });
});

window.addEventListener("scroll", () => {
  const geserBawah = document.querySelectorAll(".geserBawah");
  geserBawah.forEach((el, i) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 1) {
      setTimeout(() => {
        el.classList.remove("opacity-0", "-translate-y-15");
      }, 300 + i * 300);
    }
  });
});

window.addEventListener("scroll", () => {
  const scrollProject = document.querySelectorAll(".scrollProject");

  scrollProject.forEach((el, i) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-10");
      }, 300 + i * 300);
    }
  });
});

window.addEventListener("scroll",() => {
  const scrollSkils = document.querySelectorAll(".scrollSkils")

  scrollSkils.forEach((el, i) => {
    const position = el.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    if(position < windowHeight - 10){
      setTimeout(() => {
        el.classList.remove("opacity-0", "-translate-y-11")
      }, 300 + i * 300)
    }
  })
})
// engkau masih yang terindah di dalam hidupku


// window.addEventListener("scroll", () => {
//   const object = document.querySelectorAll(".object")

//   object.forEach((el, i) => {
//     const position = el.getBoundingClientRect().top
//     const windowheight = window.innerHeight
//     if(position < windowheight - 50){
//       setTimeout(() => {
//         el.classList.remove("opacity-0", "-translate-y-11")
//       }, 300 + i * 300)
//     }
//   })
// })


 const sections = document.querySelectorAll("section");
  const navLink = document.querySelectorAll(".nav-link");

  const options = {
    root: null,
    threshold: 0.6, // 60% terlihat
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLink.forEach((link) => {
          link.classList.remove("bg-purple-100", "text-purple-700");
        });

        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("bg-purple-100", "text-purple-700");
        }
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });