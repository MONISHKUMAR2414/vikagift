/* VIDEO INTERACTION */
const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

    video.addEventListener("click", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    });
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(
    ".memories img, .center-img, .collage img, .videos video, .final-text, h1, h2"
);

reveals.forEach(el => el.classList.add("reveal"));

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
