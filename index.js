/*addListeners();

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
*/
function getData(){
    return fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    return data;
});
}
alert(data);
alert("hejsan");
