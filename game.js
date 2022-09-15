class Game {
  constructor(gameScreenElement, gameOverScreenElement) {
    this.gameScreenElement = gameScreenElement;
    this.gameOverScreenElement = gameOverScreenElement;

    this.canvasElement = document.querySelector("canvas");
    this.context = this.canvasElement.getContext("2d");

    this.enableControls();
    this.reset();
  }

  reset() {
    this.player = new Player(this);
    this.animals = [];
    this.garbages = [];

    this.enableControls();

    this.score = 10;

    this.frame = 0;
  }

  enableControls() {
    window.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowUp":
          this.player.y -= 1;
          break;
        case "ArrowDown":
          this.player.y += 1;
          break;
        case "ArrowLeft":
          this.player.x -= 1;
          break;
        case "ArrowRight":
          this.player.x += 1;
          break;
      }
    });
  }

  possiblyAddAnimal() {
    if (Math.random() < 0.005) {
      const animal = new Animal(this);
      this.animals.push(animal);
    }
  }

  possiblyAddGarbage() {
    if (Math.random() < 0.005) {
      const garbage = new Garbage(this);
      this.garbages.push(garbage);
    }
  }

  runLogic() {
    this.possiblyAddAnimal();
    for (const animal of this.animals) {
      animal.runLogic();
    }

    this.possiblyAddGarbage();
    for (const garbage of this.garbages) {
      garbage.runLogic();
    }
    if (this.score <= 0) {
      this.lose();
    }
  }

  drawScore() {


    this.context.font = "15px sans-serif";
    this.context.fillStyle = "white";
    this.context.fillText("Your score: ", 50, 30);
    this.context.fillText(this.score, 130, 30);
  }

  draw() {
    this.frame++;
    this.context.clearRect(0, 0, 800, 400);
    this.player.draw();

    for (const animal of this.animals) {
      animal.draw();
    }

    for (const garbage of this.garbages) {
      garbage.draw();
    }
    this.drawScore();
  }

  lose() {
    this.gameScreenElement.style.display = "none";
    this.gameOverScreenElement.style.display = "";
    clearInterval(this.intervalId);
  }

  start() {
    this.reset();
    this.intervalId = setInterval(() => {
      this.loop();
    }, 1000 / 60);
  }

  loop() {
    this.runLogic();
    this.draw();
  }
}