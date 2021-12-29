'use strict';

let types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

export class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('wrong name');
        } else if (types.indexOf(type) == -1) {
            throw new Error('wrong type');
        } else {
            this.name = name;
            this.type = type;
        }
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

export class Bowerman extends Character {
  constructor(name, type = 'Bowerman') {
    super(name, type);
    this.attack = 25;
      this.defence = 25;
      this.health = 100;
      this.level = 1;
  }
}

export class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
      this.defence = 10;
      this.health = 100;
      this.level = 1;
  }
}

export class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.health = 100;
    this.level = 1;
  }
}

export class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
      this.defence = 25;
      this.health = 100;
      this.level = 1;
  }
}

export class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
      this.health = 100;
      this.level = 1;
  }
}

export class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
      this.defence = 40;
      this.health = 100;
      this.level = 1;
  }
}
