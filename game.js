// Start Scene
class StartScene extends Phaser.Scene {
    constructor() {
        super("StartScene");
    }
    preload() {
        this.load.image("startBg", "assets/startbackground.jpeg"); // Load home background
        this.load.image("button", "assets/playbutton.png"); // Load button
    }
    create() {
        this.add.image(0, 0, "startBg").setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height).setScale(1); // Set background image
        // Create an "Instructions" button
        const instructionsButton = this.add.image(this.scale.width / 2, this.scale.height / 2, 'button')
            .setScale(0.75)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("CreditsScene"); // Switch to CreditsScene
            });
    }
}

// Credits Scene
class CreditsScene extends Phaser.Scene {
    constructor() {
        super("CreditsScene");
    }
    preload() {
        this.load.image("creditsBg", "assets/peachpuffbg.png"); // Load credits background
        this.load.image("instructions", "assets/instructionsbutton.png"); // Load button
    }
    create() {
        this.add.image(612, 598, "creditsBg").setScale(1); // Set background image

        this.add.text(200, 50, "Credits", { fontSize: "50px", fill: "black" });
        this.add.text(220, 150, "Made By", { fontSize: "35px", fill: "black" });
        this.add.text(160, 250, "🎵 Nancy Chen 🎵", { fontSize: "30px", fill: "black" });
        this.add.text(140, 350, "🎵 Simran Sayeed 🎵", { fontSize: "30px", fill: "black" });

        const instructionsButton = this.add.image(300, 500, 'instructions')
        .setScale(0.350)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("InstructionScene");
            });
    }
}

// Instruction Scene
class InstructionScene extends Phaser.Scene {
    constructor() {
        super("InstructionScene");
    }
    preload() {
        this.load.image("instructionsBg", "assets/peachpuffbg.png"); // Load home background
        this.load.image("start", "assets/start.jpg"); // Load button
    }
    create() {
        this.add.image(612, 598, "instructionsBg").setScale(1); // Set background image
        this.add.text(50, 50, "Game Instructions", { fontSize: "23.5px", fill: "black" });
        this.add.text(70, 100, "Use arrow keys to move", { fontSize: "23px", fill: "black" });
        this.add.text(70, 150, "Use SPACE bar to jump", { fontSize: "23px", fill: "black" });
        this.add.text(70, 200, "Match your commands to the beat of", { fontSize: "23px", fill: "black" });
        this.add.text(70, 220, "the music", { fontSize: "23px", fill: "black" });
        this.add.text(70, 270, "Solve math problems to avoid obstacles", { fontSize: "23px", fill: "black" });
        this.add.text(70, 320, "If you miss a beat/obstacle, it is", { fontSize: "23px", fill: "black" });
        this.add.text(70, 340, "game over", { fontSize: "23px", fill: "black" });
        this.add.text(70, 390, "Get through all the obstacles", { fontSize: "23px", fill: "black" });
        this.add.text(70, 440, "Match the beats to win the game!", { fontSize: "23px", fill: "black" });

        const startButton = this.add.image(150, 530, 'start')
        .setScale(0.20)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
            });
    }
}

// Home Scene (List of Levels)
class HomeScene extends Phaser.Scene {
    constructor() {
        super("HomeScene");
    }
    preload() {
        this.load.image("homeBg", "assets/peachpuffbg.png"); // Load home background
    }
    create() {
        this.add.image(612, 598, "homeBg").setScale(1); // Set background image
        this.add.text(50, 50, "Select a Level", { fontSize: "35px", fill: "black" });

        const levels = ["Level1", "Level2", "Level3", "Level4", "Level5"];
        levels.forEach((level, index) => {
            this.add.text(70, 150 + index * 50, level, { fontSize: "32px", fill: "black" })
                .setInteractive()
                .on("pointerdown", () => {
                    this.scene.start(level);
                });
        });

        const instructionsButton = this.add.image(300, 500, 'instructions')
        .setScale(0.350)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("InstructionScene");
            });
    }
}

// Level 1 Scene
class Level1 extends Phaser.Scene {
    constructor() {
        super("Level1");
    }
    preload() {
        this.load.image("levelbg", "assets/peachpuffbg.png"); // Load home background
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 1", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const backButton = this.add.text(200, 300, "Back to Home", { fontSize: "24px", fill: "black" })
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene"); // Switch back to the home screen
        });
    }
}

// Level 2 Scene
class Level2 extends Phaser.Scene {
    constructor() {
        super("Level2");
    }
    preload() {
        this.load.image("levelbg", "assets/peachpuffbg.png"); // Load home background
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 2", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const backButton = this.add.text(200, 300, "Back to Home", { fontSize: "24px", fill: "black" })
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene"); // Switch back to the home screen
        });
    }
}

// Level 3 Scene
class Level3 extends Phaser.Scene {
    constructor() {
        super("Level3");
    }
    preload() {
        this.load.image("levelbg", "assets/peachpuffbg.png"); // Load home background
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 3", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const backButton = this.add.text(200, 300, "Back to Home", { fontSize: "24px", fill: "black" })
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene"); // Switch back to the home screen
        });
    }
}

// Level 4 Scene
class Level4 extends Phaser.Scene {
    constructor() {
        super("Level4");
    }
    preload() {
        this.load.image("levelbg", "assets/peachpuffbg.png"); // Load home background
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 4", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const backButton = this.add.text(200, 300, "Back to Home", { fontSize: "24px", fill: "black" })
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene"); // Switch back to the home screen
        });
    }
}

// Level 5 Scene
class Level5 extends Phaser.Scene {
    constructor() {
        super("Level5");
    }
    preload() {
        this.load.image("levelbg", "assets/peachpuffbg.png"); // Load home background
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 5", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const backButton = this.add.text(200, 300, "Back to Home", { fontSize: "24px", fill: "black" })
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene"); // Switch back to the home screen
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 612,
    height: 598,
    scene: [StartScene, CreditsScene, InstructionScene, HomeScene, Level1, Level2, Level3, Level4, Level5]
};

const game = new Phaser.Game(config);
