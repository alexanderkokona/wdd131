const character = {
    name: "Gerald the Malevolent",
    class: "Mythic Nightmare",
    anger: 5,
    hunger: 100,
    image: 'axolotlhappy.webp',
    feed() {
      if (this.hunger >= 20) {
        this.anger -= 1;
        this.hunger -= 20;
        logAction("Gerald was fed! Anger decresed");
      } else {
          alert('Gerald is full!');
          logAction("Gerald is full and cannot eat more!");
      }
    },
    enrage() {
      this.anger += 1;
      this.hunger += 20;
      logAction("Gerald got hangrier. Anger inceased!");
    }
  };

function updateDisplay() {
    document.querySelector(".image").src = character.image;
    document.querySelector(".image").alt = character.name;
    document.querySelector(".name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("anger").textContent = character.anger;
    document.getElementById("hunger").textContent = character.hunger;
}

function logAction(message) {
    document.getElementById("log").textContent = message;
}
  
  document.getElementById("feed").addEventListener("click", () => {
    character.feed();
    updateDisplay();
});
  
  document.getElementById("enrageBtn").addEventListener("click", () => {
    character.enrage();
    updateDisplay();
});
  
// Initial render
updateDisplay();