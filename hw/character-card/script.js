const character = {
    name: "Gerald the Malevolent",
    class: "Mythic Nightmare",
    level: 5,
    health: 20,
    image: 'axolotlhappy.webp',
    attacked() {
      if (this.health >= 20) {
        this.level -= 1;
        this.health -= 20;
      } else {
          alert('Character Died?');
      }
    },
    levelUp() {
      this.level += 1;
      this.health += 20;
    }
  };