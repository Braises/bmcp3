// JavaScript untuk Banner dengan Tombol Panah
let currentSlideIndex = 0;
let autoSlideInterval; // Untuk menyimpan interval otomatis
const slideDelay = 4000; // Delay per slide dalam milidetik (4 detik)

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Pastikan index tetap dalam range slide
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    // Geser slide sesuai index
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

// Fungsi untuk menggerakkan slide secara otomatis
function startAutoSlide() {
    console.log("Auto-slide dimulai");
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlideIndex + 1);
    }, slideDelay);
}

// Fungsi untuk menghentikan interval otomatis sementara
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    console.log("Auto-slide dihentikan sementara");
}

// Fungsi untuk menampilkan slide dan mengatur ulang interval otomatis
function goToSlide(index) {
    stopAutoSlide(); // Hentikan auto-slide sementara
    showSlide(index); // Tampilkan slide sesuai index
    startAutoSlide(); // Mulai ulang auto-slide
}

// Navigasi dengan Panah
document.querySelector('.arrow-left').addEventListener('click', () => {
    goToSlide(currentSlideIndex - 1);
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    goToSlide(currentSlideIndex + 1);
});

// Mulai slide otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    console.log("Memulai auto-slide setelah DOM selesai dimuat");
    startAutoSlide();
});
