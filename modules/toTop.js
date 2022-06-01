function toTop(selector) {
    let goTop = document.querySelector(selector);
    window.addEventListener('scroll', trackScroll);
    goTop.addEventListener('click', backToTop);

    function trackScroll() {
        let scroll = window.pageYOffset;
        let coord = document.documentElement.clientHeight;

        if (scroll > coord) {
            goTop.style = 'display: block';
        }
        if (scroll < coord) {
            goTop.style = 'display: none';
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }
}

// export default toTop;