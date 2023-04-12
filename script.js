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

	if (countryName === "") {
		alert("Please select country name");
	}


fetch(`https://world-geo-data.p.rapidapi.com/countries/${countryName}?language=en%2Cru%2Czh%2Ces%2Car%2Cfr%2Cfa%2Cja%2Cpl%2Cit%2Cpt%2Cde`, options)
	.then(response => response.json())
	//.then(response => console.log(response))
	.then((data) => {
		console.log(data);
		result.innerHTML = `
		<img src="${data.flag.file}" class = "flag-img">
		<h2>${data.name}</h2>
        
		<li>Capital: ${data.capital.name}</li> <br />
		<li>Continent: ${data.continent.name}</li> <br />
		<li>Population: ${data.population}</li> <br />
		<li>Currency: ${data.currency.name}</li> <br />`
	})
	.catch(err => console.error(err));

});



