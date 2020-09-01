/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const ul_element = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
let i = 1, section = 'section', ch = '#', li_id = 'li', li_element, anchor, li_contant, scroll_yy; //build menu 

//= window.scrollY;
//console.log(height);



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function scroll_to_section(element, prevent) {
    prevent.preventDefault();
    li_contant = element.textContent;
    let sec = document.getElementById(li_contant);
    window.scrollTo({
        top: sec.offsetTop,
        behavior: 'smooth'
    });
}
function check(section1, section2,linkk) {
    window.addEventListener('scroll', function () {
        let scroll_y = window.scrollY;
        if (scroll_y >= (section1.offsetTop-100) && scroll_y < (section2.offsetTop-100)) {
            section1.classList.add('your-active-class');
            linkk.classList.add('active_link');
        }
        else {
            section1.classList.remove('your-active-class');
            linkk.classList.remove('active_link');
        }
    });
}
function check5(section1,linkk) {
    window.addEventListener('scroll', function () {
        let scroll_y = window.scrollY;
        if (scroll_y >= (section1.offsetTop-100)) {
            section1.classList.add('your-active-class');
            linkk.classList.add('active_link');
        }
        else {
            section1.classList.remove('your-active-class');
            linkk.classList.remove('active_link');
        }
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Build menu 
for (i; i <= 5; i++) {
    li_element = document.createElement("li");
    li_element.setAttribute("id", li_id + i);
    anchor = document.createElement("a");
    anchor.setAttribute("href", ch + section + i);
    anchor.setAttribute("class", "menu__link");
    li_contant = document.createTextNode(section + i);
    anchor.appendChild(li_contant);
    li_element.appendChild(anchor);
    fragment.appendChild(li_element);
}
ul_element.appendChild(fragment);
/**
 * End Main Functions
 * Begin Events
 *
*/

// Scroll to anchor ID using scrollTO event

// Scroll to section on link click
for (i = 1; i <= 5; i++) {
    let li_element = document.getElementById(li_id + i);
    li_element.addEventListener('click', function (e) {
        scroll_to_section(this, e);
    });
}


// Set sections as active
for (i = 1; i <= 5; i++) {
    let v = i + 1;
    let sec = document.getElementById(section + i);
    let sec2 = document.getElementById(section + v);
    let li_element=document.getElementById(li_id + i);
    let anchor=li_element.querySelector('a');
    if (i === 5) {
        check5(sec,anchor);
    }
    else {
        check(sec, sec2,anchor);
    }
}


