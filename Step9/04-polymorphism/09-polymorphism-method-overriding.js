// Dog and Cat provide different implementations of makeSound().

class Animal {
    makeSound() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog: Bark! Bark!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat: Meow! Meow!");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.makeSound(); // Dog: Bark! Bark!
cat.makeSound(); // Cat: Meow! Meow!

// The same function works with different objects.
function playAnimalSound(animal) {
    animal.makeSound();
}

playAnimalSound(dog);
playAnimalSound(cat);