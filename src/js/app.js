'use strict';

let types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

export default class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('wrong name');
        } else if (!types.includes(type)) {
            throw new Error('wrong type');
        } else {
            this.name = name;
            this.type = type;
        }
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health == 0) {
            throw new Error("Character's dead");
        } else {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
