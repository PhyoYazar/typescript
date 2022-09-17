class Person {
  //? Private Fields
  #score = 0;

  //? Public / Class Field
  numLives = 10;

  //? This constructor function is called when class is create with "new Person()"
  constructor(first, last) {
    // console.log("CONSTRUCTOR Active");

    // this.#score = 0;
    // this.numLives = 10;

    this.first = first;
    this.last = last;

    this.#secret();
  }

  //? Getter
  get fullName() {
    return `${this.first} ${this.last}`;
  } // getting fullName with getter not adding another variable

  get score() {
    return this.#score;
  }
  //? Same action but getter is much better

  //? Public Methods
  getScore() {
    return this.#score;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  taunt() {
    console.log("booYHa");
  }

  loseLife() {
    this.numLives -= 1;
  }

  //? Private Methods
  #secret() {
    console.log("Secret ###");
  }
}

const p1 = new Person("John", "Goo");
const p2 = new Person("Yosha", "Mick");

console.log(p1);
p1.loseLife();

//? '#score' is not accessible outside class 'Person' because it has a private identifier
// console.log(p1.#score);

console.log(p1.getScore());
console.log(p1.updateScore(20));
console.log(p1.getScore());

console.log(p1);
