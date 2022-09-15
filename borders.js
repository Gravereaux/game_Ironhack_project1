class Borders {
  constructor(game) {
    this.game = game;
    this.x = 800;
    this.y = 400;
  }

  checkForIntersection(player) {
    return (
      this.x + this.width > player.x &&
      this.x < player.x + player.width &&
      this.y + this.height > player.y &&
      this.y < player.y + player.height
    );
  }

  runLogic() {
    const playerIntersectingWithBorder = this.x >= 800;

    if (playerIntersectingWithBorder) {
      this.game.player.x = this.width;
    } else if (this.game.player.x < this.width) {
      this.game.player.x = this.game.player.x;
    }
  }
}
