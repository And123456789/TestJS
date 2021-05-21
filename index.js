addListeners();

function addListeners(){
	document.querySelector('button').addEventListener('click', quoteButtonClicked);
}

function quoteButtonClicked(){
	insertParagraph('Life')
}

function insertParagraph(text){
	const p = document.createElement('p');
		p.innerText = text;
	document.querySelector('body').appendChild(p);
}
alert("Hej!");