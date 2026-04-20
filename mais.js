const game = new Phaser.Game(400, 600, Phaser.AUTO, 'pouClone', { preload, create, update });

let pou, food;

function preload() {
  game.load.image('pou', 'assets/pou.png');
  game.load.image('food', 'assets/food.png');
}

function create() {
  pou = game.add.sprite(200, 300, 'pou');
  pou.anchor.set(0.5);

  food = game.add.sprite(200, 500, 'food');
  food.anchor.set(0.5);
  food.inputEnabled = true;
  food.events.onInputDown.add(feedPou, this);
}

function feedPou() {
  console.log("Pou foi alimentado!");
}

function update() {
  // Aqui você pode adicionar lógica de status (fome, energia, felicidade)
}
