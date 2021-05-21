import{getWeather} from 'fetchWeather.js';
addListeners();

function addListeners(){
	document.querySelector('button').addEventListener('click', quoteButtonClicked);
}

function quoteButtonClicked(){
	getWeather().then(insertParagraph);
	
}

function insertParagraph(text){
	const p = document.createElement('p');
		p.innerText = text;
	document.querySelector('body').appendChild(p);
}

