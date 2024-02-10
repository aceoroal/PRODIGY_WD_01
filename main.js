let sections = document.querySelectorAll('section');
let desktopNavLinks = document.querySelectorAll('header.desktop_nav nav a');
let mobileNavLinks = document.querySelectorAll('header.mobile_nav_menu nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            desktopNavLinks.forEach(desktopLink => {
                desktopLink.classList.remove('active');
            });
            mobileNavLinks.forEach(mobileLink => {
                mobileLink.classList.remove('active');
            });

            document.querySelector('header.desktop_nav nav a[href*=' + id + ']').classList.add('active');
            document.querySelector('header.mobile_nav_menu nav a[href*=' + id + ']').classList.add('active');
        }
    });
};



const btn_menu = document.getElementById('hamburger_menu');
const mobile_menu = document.querySelector('.mobile_nav_menu');
const line_1 = document.getElementById('line_1');
const line_2 = document.getElementById('line_2');
const line_3 = document.getElementById('line_3');

function Menu() {
    btn_menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');

    line_1.classList.toggle('active');
    line_2.classList.toggle('active');
    line_3.classList.toggle('active');
}


// SCROLL REVEAL
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    var about_p1 = document.querySelector('.about_p1');
    var about_p2 = document.querySelector('.about_p2');
    var about_p3 = document.querySelector('.about_p3');
    var about_p4 = document.querySelector('.about_p4');
    var about_p5 = document.querySelector('.about_p5');
    var about_p6 = document.querySelector('.about_p6');
    
    var contact_p1 = document.querySelector('.contact_p1');
    var contact_p2 = document.querySelector('.contact_p2');
    var contact_p3 = document.querySelector('.contact_p3');
    var contact_p4 = document.querySelector('.contact_p4');
    var contact_p5 = document.querySelector('.contact_p5');
    var contact_p6 = document.querySelector('.contact_p6');


    for(var i = 0; i < reveals.length; i++) {
        var window_height = window.innerHeight;
        var reveal_top = reveals[i].getBoundingClientRect().top;
        var reveal_point = 150;

        if(reveal_top < window_height - reveal_point) {
            reveals[i].classList.add('active');
            if (i == 0) {
                about_p1.classList.add('on');
                about_p2.classList.add('on');
                about_p3.classList.add('on');
                about_p4.classList.add('on');
                about_p5.classList.add('on');
                about_p6.classList.add('on');
            }
            else if (i == 1) {
                contact_p1.classList.add('on');
                contact_p2.classList.add('on');
                contact_p3.classList.add('on');
                contact_p4.classList.add('on');
                contact_p5.classList.add('on');
                contact_p6.classList.add('on');

            }
        }
        else {
            reveals[i].classList.remove('active');
            if (i == 0) {
                about_p1.classList.remove('on');
                about_p2.classList.remove('on');
                about_p3.classList.remove('on');
                about_p4.classList.remove('on');
                about_p5.classList.remove('on');
                about_p6.classList.remove('on');

            }
            else if (i == 1) {
                contact_p1.classList.remove('on');
                contact_p2.classList.remove('on');
                contact_p3.classList.remove('on');
                contact_p4.classList.remove('on');
                contact_p5.classList.remove('on');
                contact_p6.classList.remove('on');

            }
        }

        

        
    }
}



let copy_right = document.getElementById('copy_right');
var year = new Date();
var current_year = year.getFullYear();

copy_right.textContent = '© ' + current_year + ' | Anele Nkayi. PRODIGY_WD_01.'