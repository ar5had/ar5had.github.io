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
	document.querySelector('.str').value = "";
	var str = document.querySelector('.str').value;
	document.querySelector('.heading').innerHTML= `$str`;
	if(Math.random) {
		str = "<h5>Secure! You can continue to visit this app!</h5>"		
	}else {
		str = `<h5>Unsecure! Check out the following alternative of this app.</h5>
			<ul>
			<li>Link 1</li>
			<li>Link 2</li>
			<li>Link 3</li>			
			</ul>
		`;
	}
	document.querySelector('#mystr').innerHTML= `$str`;	
	loadNewPage('results');
});