"use strict";
function getFarmAnimal(animal) {
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
const joes = {
    name: "Joes",
    age: 4,
    weight: 140,
    _type: "cow",
};
console.log(getFarmAnimal(joes));
