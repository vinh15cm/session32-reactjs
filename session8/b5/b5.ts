// Union Types
let numOrStr: number | string;
numOrStr = 10; // OK
numOrStr = "Hello"; // OK



interface Dog {
    name: string;
    bark(): void;
}

interface Cat {
    name: string;
    meow(): void;
}

type DogCat = Dog & Cat;

const pet: DogCat = {
    name: "Max",
    bark() {
        console.log("Woof!");
    },
    meow() {
        console.log("Meow!");
    }
};
