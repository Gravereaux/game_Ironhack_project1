const playerImage = new Image();
playerImage.src = "images/diver1.png"; //128 x 30 , 4  images

class Player {
  constructor(game) {
    this.game = game;
    this.x = 100;
    this.y = 200;
    this.width = 30;
    this.height = 30;
  }
  draw() {
    this.game.context.drawImage(
      playerImage,
      32 * (Math.floor(this.game.frame / 10) % 4),
      0,
      32,
      30,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
