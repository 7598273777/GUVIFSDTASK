class Movie {
  // title,studio,rating -  which is a String and assigned the respective values to it
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  // Creating thr getPg - which only returns a new array of only those movies in the input array with a rating of "PG".
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}
// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

//OUTPUT
//Movie {
  //title: 'Casino Royale',
  //studio: 'Eon Productions',
  //rating: 'PG-13'
//}