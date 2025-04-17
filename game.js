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
        // Create an "Credits" button
        const CreditsButton = this.add.image(this.scale.width / 2, this.scale.height / 2, 'button')
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
        this.load.image("options", "assets/options.jpg"); // Load button
    }
    create() {
        this.add.image(612, 598, "creditsBg").setScale(1); // Set background image

        this.add.text(225, 50, "Credits", {fontFamily: 'Nunito', stroke: '#000000', strokeThickness: 1.9, fontSize: '50px', fill: 'black'});
        this.add.text(225, 150, "Made By", {fontFamily: 'Nunito', stroke: '#000000', strokeThickness: 1.9, fontSize: "40px", fill: "black" });
        this.add.text(165, 250, "🎵 Nancy Chen 🎵", {fontFamily: 'Nunito', fontSize: "30px", fill: "black" });
        this.add.text(145, 350, "🎵 Simran Sayeed 🎵", {fontFamily: 'Nunito', fontSize: "30px", fill: "black" });
        //width: 612, height: 598,
        const button = this.add.text(125, 450, 'Character Options', {
            fontFamily: 'Nunito',
            fontSize: '40px',
            color: 'black',
            backgroundColor: '#51ff4b',
            padding: { x: 10, y: 10 }
        })
        .setInteractive()
        .on('pointerdown', () => {
            this.scene.start("CharacterScene");
        });
    }
}
// Choose Character Scene
class CharacterScene extends Phaser.Scene {
    constructor() {
        super({ key: "CharacterScene" });
    }
    preload() {
        this.load.image("charactersBg", "assets/peachpuffbg.png"); // Load characters background
        this.load.image("instructions", "assets/instructionsbutton.png"); // Load button

        this.load.image("chick", "assets/baby_chick_3d.png");
        this.load.image("blackcat", "assets/black_cat_3d.png");
        this.load.image("lightcat", "assets/cat_3d.png");
        this.load.image("chipmunk", "assets/chipmunk_3d.png");
        this.load.image("cow", "assets/cow_3d.png");
        this.load.image("dog", "assets/dog_3d.png");
        this.load.image("poodle", "assets/poodle_3d.png");
        this.load.image("gorilla", "assets/gorilla_3d.png");
        this.load.image("hedgehog", "assets/hedgehog_3d.png");
        this.load.image("honeybee", "assets/honeybee_3d.png");
        this.load.image("monkey", "assets/monkey_3d.png");
        this.load.image("pig", "assets/pig_3d.png");
        this.load.image("rabbit", "assets/rabbit_3d.png");
        this.load.image("tiger", "assets/tiger_3d.png");
    }
    create() {
        this.add.image(612, 598, "charactersBg").setScale(1);

        this.add.image(100, 150, "chick").setScale(0.35);
        this.add.image(200, 150, "blackcat").setScale(0.35);
        this.add.image(300, 150, "lightcat").setScale(0.35);
        this.add.image(400, 150, "chipmunk").setScale(0.35);
        this.add.image(500, 150, "cow").setScale(0.35);
        this.add.image(100, 290, "dog").setScale(0.35);
        this.add.image(200, 290, "poodle").setScale(0.35);
        this.add.image(300, 290, "gorilla").setScale(0.35);
        this.add.image(400, 290, "hedgehog").setScale(0.35);
        this.add.image(500, 290, "honeybee").setScale(0.35);
        this.add.image(150, 400, "monkey").setScale(0.35);
        this.add.image(250, 400, "pig").setScale(0.35);
        this.add.image(350, 400, "rabbit").setScale(0.35);
        this.add.image(450, 400, "tiger").setScale(0.35);

        this.add.text(300, 50, "Choose Your Character", {fontFamily: 'Nunito', stroke: '#000000', strokeThickness: 1.9, fontSize: "40px", fill: "#000000" }).setOrigin(0.5);

        let selectedAnimal = null;
        let greenOutline = this.add.graphics();
        greenOutline.lineStyle(12, 0xFF0000);
        greenOutline.setVisible(false);

        function handleCharacterSelection(character) {
            greenOutline.clear();
            greenOutline.lineStyle(6, 0x00FF00);
            greenOutline.strokeRect(0, 0, 90, 90);
            greenOutline.x = 55; // Fixed x position
            greenOutline.y = 110; // Fixed y position
            greenOutline.setVisible(true);

            selectedAnimal = character;
        }

        let chick = this.add.image(100, 150, 'chick').setScale(0.35);
        chick.setInteractive();
        chick.on('pointerdown', () => handleCharacterSelection('chick'));

        let blackcat = this.add.image(200, 150, 'blackcat').setScale(0.35);
        blackcat.setInteractive();
        blackcat.on('pointerdown', () => handleCharacterSelection('blackcat'));

        let lightcat = this.add.image(300, 150, 'lightcat').setScale(0.35);
        lightcat.setInteractive();
        lightcat.on('pointerdown', () => handleCharacterSelection('lightcat'));

        let chipmunk = this.add.image(400, 150, 'chipmunk').setScale(0.35);
        chipmunk.setInteractive();
        chipmunk.on('pointerdown', () => handleCharacterSelection('chipmunk'));

        let cow = this.add.image(500, 150, 'cow').setScale(0.35);
        cow.setInteractive();
        cow.on('pointerdown', () => handleCharacterSelection('cow'));

        let dog = this.add.image(100, 290, 'dog').setScale(0.35);
        dog.setInteractive();
        dog.on('pointerdown', () => handleCharacterSelection('dog'));

        let poodle = this.add.image(200, 290, 'poodle').setScale(0.35);
        poodle.setInteractive();
        poodle.on('pointerdown', () => handleCharacterSelection('poodle'));

        let gorilla = this.add.image(300, 290, 'gorilla').setScale(0.35);
        gorilla.setInteractive();
        gorilla.on('pointerdown', () => handleCharacterSelection('gorilla'));

        let hedgehog = this.add.image(400, 290, 'hedgehog').setScale(0.35);
        hedgehog.setInteractive();
        hedgehog.on('pointerdown', () => handleCharacterSelection('hedgehog'));

        let honeybee = this.add.image(500, 290, 'honeybee').setScale(0.35);
        honeybee.setInteractive();
        honeybee.on('pointerdown', () => handleCharacterSelection('honeybee'));

        let monkey = this.add.image(150, 400, 'monkey').setScale(0.35);
        monkey.setInteractive();
        monkey.on('pointerdown', () => handleCharacterSelection('monkey'));

        let pig = this.add.image(250, 400, 'pig').setScale(0.35);
        pig.setInteractive();
        pig.on('pointerdown', () => handleCharacterSelection('pig'));

        let rabbit = this.add.image(350, 400, 'rabbit').setScale(0.35);
        rabbit.setInteractive();
        rabbit.on('pointerdown', () => handleCharacterSelection('rabbit'));

        let tiger = this.add.image(450, 400, 'tiger').setScale(0.35);
        tiger.setInteractive();
        tiger.on('pointerdown', () => handleCharacterSelection('tiger'));

        const instructionsButton = this.add.image(300, 520, 'instructions')
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
        this.add.text(25, 25, "Game Instructions", {fontFamily: 'Nunito',stroke: '#000000', strokeThickness: 1.5, fontSize: "35px", fill: "black" });
        this.add.text(50, 100, "Use arrow keys to move", {fontFamily: 'Nunito', fontSize: "23px", fill: "black" });
        this.add.text(50, 150, "Use SPACE bar to jump", {fontFamily: 'Nunito', fontSize: "23px", fill: "black" });
        this.add.text(50, 200, "Match your commands to the beat of the music", {fontFamily: 'Nunito', fontSize: "23px", fill: "black" });
        this.add.text(50, 250, "Solve math problems to avoid obstacles", {fontFamily: 'Nunito', fontSize: "23px", fill: "black" });
        this.add.text(50, 300, "If you miss a beat/obstacle, it is game over", {fontFamily: 'Nunito', fontSize: "23px", fill: "black" });
        this.add.text(50, 350, "Get through all the obstacles", {fontFamily: 'Nunito', fontSize: "23px", fill: "black" });
        this.add.text(50, 400, "Match the beats to win the game!", {fontFamily: 'Nunito', fontSize: "23px", fill: "black" });

        const startButton = this.add.image(110, 520, 'start')
        .setScale(0.20)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
            });

        const button = this.add.text(235, 490, 'Character Options', {
            fontFamily: 'Nunito',
            fontSize: '40px',
            color: 'black',
            borderRadius: '25px',
            backgroundColor: '#51ff4b',
            padding: { x: 10, y: 10 }
        })
        .setInteractive()
        .on('pointerdown', () => {
            this.scene.start("CharacterScene");
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
        this.add.text(50, 50, "Select a Level", {fontFamily: 'Nunito', fontSize: "35px", fill: "black" });

        const levels = ["Level1", "Level2", "Level3", "Level4", "Level5"];
        levels.forEach((level, index) => {
            this.add.text(70, 150 + index * 50, level, {fontFamily: 'Nunito', fontSize: "32px", fill: "black" })
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
        this.load.image("home", "assets/home.png"); // Load home button
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/platform.png');
        this.load.image('onenote', './assets/musicalnotesone.png');
        this.load.image('threenotes', './assets/musicnoteonne.png');
    }
    create() {
        //this.physics.startSystem(Phaser.Physics.ARCADE);

        this.add.sprite(0,0,'sky').setScale(2);
















        // "Back to Home" button
        const homeButton = this.add.image(300, 500, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
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
        this.load.image("home", "assets/home.png"); // Load home button
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 2", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const homeButton = this.add.image(300, 500, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
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
        this.load.image("home", "assets/home.png"); // Load home button
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 3", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const homeButton = this.add.image(300, 500, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
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
        this.load.image("home", "assets/home.png"); // Load home button
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 4", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const homeButton = this.add.image(300, 500, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
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
        this.load.image("home", "assets/home.png"); // Load home button
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.text(200, 100, "Welcome to Level 5", { fontSize: "24px", fill: "black" });
        // "Back to Home" button
        const homeButton = this.add.image(300, 500, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
            });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 612,
    height: 598,
    scene: [StartScene, CreditsScene, CharacterScene, InstructionScene, HomeScene, Level1, Level2, Level3, Level4, Level5]
};

const game = new Phaser.Game(config);
