document.addEventListener("DOMContentLoaded", function() {
    var backToTopLinks = document.querySelectorAll("a[href='#top']");

    backToTopLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});