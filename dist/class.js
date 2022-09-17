"use strict";
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
class Player {
    //   public readonly first: string;
    //   public readonly last: string;
    //   private score: number = 10;
    //? Parameter properties shorthand
    constructor(first, last, scoreCard) {
        this.first = first;
        this.last = last;
        this.scoreCard = scoreCard;
        // this.first = first;
        // this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("SECRET...");
    }
}
const player1 = new Player("Hod", "Josh", 100);
// player1.scoreCard
