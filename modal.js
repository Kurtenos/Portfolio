// modal.js
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');
const images = document.querySelectorAll('.modal-trigger');
const span = document.getElementsByClassName('close')[0];

// Open modal when clicking on images
images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Close modal when pressing the Escape key
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode === 27) {
        modal.style.display = 'none';
    }
};

// Close modal when clicking on the close button (span element)
span.onclick = function() {
    modal.style.display = 'none';
};