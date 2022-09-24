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
  constructor(
    public first: string,
    public last: string,
    // private _score: number     //only access in class itself

    protected _score: number //protected can access in class ifself and child inheritance
  ) {
    // this.first = first;
    // this.last = last;
    this.secretMethod();
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error("Score cannot be negative");
    this._score = newScore;
  }

  private secretMethod(): void {
    console.log("SECRET...");
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  maxScore() {
    this._score = 99999;
  }
}

const player1 = new Player("Hod", "Josh", 100);
// player1.scoreCard
console.log(player1.score);
player1.score = 80;
console.log(player1.score);

//////////////////////////////////////////////////////////?

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public color: string, public brand: string) {}

  print() {
    console.log(`${this.color} ${this.brand}`);
  }
}

const bike1 = new Bike("red");

const jacket1 = new Jacket("blue", "Prada");
jacket1.print();
