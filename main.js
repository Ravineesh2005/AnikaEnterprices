/* --- Hamburger menu toggle --- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});


/* --- Works & Services Slideshow ---
    Auto-advances every 5 seconds with a smooth fade transition.
    Clicking a dot jumps directly to that slide.
-------------------------------------------------- */
(function () {
    const slides  = document.querySelectorAll('.work-slide');
    const infos   = document.querySelectorAll('.work-info');
    const dots    = document.querySelectorAll('.dot');
    let current   = 0;
    let timer;

    function goToSlide(n) {
        /* Remove active from current slide */
        slides[current].classList.remove('active');
        infos[current].classList.remove('active');
        dots[current].classList.remove('active');

        /* Calculate next index — loops back to 0 after last */
        current = (n + slides.length) % slides.length;

        /* Apply active to new slide */
        slides[current].classList.add('active');
        infos[current].classList.add('active');
        dots[current].classList.add('active');
    }

    /* Auto-advance every 5 seconds */
    function startTimer() {
        timer = setInterval(() => goToSlide(current + 1), 5000);
    }

    /* Click dot: go to that slide and restart timer */
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(timer);
            goToSlide(i);
            startTimer();
        });
    });

    startTimer();
})();
