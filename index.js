const wildAnimals = prompt("What animal?").split("");

class WildAnimal {
    constructor(wild, animal) {
        this.wild = wild;
        this.animal = animal;
    }

    start() {
        return this.animal + wildAnimals + " start eating";
    }

    stop() {
        return this.animal + wildAnimals + " stop eating";
    }

    startedAttacking() {
        return this.animal + wildAnimals + " started attacking";
    }

    stoppedAttacking() {
        return this.animal + wildAnimals + " stopped attacking";
    }

    started_to_sleep() {
        return this.animal + wildAnimals + " started to sleep";
    }

    get_up() {
        return this.animal + wildAnimals + " get up";
    }
}

wildAnimals.forEach((animal) => {
    const animal_skin = new WildAnimal(animal);
    console.log(animal_skin.start());
    console.log(animal_skin.stop());
    console.log(animal_skin.startedAttacking());
    console.log(animal_skin.stoppedAttacking());
    console.log(animal_skin.started_to_sleep());
    console.log(animal_skin.get_up());
});