const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e05982402msh7df351b4e5fa0d8p130489jsnd872581f7625',
		'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com'
	}
};


const button = document.getElementById("search-button");
const country = document.getElementById("country");

button.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("yes");
	//console.log(country)
	let countryName = country.value;
    console.log(countryName);



fetch(`https://world-geo-data.p.rapidapi.com/countries/${countryName}?language=en%2Cru%2Czh%2Ces%2Car%2Cfr%2Cfa%2Cja%2Cpl%2Cit%2Cpt%2Cde`, options)
	.then(response => response.json())
	//.then(response => console.log(response))
	.then((data) => {
		console.log(data);
		result.innerHTML = `
		<img src="${data.flag.file}" class = "flag-img">
		<h2>${data.name}</h2>
        
		<h4>Capital: ${data.capital.name}</h4> <br />
		<h4>Continent: ${data.continent.name}</h4> <br />
		<h4>Population: ${data.population}</h4> <br />
		<h4>Currency: ${data.currency.name}</h4> <br />`
	})
	.catch(err => console.error(err));

});


