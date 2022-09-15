const backgroundImage = new Image();
backgroundImage.src = "images/bg.png"; //1600 x 400, 2 images

class Background {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
  }
  runLogic() {
    this.x -= 0.5;
  }

  draw() {
    this.game.context.drawImage(
      backgroundImage,
      0,
      0,
      1600,
      400,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
