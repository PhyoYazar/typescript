class Person {
  //? static only can call from class itself
  static description = "Player in our game!";

  //? Private Fields
  #score = 0; //can't touch from outside of class

  //? Public / Class Field
  count = 5;
  _numLives = 10; //can touch, just convention of fake private

  //? This constructor function is called when class is created => "new Person()"
  constructor(first, last) {
    // console.log("CONSTRUCTOR Active");
    // this.#score = 0;
    // this._numLives = 10;
    // this.count = 5;

    this.first = first;
    this.last = last;

    //? calling with instructor
    this.#secret();
  }

  static randomPlayer() {
    return new Person("Andy", "Samberg");
  }

  //////?   Setter
  set score(newScore) {
    if (newScore < 0) throw new Error("New score must be positive!!");
    this.#score = newScore;
  }

  //////?   Getter
  get fullName() {
    // getting fullName with getter not adding another variable
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this.#score;
  }

  //////?   Public Methods
  getScore() {
    // taking the private fields
    return this.#score;
  }

  updateScore(newScore) {
    // updating the private fields
    this.#score = newScore;
  }

  taunt() {
    console.log("booYHa");
  }

  loseLife() {
    this._numLives -= 1;
  }

  //////?   Private Methods
  #secret() {
    console.log("Secret ###");
  }
}

const p1 = new Person("John", "Goo");

const p2 = new Person("Yosha", "Mick");

const p3 = Person.randomPlayer();
console.log(p3);

console.log("Initial Data => ", p1);
p1.loseLife();

//? '#score' is not accessible outside class 'Person' because it has a private identifier
// console.log(p1.#score);

//! public methods of class
console.log("Public methods -> ", p1.getScore());
p1.updateScore(20);
console.log("Public methods -> ", p1.getScore());

//! with getter
console.log("Getter -> ", p1.score);

//! with setter
p1.score = 123;
console.log("Setter -> ", p1.score);

console.log("Final Data => ", p1);
