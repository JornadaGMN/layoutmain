// OPEN SIDE BAR
var navBar = document.querySelector('.nav-bar');
var navBarUl = document.querySelector('.nav-bar ul');
var iconBurger = document.querySelector('.icon-hamburger');
var content = document.querySelector('main');
var sideBar = false;

function openSidebar () {
    sideBar = !sideBar;

    if (sideBar) {
        navBar.style.display = 'block';
        iconBurger.style.display = 'none';
        navBarUl.style.right = '0';
        navBarUl.style.animationName = 'show-bar';
        content.style.filter = 'blur(2px)';
        console.log(sideBar)
        console.log(navBar)
        
    } else {
        navBar.style.display = 'none';
        iconBurger.style.display = 'block';
        navBarUl.style.right = '-100%';
        navBarUl.style.animationName = '';
        content.style.filter = '';
        
    }
}

// CLOSE SIDE BAR ON CLICK MAIN TAG
function closeSidebar() {

    if (sideBar) {
        openSidebar()
    }
}