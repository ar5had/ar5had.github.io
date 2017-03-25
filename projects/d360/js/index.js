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
	var url = './green.png';
	document.querySelector('.str').value = "";
	var str = document.querySelector('.str').value;
	document.querySelector('.heading').innerHTML= `${str}`;
	if(Math.random() > .5) {
		str = "<h5 class='green marr' >Secure! You can continue to visit this app/website! The safety index of this app is above the minimum safety index.</h5>"		
	}else {
		url = './error.png'
		str = `<h5 class='red marr'>Unsecure app/website! High risks of leaking your private details and harmful content.
		`;
	}
	document.querySelector('.results .blockimg').setAttribute('src', url);
	document.querySelector('#mystr').innerHTML= `${str}`;	
	loadNewPage('results');
});

const wrap = document.querySelector('.wrappertips');

wrap.addEventListener('click', () => {
	wrap.classList.toggle('open');
});