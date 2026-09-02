/* ============================================================
   ANIKA ENTERPRISES — MAIN JAVASCRIPT
   ============================================================ */

/* --- Works & Services 3D Slideshow ---
   Auto-advances every 5 seconds with 3D rotation & glass animation.
   Clicking dots or side cards jumps directly to that slide.
-------------------------------------------------- */
(function () {
    const slides  = document.querySelectorAll('.work-slide');
    const dots    = document.querySelectorAll('.dot');
    let current   = 0;
    let timer;

    function goToSlide(n) {
        /* Calculate indices */
        const length = slides.length;
        current = (n + length) % length;
        const prev = (current - 1 + length) % length;
        const next = (current + 1) % length;

        /* Reset classes on all elements */
        slides.forEach(slide => {
            slide.classList.remove('active', 'prev', 'next');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        /* Apply classes for the 3D gallery and active info */
        slides[prev].classList.add('prev');
        slides[current].classList.add('active');
        slides[next].classList.add('next');
        
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

    /* Click on side images to navigate */
    slides.forEach((slide, i) => {
        slide.addEventListener('click', () => {
            if (slide.classList.contains('prev') || slide.classList.contains('next')) {
                clearInterval(timer);
                goToSlide(i);
                startTimer();
            }
        });
    });

    /* Initialize the gallery */
    goToSlide(0);
    startTimer();
})();
