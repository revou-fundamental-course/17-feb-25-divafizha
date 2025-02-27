
//AutoSlide Banner
let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(changeSlide, 3000); // Ganti slide setiap 3 detik


//Validation Form Contact
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let destination = document.getElementById("destination").value.trim();

    // Validasi Name
    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    // Validasi Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validasi Travel Destination
    if (destination === "") {
      alert("Please enter your desired travel destination.");
      return;
    }

    // Jika semua valid, tampilkan pesan sukses
    alert("Form submitted successfully!");
    this.reset(); // Reset form setelah submit berhasil
  });

