export function(getWeather){
	return fetch("https://quotes.rest/qod') //opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json")
	.then((response) => {
   		return response.json();
	})
	.then((data) => {
		return data.contents.quotes[0].quote;
	});
}
