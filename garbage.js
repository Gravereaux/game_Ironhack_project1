const garbageImage = new Image();
garbageImage.src = "/images/garbage1.png"; //30 x 30, 1 image

class Garbage {
  constructor(game) {
    this.game = game;
    this.x = Math.random() * 600;
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.speed = Math.random() + 0.1;
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
    this.y += 0.2;
    const isIntersectingWithPlayer = this.checkForIntersection(
      this.game.player
    );
    const isIntersectingWithBottom = this.y > 400;

    if (isIntersectingWithPlayer) {
      this.game.score += 1;
      const index = this.game.garbages.indexOf(this);
      this.game.garbages.splice(index, 1);
    } else if (isIntersectingWithBottom) {
      this.game.score -= 1;
      const index = this.game.garbages.indexOf(this);
      this.game.garbages.splice(index, 1);
    }
  }
  draw() {
    this.game.context.drawImage(
      garbageImage,
      0,
      0,
      30,
      30,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
