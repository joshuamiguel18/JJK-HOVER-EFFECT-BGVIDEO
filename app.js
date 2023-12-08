document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const bgVideo = document.getElementById('bg-video');
    const bgSound = document.getElementById('bg-sound');
    const imgBoxes = document.querySelectorAll('.img-box');

    imgBoxes.forEach(imgBox => {
        imgBox.addEventListener('mouseenter', function() {
            const videoSource = imgBox.getAttribute('data-video');


            bgVideo.src = videoSource;


            container.style.backgroundColor = 'transparent'; 
            bgVideo.style.opacity = .7;

            bgVideo.play();
        });

        imgBox.addEventListener('mouseleave', function() {
            container.style.backgroundColor = ''; // Reset the container background
            bgVideo.style.opacity = 0; // Hide the video
        });
    });
});
