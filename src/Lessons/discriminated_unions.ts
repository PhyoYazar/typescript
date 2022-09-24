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

interface Sheep {
  name: string;
  age: number;
  weight: number;
  _type: "sheep"; // discriminated Unions
}

type FarmAnimal = Rooster | Cow | Pig | Sheep;

function getFarmAnimal(animal: FarmAnimal) {
  switch (animal._type) {
    case "rooster":
      return "Roos";
    case "cow":
      return "Cowwww";
    case "pig":
      return "Pig";
    case "sheep":
      return "Sheep";
    //? if one of above theme is missing, typescript will yells errors because of ==> Exhaustiveness Check (Never)

    default:
      //? We should never make it here, if we handle all cases correctly
      //   const shouldNeverGetHere: never = animal;

      const _exhaustiveCheck: never = animal;
      // assigning never just like this may be just declaring variable,
      // but the purpose is to check errors

      return _exhaustiveCheck;
  }
}

const joes: Cow = {
  name: "Joes",
  age: 4,
  weight: 140,
  _type: "cow",
};

console.log(getFarmAnimal(joes));
