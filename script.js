// JavaScript for scrolling buttons
document.getElementById("scroll-up").addEventListener("click", function() {
    window.scrollBy(0, -window.innerHeight);
});

document.getElementById("scroll-down").addEventListener("click", function() {
    window.scrollBy(0, window.innerHeight);
});
