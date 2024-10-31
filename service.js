// Inisialisasi variabel posisi
let currentPosition = 0;
const servicesToShow = 4; // Jumlah layanan yang ditampilkan sekaligus
const serviceBoxWidth = 220; // Lebar box layanan termasuk margin
const totalServices = document.querySelectorAll(".service-box").length;
const serviceWrapper = document.querySelector(".service-wrapper");

// Fungsi untuk memindahkan layanan ke kiri
function moveLeft() {
    if (currentPosition > 0) {
        currentPosition -= servicesToShow;
    } else {
        currentPosition = totalServices - servicesToShow;
    }
    updateServicePosition();
}

// Fungsi untuk memindahkan layanan ke kanan
function moveRight() {
    if (currentPosition < totalServices - servicesToShow) {
        currentPosition += servicesToShow;
    } else {
        currentPosition = 0;
    }
    updateServicePosition();
}

// Fungsi untuk memperbarui posisi layanan
function updateServicePosition() {
    serviceWrapper.style.transform = `translateX(-${currentPosition * serviceBoxWidth}px)`;
}
