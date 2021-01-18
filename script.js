 
 const btn = document.querySelector('.nav-toggle');
 const hamburger = document.querySelector('.hamburger');
 const navList = document.querySelectorAll('.nav__list .nav__item');

 btn.addEventListener('click', () => {
 	(document.body.classList.toggle('nav-open'));
 	hamburger.classList.toggle('hum');
 }) 

 navList.forEach(index => {
 	index.addEventListener("click", () => {
 		(document.body.classList.toggle('nav-open'));
 	})
 })