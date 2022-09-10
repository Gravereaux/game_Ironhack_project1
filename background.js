const backgroundImage = new Image();
backgroundImage.src = "images/bg02.png"; //1600 x 400, 2 images

class Background {
  constructor(game) {
    this.game = game;
    this.x = 800;
    this.y = 400;
    this.width = 800;
    this.height = 400;
    this.speed =2;
  }

  draw() {
    this.game.context.drawImage(
      backgroundImage,
      800 * 2,
      0,
      800,
      400,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
