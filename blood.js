// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

window.onload = function () {
    var overlay = document.getElementById('alert-overlay');
    var content = document.getElementById('alert-content');
    var alertMessage;
    alertMessage = 'PLEASE<a class="alert-message" href ="survey.html"> CLICK </a>  TO VISIT OUR SURVEY FORM';
    content.innerHTML = alertMessage;
    overlay.style.display = 'flex';
}

function closeAlert() {
    var overlay = document.getElementById('alert-overlay');
    overlay.style.display = 'none';
}
