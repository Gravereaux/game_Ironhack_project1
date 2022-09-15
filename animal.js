const animalImage = new Image();
animalImage.src = "images/animal.png"; //96 x 32, 3 images

const fishImage = new Image();
fishImage.src = "images/fish.png"; //99 x 36, 3 images

class Animal {
  constructor(game) {
    this.game = game;
    this.x = 800;
    this.y = Math.random() * 400;
    this.width = 20;
    this.height = 20;
    this.speed = Math.random() + 0.05;
    this.image = animalImage;
  }

  checkForIntersection(item) {
    return (
      this.x + this.width > item.x &&
      this.x < item.x + item.width &&
      this.y + this.height > item.y &&
      this.y < item.y + item.height
    );
  }

  runLogic() {
    this.x -= 1;
    const isIntersectingWithPlayer = this.checkForIntersection(
      this.game.player
    );

    if (isIntersectingWithPlayer) {
      this.game.score -= 1;
      const index = this.game.animals.indexOf(this);
      this.game.animals.splice(index, 1);
    }
  }
  draw() {
    this.game.context.drawImage(
      animalImage,
      32 * 2,
      0,
      32,
      32,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Fish extends Animal {
  constructor(game, speed, image) {
    super(game, speed, image);
    this.speed = Math.random() + 0.1;
    this.image = fishImage;
  }
}
