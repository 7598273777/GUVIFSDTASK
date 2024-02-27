// Class and Constructor is created 
class UberPriceCalculator {
  constructor(basePricePerKm, surgeMultiplier) {
    this.basePricePerKm = basePricePerKm;
    this.surgeMultiplier = surgeMultiplier;
    }
    // Function here is to call this - with varying distance 
  calculatePrice(distanceInKm) {
    const price = this.basePricePerKm * distanceInKm * this.surgeMultiplier;
    return price;
  }
}
const calculator = new UberPriceCalculator(1.5, 1.2);
const price = calculator.calculatePrice(30);
console.log(`The price of your Uber ride is $${price.toFixed(2)}.`);

// Output : The price of your Uber ride is $54.00.
// You can change the value of the constructor to get the respective amount and also amount varies based the Distance given while function is called 