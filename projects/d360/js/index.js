"use strict";

var back = document.querySelectorAll('.back');

	var body = document.querySelector('.wrapit');
var loadNewPage = function loadNewPage(str) {
	var page = document.querySelector(".page." + str);
	document.body.scollTop = 0;
	body.scrollTop = 0;
	page.classList.add('moveleft');
	body.classList.add('moveleft');

};

document.querySelectorAll('.block').forEach(elem => {
	elem.addEventListener('click',() => {
		loadNewPage(elem.getAttribute('data-pg'));
	});
})
back.forEach(elem => {
	elem.addEventListener('click',() => {
		var str = elem.getAttribute('data-pg');
	var page = document.querySelector(".page." + str);
		document.body.scollTop = 0;
		page.classList.remove('moveleft');
	body.classList.remove('moveleft');
		setTimeout(() => {
			document.body.scollTop = 0;
		}, 300)
	});
})

document.querySelector('.btn').addEventListener('click', () => {
	var str = document.querySelector('.str').value;
	console.log(str);
});