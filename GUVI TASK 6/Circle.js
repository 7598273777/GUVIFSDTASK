class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  getArea() {
    return Math.PI * this._radius * this._radius;
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }

  toString() {
    return `Circle[radius=${this._radius}, color=${this._color}]`;
  }
}

// OUTPUTS : For Various Inputs 
const circle1 = new Circle();
console.log(circle1.toString()); // Circle[radius=1, color=red]

const circle2 = new Circle(2.5, "blue");
console.log(circle2.toString()); // Circle[radius=2.5, color=blue]

circle1.radius = 3.0;
circle1.color = "green";
console.log(circle1.toString()); // Circle[radius=3, color=green]

console.log(`Area: ${circle1.getArea()}`); // Area: 28.274333882308138
console.log(`Circumference: ${circle1.getCircumference()}`); // Circumference: 18.84955592153876
