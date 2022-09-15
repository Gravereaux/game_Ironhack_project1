const backgroundImage = new Image();
backgroundImage.src = "images/background/1.png";

class Background {
  constructor(game, initialX) {
    this.game = game;
    this.x = initialX;
    this.width = 800;
    this.height = 400;
  }
  runLogic() {
    this.x = this.x - 0.5;
  }

  draw() {
    this.game.context.drawImage(
      backgroundImage,
      0,
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
