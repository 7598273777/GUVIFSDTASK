//creating an XML HTTP Request Object
const req = new XMLHttpRequest();
//what should i do and from where i have to connect
req.open("GET", "https://restcountries.com/v3.1/all");
req.send(); // sending a request to the server
// what to do when the Request is completed successfully
req.onload = function () {
  const obj = JSON.parse(this.response);
   obj.forEach((country) => {
     console.log("Name:", country.name.common);
     console.log("Capital:", country.capital);
     console.log("Flag:", country.flags.svg);
   });
};
