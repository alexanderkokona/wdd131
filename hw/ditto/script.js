const ditto = {
    id: 132,
    name: "ditto",
    type: "normal",
    abilities: ["Limber", "Imposter"],
    base_experience: 101,
    height: 3,
    weight: 40,
    stats: {
      hp: 48,
      attack: 48,
      defense: 48,
      special_attack: 48,
      special_defense: 48,
      speed: 48
    },
    normalSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
    shinySprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
    isShiny: false,
    get sprite() {
      return this.isShiny ? this.shinySprite : this.normalSprite;
    },
    toggleForm: function () {
      this.isShiny = !this.isShiny;
      return this.sprite;
    }
  };
  
  // Populate the card
  document.getElementById("name").textContent = ditto.name.toUpperCase();
  document.getElementById("ability").textContent = `Ability: ${ditto.abilities[1]}`;
  const dittoImg = document.getElementById("ditto");
  dittoImg.src = ditto.sprite;
  
  // Stats
  document.getElementById("hp").textContent = ditto.stats.hp;
  document.getElementById("attack").textContent = ditto.stats.attack;
  document.getElementById("defense").textContent = ditto.stats.defense;
  document.getElementById("special-attack").textContent = ditto.stats.special_attack;
  document.getElementById("special-defense").textContent = ditto.stats.special_defense;
  document.getElementById("speed").textContent = ditto.stats.speed;
  
  // Toggle on image click
  dittoImg.addEventListener("click", () => {
    dittoImg.src = ditto.toggleForm();
  });
  