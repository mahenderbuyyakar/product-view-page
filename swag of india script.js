// Changing Country flag and contact number

document.getElementById('language-select').addEventListener('change', changeFunc);

function changeFunc() {
    var selectBox = document.getElementById('language-select');
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue == 'India') {
        document.getElementById('flag-icon').src =
            'https://raw.githubusercontent.com/mahenderbuyyakar/PNG-images/main/langicon.png';
        document.getElementById('contact-number').innerHTML = '+91 9838203708';
    } else if (selectedValue == 'UK') {
        document.getElementById('flag-icon').src =
            'https://raw.githubusercontent.com/mahenderbuyyakar/PNG-images/main/Group%202560.png';
        document.getElementById('contact-number').innerHTML = '+44 1632 960846';
    } else if (selectedValue == 'Germany') {
        document.getElementById('flag-icon').src =
            'https://raw.githubusercontent.com/mahenderbuyyakar/PNG-images/main/germany.png';
        document.getElementById('contact-number').innerHTML = '+1 202 555 0156';
    } else {
        document.getElementById('flag-icon').src =
            'https://raw.githubusercontent.com/mahenderbuyyakar/PNG-images/main/france.png';
        document.getElementById('contact-number').innerHTML = '+49-163-5556-667';
    };
}





// // Scroll to Top 

document.getElementById('scroll-btn').classList.add("hide");
getYPosition = () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
};

document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById('scroll-btn');
    scrolled = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    if (scroll > 300) {
        arrow.classList.remove("hide");
        arrow.classList.add("show");
        arrow.addEventListener('click', scrolled);
    } else {
        document.getElementById('scroll-btn').classList.remove("show");
        document.getElementById('scroll-btn').classList.add("hide");
        document.getElementById('scroll-btn').removeEventListener("click", scrolled);
    }
})




// Adding the sticky navbar
window.onscroll = () => {
    myFunction1(), show_scroller();
};
var navbar = document.getElementById("sticky-section");
var sticky = navbar.offsetTop;

function myFunction1() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("sticky-shadow");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("sticky-shadow");
    }
}