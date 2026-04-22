document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('viewCloseBtn').addEventListener('click', function() {
        window.history.back(); // Navigate to the previous page
    });

    var currentIndex = 0;
    var images = document.querySelectorAll('.view-main-image');
    var totalImages = images.length;

    document.getElementById('viewNextBtn').addEventListener('click', function() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.display = 'block';
    });

    document.getElementById('viewPrevBtn').addEventListener('click', function() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images[currentIndex].style.display = 'block';
    });

    images.forEach((img, index) => {
        if (index !== 0) img.style.display = 'none';
    });
});
