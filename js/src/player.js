class Player extends Phaser.Physics.Arcade.Sprite {
    stats = {
        curHP: 10,
        moveSpeed: 75,
    }

    gear = {
        head: null,
        lArm: null,
        rArm: null,
        lLeg: null,
        rLeg: null,
        aux1: null,
        aux2: null,
    }

    items = {
        itemInv: [],
    }

    constructor(scene, xPos, yPos, texture) {
        super(scene, xPos, yPos, texture);

        scene.physics.add.existing(this);
    }

    update() {

    }

    interact() {

    }
    
    //movement methods
    moveLeft() {
        this.setVelocityX(-this.stats.moveSpeed);
    } // end of moveLeft()

    moveRight() {
        this.setVelocityX(this.stats.moveSpeed);
    } // end of moveRight()

    moveUp() {
        this.setVelocityY(-this.stats.moveSpeed);
    } // end of moveUp()
    moveDown() {
        this.setVelocityY(this.stats.moveSpeed);
    } // end of moveDown()

    standStill() {
        this.setVelocity(0, 0)

    } //end of standStill()

}