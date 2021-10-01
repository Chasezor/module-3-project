console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	window.alert('form submit');
}

function giveComp(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	window.alert('Nice Butt');
}


let form = document.querySelector('form#contact');
let img = document.querySelector('#main-img-cat')

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', giveComp);

