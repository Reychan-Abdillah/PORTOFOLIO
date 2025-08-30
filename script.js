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

// submit User
// document.getElementById("contactForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     let nama  = document.getElementById("nama").value;
//     let email = document.getElementById("email").value;
//     let pesan = document.getElementById("message").value;

//     console.log("Name:", nama);
//     console.log("Email:", email);
//     console.log("Message:", pesan);

//     alert(`Nama: ${nama}\nEmail: ${email}\nPesan: ${message}`);
//   });

