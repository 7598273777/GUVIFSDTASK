class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}.`);
  }
}

// Creating an instance of Person
const person1 = new Person("jegan", 25, "male");
const person2 = new Person("julie", 20, "Female");

person1.introduce(); // Output: Hi, I'm jegan, a 25-year-old female.
person2.introduce(); // Output: Hi, I'm julie, a 20-year-old male.
