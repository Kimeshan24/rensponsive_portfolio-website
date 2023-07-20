// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		Let top = window.scrollY;
	    Let offset = sec.offsetTop - 100;
		Let height = sec.offsetHeight;
		Let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height) {
			// active navbar links
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
			//active sections for animationon scroll
			sec.classList.add('show-animate');
		}
		//if want to use animaton that repeats on scroll use this
		else {
			sec.classList.remove('show-animate');
		}
    });


    // sticky header
	Let header = document.querySelector('header');
	
	header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
menuIcon.onclick = () => {
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
}


    // animation footer on scroll

}