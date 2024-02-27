//creating an XML HTTP Request Object
const req = new XMLHttpRequest();
//what should i do and from where i have to connect
req.open("GET", "https://restcountries.com/v3.1/all");
req.send(); // sending a request to the server
// what to do when the Request is completed successfully
req.onload = function () {
  const obj = JSON.parse(this.response);
  const smallPopulationCountries = obj.filter(country => country.population < 200000);
        console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);
};
