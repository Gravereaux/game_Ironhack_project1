const playerImage = new Image();
playerImage.src = "images/diver2.png"; //128 x 30 , 4  images

class Player {
  constructor(game, x, y) {
    this.game = game;
    this.x =100;
    this.y = 200;
    this.width = 30;
    this.height = 30;
  }

  runLogic() {
    this.speedY += accelerationY;
    this.speedX += accelerationX;

    this.x = clamp(this.x + this.speedX, this.width, width - this.width);
    this.y = clamp(this.y + this.speedY, this.height, height - this.height);

    if (this.y === this.height || this.y === height - this.height) {
      this.speedY *= -1;
    }

    if (this.x === this.width || this.x === width - this.width) {
      this.speedX *= -1;
    }
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
