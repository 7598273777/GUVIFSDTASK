//creating an XML HTTP Request Object
const req = new XMLHttpRequest();
//what should i do and from where i have to connect
req.open("GET", "https://restcountries.com/v3.1/all");
req.send(); // sending a request to the server
// what to do when the Request is completed successfully
req.onload = function () {
  const obj = JSON.parse(this.response);
   const usDollarCountries = obj.filter(country => {
            return country.currencies && country.currencies.USD && country.currencies.USD.name === 'United States dollar';
        });
        console.log('Countries that use US dollars:', usDollarCountries);
};
