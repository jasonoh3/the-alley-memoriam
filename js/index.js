// Prevent user from scaling index.css

function zoomPlusMinus(e) {
    if (e.ctrlKey && (e.keyCode == 61 || e.keyCode == 107 || e.keyCode == 173 || e.keyCode == 109 || e.keyCode == 187 || e.keyCode == 189)) {
        e.preventDefault();
    }
}

function zoomScroll(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}

window.addEventListener('keydown', zoomPlusMinus, true);
document.getElementById('prevent-scale').addEventListener('wheel', zoomScroll, true);

// Pressing enter -> homepage
window.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        window.location.href = './homepage.html'
    }
}, false)