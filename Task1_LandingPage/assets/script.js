document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('carousel-image');
    const images = [
        './assets/headphones.png',
        './assets/airpodsMax.png',
        './assets/hqHeadphones.png',
        './assets/jbl.png'
    ];
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        console.log('Changing image to:', images[currentIndex]);
        imageElement.style.opacity = 0;

        setTimeout(() => {
            imageElement.src = images[currentIndex];
            imageElement.style.opacity = 1;
        }, 500);
    }

    console.log('Starting carousel');
    setInterval(changeImage, 3000);
});
