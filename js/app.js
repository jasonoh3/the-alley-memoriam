// Dark-light toggle switch

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (theme) {
    document.body.classList.add(theme);

    if (theme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.body.style.transition = "background 500ms ease-in-out, color 1000ms ease-in-out";
        document.getElementById('svg-arrow1').style.transition = "fill 500ms ease-in-out";
        document.getElementById('svg-arrow2').style.transition = "fill 500ms ease-in-out";
        document.getElementById('slider').style.transition = "border-color 500ms ease-in-out";
        document.body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.style.transition = "background 500ms ease-in-out, color 1000ms ease-in-out";
        document.getElementById('svg-arrow1').style.transition = "fill 500ms ease-in-out";
        document.getElementById('svg-arrow2').style.transition = "fill 500ms ease-in-out";
        document.getElementById('slider').style.transition = "border-color 500ms ease-in-out";
        document.body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, true);

// Autoscroll & arrows for photo slider

document.getElementById('radio1').checked = true;
var counter = 1;
var scrollTimer = setInterval(scroll, 6000);

function scroll() {
    counter++;
    if (counter > 4) {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}

function incrementCounter() {
    clearInterval(scrollTimer);
    scrollTimer = setInterval(scroll, 6000);

    counter++;
    if (counter > 4) {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}

function decrementCounter() {
    clearInterval(scrollTimer);
    scrollTimer = setInterval(scroll, 6000);

    counter--;
    if (counter < 1) {
        counter = 4;
    }
    document.getElementById('radio' + counter).checked = true;
}

function setScrollCounter(e) {
    clearInterval(scrollTimer);
    scrollTimer = setInterval(scroll, 6000);
    counter = e;
}