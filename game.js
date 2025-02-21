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
    this.load.image('backgroundtwo', "assets/peachpuffbg.png"); // Background Image
    this.load.image('button', 'assets/playbutton.png'); // Replace with actual button path
}

function create() {

    let bg = this.add.image(0, 0, 'background').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

    // Add Button in the Center
    let button = this.add.image(this.scale.width / 2, this.scale.height / 2, 'button').setInteractive()
    button.setScale(0.1); // Adjust scale as needed

    // Instructions (Hidden Initially)
    let instructionText = this.add.text(170, 220, "Instructions:\n Use arrow keys to move \n Use SPACE bar to jump \n Match your commands to the \n beat of the music \n Solve math problems \n to avoid obstacles \n If you miss a beat/obstacle, \n it is game over \n Get through all the obstacles and \n match the beats to win the game!",
        { fontSize: '15px', fontWeight: 'bold', fill: '#000000', align: 'center' }
    ).setAlpha(0); // Set to invisible initially

    // Button Click Event
    button.on('pointerdown', () => {
        // Hide Play Button & Background
        button.setVisible(false);

        // Show Instructions & New Background
        instructionText.setAlpha(1);
    });

}
