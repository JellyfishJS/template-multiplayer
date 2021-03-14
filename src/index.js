const {
    GameObject,
    ImageSprite,
    Vector,
    game,
    serve
} = require('jellyfish.js');

class Player extends GameObject {
    onCreate() {
        this.position = Vector.xy(100, 300);
        this.sprite = this.createSprite(ImageSprite, '/assets/player.png');
        this.sprite.following = this;
    }

    keyHeld(keycode) {
        if (!this.isOwnedByCurrentUser()) { return; }

        let movement = Vector.zero;
        switch (keycode) {
            case 40: movement = Vector.up; break;
            case 38: movement = Vector.down; break;
            case 37: movement = Vector.left; break;
            case 39: movement = Vector.right; break;
        }

        this.position = this.position.plus(movement);
    }
}
game.registerClass(Player);

game.createObject(Player);

game.setCanvasByID("game");
game.start();
serve();
