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
    let instructionText = this.add.text(190, 250,
        "Instructions:\n- \n Use arrow keys to move \n Press SPACE to jump!",
Paste the instructions here:
- use arrow keys to move
- use SPACE bar to jump
- match your commands to the beat of the music
- solve math problems to avoid obstacles
- if you miss a beat/obstacle, its game over
- get through all the obstacles and match the beats to win the game!
        { fontSize: '20px', fontWeight: 'bold', fill: '#000000', align: 'center' }
    ).setAlpha(0); // Set to invisible initially

    // Button Click Event
    button.on('pointerdown', () => {
        // Hide Play Button & Background
        button.setVisible(false);

        // Show Instructions & New Background
        instructionText.setAlpha(1);
    });

}
