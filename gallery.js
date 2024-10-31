document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelector(".gallery-images");
    const galleryLeft = document.querySelector(".gallery-left");
    const galleryRight = document.querySelector(".gallery-right");

    let currentIndex = 0;
    const totalImages = galleryImages.children.length;
    const imageWidth = galleryImages.children[0].offsetWidth + 10; // Lebar gambar + margin

    function updateGalleryPosition() {
        galleryImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    function showNextImage() {
        if (currentIndex === totalImages - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateGalleryPosition();
    }

    // Interval untuk menggeser gambar secara otomatis setiap milidetik, 1 detik = 1000 milidetik
    let autoSlide = setInterval(showNextImage, 1500);

    // Fungsi klik panah kiri
    galleryLeft.addEventListener("click", () => {
        if (currentIndex === 0) {
            currentIndex = totalImages - 1;
        } else {
            currentIndex--;
        }
        updateGalleryPosition();
        resetAutoSlide();
    });

    // Fungsi klik panah kanan
    galleryRight.addEventListener("click", () => {
        showNextImage();
        resetAutoSlide();
    });

    // Fungsi untuk mereset interval otomatis saat panah diklik
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(showNextImage, 3000);
    }
});
