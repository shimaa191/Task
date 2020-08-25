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
const li_element1 = document.createElement("li"),
    li_element2 = document.createElement("li"),
    li_element3 = document.createElement("li"),
    li_element4 = document.createElement("li"),
    li_element5 = document.createElement("li"),
    anchor1 = document.createElement("a"),
    anchor2 = document.createElement("a"),
    anchor3 = document.createElement("a"),
    anchor4 = document.createElement("a"),
    anchor5 = document.createElement("a");
let li_contant, height = window.scrollY;
console.log(height);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav






// Scroll to anchor ID using scrollTO event
li_element1.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 400,
        behavior: 'smooth'
    });
})
li_element2.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    });
})
li_element3.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 1600,
        behavior: 'smooth'
    });
})
li_element4.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 2150,
        behavior: 'smooth'
    });
})
li_element5.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 2750,
        behavior: 'smooth'
    });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
anchor1.setAttribute("href", "#section1");
anchor1.setAttribute("class", "menu__link");
li_contant = document.createTextNode('Section One');
anchor1.appendChild(li_contant);
li_element1.appendChild(anchor1);
ul_element.appendChild(li_element1);

anchor2.setAttribute("href", "#section2");
anchor2.setAttribute("class", "menu__link");
li_contant = document.createTextNode('Section Two');
anchor2.appendChild(li_contant);
li_element2.appendChild(anchor2);
ul_element.appendChild(li_element2);

anchor3.setAttribute("href", "#section3");
anchor3.setAttribute("class", "menu__link");
li_contant = document.createTextNode('Section Three');
anchor3.appendChild(li_contant);
li_element3.appendChild(anchor3);
ul_element.appendChild(li_element3);

anchor4.setAttribute("href", "#section4");
anchor4.setAttribute("class", "menu__link");
li_contant = document.createTextNode('Section Four');
anchor4.appendChild(li_contant);
li_element4.appendChild(anchor4);
ul_element.appendChild(li_element4);

anchor5.setAttribute("href", "#section5");
anchor5.setAttribute("class", "menu__link");
li_contant = document.createTextNode('Section Five');
anchor5.appendChild(li_contant);
li_element5.appendChild(anchor5);
ul_element.appendChild(li_element5);


// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', function () {
    height = window.scrollY;
    if (height < 210) {
        anchor1.classList.remove('active');
        anchor2.classList.remove('active');
        anchor3.classList.remove('active');
        anchor4.classList.remove('active');
        anchor5.classList.remove('active');
    }
    else if (height >= 210 && height < 895) {
        anchor1.classList.add('active');
        anchor2.classList.remove('active');
        anchor3.classList.remove('active');
        anchor4.classList.remove('active');
        anchor5.classList.remove('active');
    
    }
    else if (height >= 895 && height < 1445) {
        anchor1.classList.remove('active');
        anchor2.classList.add('active');
        anchor3.classList.remove('active');
        anchor4.classList.remove('active');
        anchor5.classList.remove('active');
    }
    else if (height >= 1445 && height < 2035) {
        anchor1.classList.remove('active');
        anchor2.classList.remove('active');
        anchor3.classList.add('active');
        anchor4.classList.remove('active');
        anchor5.classList.remove('active');
    }
    else if (height >= 2035 && height < 2622) {
        anchor1.classList.remove('active');
        anchor2.classList.remove('active');
        anchor3.classList.remove('active');
        anchor4.classList.add('active');
        anchor5.classList.remove('active');
    }
    else if (height >= 2622) {
        anchor1.classList.remove('active');
        anchor2.classList.remove('active');
        anchor3.classList.remove('active');
        anchor4.classList.remove('active');
        anchor5.classList.add('active');
    }
    
    

});

// Add class 'active' to section when near top of viewport

if (height < 210) {
    anchor1.classList.remove('active');
    anchor2.classList.remove('active');
    anchor3.classList.remove('active');
    anchor4.classList.remove('active');
    anchor5.classList.remove('active');
}
else if (height >= 210 && height < 895) {
    anchor1.classList.add('active');
    anchor2.classList.remove('active');
    anchor3.classList.remove('active');
    anchor4.classList.remove('active');
    anchor5.classList.remove('active');

}
else if (height >= 895 && height < 1445) {
    anchor1.classList.remove('active');
    anchor2.classList.add('active');
    anchor3.classList.remove('active');
    anchor4.classList.remove('active');
    anchor5.classList.remove('active');
}
else if (height >= 1445 && height < 2035) {
    anchor1.classList.remove('active');
    anchor2.classList.remove('active');
    anchor3.classList.add('active');
    anchor4.classList.remove('active');
    anchor5.classList.remove('active');
}
else if (height >= 2035 && height < 2622) {
    anchor1.classList.remove('active');
    anchor2.classList.remove('active');
    anchor3.classList.remove('active');
    anchor4.classList.add('active');
    anchor5.classList.remove('active');
}
else if (height >= 2622) {
    anchor1.classList.remove('active');
    anchor2.classList.remove('active');
    anchor3.classList.remove('active');
    anchor4.classList.remove('active');
    anchor5.classList.add('active');
}

