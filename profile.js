function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	window.alert('form submit');
}

function colorFunc(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	window.alert('My favorite color is crimson, but not the one found on CSS autofills');
}

function placeFunc(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	window.alert('Rome - Capital of Italy or Utah');
}

function ritualFunc(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	window.alert('Ritual Started');
}




let form = document.querySelector('form#contact');

let colorBtn = document.querySelector('button#color')
let placeBtn = document.querySelector('button#place')
let ritualBtn = document.querySelector('button#ritual')

form.addEventListener('submit', handleSubmit);
//img.addEventListener('mouseover', giveComp);

colorBtn.addEventListener("click", colorFunc)
placeBtn.addEventListener("click", placeFunc)
ritualBtn.addEventListener("click", ritualFunc)