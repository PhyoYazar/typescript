interface Rooster {
  name: string;
  age: number;
  weight: number;
  _type: "rooster"; // discriminated Unions
}

interface Cow {
  name: string;
  age: number;
  weight: number;
  _type: "cow"; // discriminated Unions
}

interface Pig {
  name: string;
  age: number;
  weight: number;
  _type: "pig"; // discriminated Unions
}

type FarmAnimal = Rooster | Cow | Pig;

function getFarmAnimal(animal: FarmAnimal) {
  switch (animal._type) {
    case "rooster":
      return "Roos";
    case "cow":
      return "Cowwww";
    case "pig":
      return "Pig";
    default:
      return "HAHAHA";
  }
}

const joes: Cow = {
  name: "Joes",
  age: 4,
  weight: 140,
  _type: "cow",
};

console.log(getFarmAnimal(joes));
