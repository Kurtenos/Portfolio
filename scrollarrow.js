// Show the scroll up arrow when the user scrolls down
window.onscroll = function() {
    const scrollUp = document.getElementById("scrollUp");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
};

// Scroll to the top when the scroll up arrow is clicked
document.getElementById("scrollUp").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});