import { 
    updateScore, 
    showHighScore, 
    setHighScore
} from '../ui/score.min.js'

import { showGameOver } from '../ui/gameState.min.js'
let usedBoost = false;
class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.timer = 0;

        this.sprite = scene.physics.add.sprite(x, y, 'charlie')
            .setScale(6)
            .setImmovable()
            .setCollideWorldBounds();
        this.sprite.body.setSize(this.sprite.width - 25, this.sprite.height - 7);
        this.sprite.body.setOffset(13, 5.3);
        this.isDead = false;
        usedBoost = false;
        return this;
    }

    update(input, delta) {
        this.timer += delta;

        if (!this.isDead && this.sprite.body.onFloor()) {
            this.sprite.play('charlierun', true);
        }

        if ((input.space.isDown && this.sprite.body.onFloor())) {
            this.sprite.setVelocityY(-900);
            this.sprite.play('charlieidle', true);
            usedBoost = false;
        }

        if((input.space.isDown && !this.sprite.body.onFloor() && this.sprite.body.velocity.y > -100 && this.sprite.body.velocity.y < 100 && !usedBoost)) {
            this.sprite.setVelocityY(-300);
            usedBoost = true;
        }
        if (this.timer > 100 / this.scene.state.speed) {
            this.timer = 0;
            updateScore(this.scene.state);
        }
    }

    die() {
        this.isDead = true;
        this.sprite.play('charlieidle', true);

        this.scene.state.started = false;
        this.scene.state.gameOver = true;

        if (this.scene.state.score > this.scene.state.highScore) {
            setHighScore(this.scene.state);
        }

        showHighScore();
        showGameOver();
    }
}

export default Player;