class Cactus {
    constructor(scene) {
        this.scene = scene;
        var tmp = Math.random();
        if(tmp <= 0.2) {
            this.sprite = scene.physics.add.sprite(1000, 700, 'tiles', 2)
                .setScale(8)
                .setCollideWorldBounds(true);
            this.sprite.body.setSize(this.sprite.width - 8, this.sprite.height - 5);
            this.sprite.body.setOffset(5, 5);
        }
        else if(tmp <= 0.7 && tmp > 0.2) {
            this.sprite = scene.physics.add.sprite(1000, 700, 'singlefire', 0)
                .setScale(0.6)
                .setCollideWorldBounds(true);
            this.sprite.play("singlefireanim", true);
            if(Math.random() < 0.5) {
                this.sprite.flipX = !this.sprite.flipX;
            }
            this.sprite.body.setSize(this.sprite.width - 75, this.sprite.height - 35);
            this.sprite.body.setOffset(37, 35);
        }
        else {
            this.sprite = scene.physics.add.sprite(1000, 700, "triplefire", 0)
                .setScale(0.6)
                .setCollideWorldBounds(true);
            this.sprite.play("triplefireanim", true);
            if(Math.random() < 0.5) {
                this.sprite.flipX = !this.sprite.flipX;
            }
            this.sprite.body.setSize(this.sprite.width - 75, this.sprite.height - 35);
            this.sprite.body.setOffset(37, 35);
        }
        this.sprite.body.customBoundsRectangle.left = -567867800;
        this.sprite.body.customBoundsRectangle.right = 565640;

        this.collider = scene.physics.add.collider(scene.player.sprite, this.sprite, this.gameOver, null, this);
        this.update();
    }

    update() {
        this.sprite.setVelocityX(-150 * this.scene.state.speed);
    }

    stop() {
        this.sprite.setVelocityX(0);
    }

    gameOver() {
        this.scene.player.die();
    }
}

export default Cactus;