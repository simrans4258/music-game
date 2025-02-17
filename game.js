const config = {
    type: Phaser.AUTO,
    width: 612,
    height: 598,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('background', "assets/startbackground.jpeg"); // Background Image
    this.load.image('button', 'assets/playbutton.png'); // Replace with actual button path
}

function create() {

    this.add.image(0, 0, 'background').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

    // Add Button in the Center
    let button = this.add.image(this.scale.width / 2, this.scale.height / 2, 'button')
        .setInteractive()
        .setScale(0.1); // Adjust scale as needed

    // Button Click Event
    button.on('pointerdown', () => {
        console.log('Button Clicked!');
    });
}
