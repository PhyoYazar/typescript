"use strict";
//? one way writing class with typescript
//////////////////////////////////////////////////////////?
// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   public score: number = 10;
//   //? Typescript private convention but not really private in js compiling
//   private scoreCard: number = 1;
//   //? JS Private
//   #scoreCard: number = 1;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod();
//   }
//   private secretMethod(): void {
//     console.log("SECRET...");
//   }
// }
//////////////////////////////////////////////////////////?
class Player {
    //   public readonly first: string;
    //   public readonly last: string;
    //   private score: number = 10;
    //? Parameter properties shorthand
    constructor(first, last, 
    // private _score: number     //only access in class itself
    _score //protected can access in class ifself and child inheritance
    ) {
        this.first = first;
        this.last = last;
        this._score = _score;
        // this.first = first;
        // this.last = last;
        this.secretMethod();
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0)
            throw new Error("Score cannot be negative");
        this._score = newScore;
    }
    secretMethod() {
        console.log("SECRET...");
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999;
    }
}
const player1 = new Player("Hod", "Josh", 100);
// player1.scoreCard
console.log(player1.score);
player1.score = 80;
console.log(player1.score);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`${this.color} ${this.brand}`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("blue", "Prada");
jacket1.print();
