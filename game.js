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

        const characterPositions = [
            { key: "chick", x: 100, y: 150 },
            { key: "blackcat", x: 200, y: 150 },
            { key: "lightcat", x: 300, y: 150 },
            { key: "chipmunk", x: 400, y: 150 },
            { key: "cow", x: 500, y: 150 },
            { key: "dog", x: 100, y: 290 },
            { key: "poodle", x: 200, y: 290 },
            { key: "gorilla", x: 300, y: 290 },
            { key: "hedgehog", x: 400, y: 290 },
            { key: "honeybee", x: 500, y: 290 },
            { key: "monkey", x: 150, y: 400 },
            { key: "pig", x: 250, y: 400 },
            { key: "rabbit", x: 350, y: 400 },
            { key: "tiger", x: 450, y: 400 }
        ];

        this.add.text(300, 50, "Choose Your Character", {fontFamily: 'Nunito', stroke: '#000000', strokeThickness: 1.9, fontSize: "40px", fill: "#000000" }).setOrigin(0.5);

        let selectedAnimalKey = null;
        let greenOutline = this.add.graphics();
        greenOutline.lineStyle(6, 0x00FF00);
        greenOutline.strokeRect(0, 0, 90, 90);
        greenOutline.setVisible(false);

        const handleCharacterSelection = (characterKey, image) => {
            greenOutline.x = image.x - image.width * 0.3 / 2 - 5; // Adjust x based on scale and outline width
            greenOutline.y = image.y - image.height * 0.31 / 2 - 5; // Adjust y based on scale and outline width
            greenOutline.setVisible(true);
            selectedAnimalKey = characterKey;
            this.game.global.selectedCharacterKey = characterKey; // Store the key globally
            console.log('Selected character:', this.game.global.selectedCharacterKey);
        };

        characterPositions.forEach(charInfo => {
            const image = this.add.image(charInfo.x, charInfo.y, charInfo.key).setScale(0.35);
            image.setInteractive();
            image.on('pointerdown', () => handleCharacterSelection(charInfo.key, image));
        });

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
        this.add.text(50, 450, "Good luck & have fun!", {fontFamily: 'Nunito', fontSize: "23px", fill: "black" });

        const startButton = this.add.image(110, 530, 'start')
        .setScale(0.20)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
            });

        const button = this.add.text(235, 495, 'Character Options', {
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
        this.load.image("settings", "assets/setting.png"); // Load button
    }
    create() {
        this.add.image(612, 598, "homeBg").setScale(1); // Set background image
        this.add.text(25, 25, "Select a Level", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "40px", fill: "black" });

        const levelData = [
            { key: "Level1", x: 130, y: 180, label: "1" },
            { key: "Level2", x: 290, y: 180, label: "2" },
            { key: "Level3", x: 450, y: 180, label: "3" },
            { key: "Level4", x: 210, y: 350, label: "4" },
            { key: "Level5", x: 370, y: 350, label: "5" },
        ];

        levelData.forEach((level) => {
            // Create a circle for the button
            const circle = this.add.circle(level.x, level.y, 50, 0x84c7ff); // Example fill color
            circle.setInteractive(); // Make it clickable

            // Style the circle to have a black stroke (border)
            circle.setStrokeStyle(2, 0x000000); // 2 is the thickness, 0x000000 is black
            circle.alpha = 0.8;

            // Create text for the button label
            const text = this.add.text(level.x, level.y, level.label, {
                fontFamily: 'Nunito',
                stroke: '#000000',
                strokeThickness: 1.9,
                fontSize: '40px',
                fill: '#000000',
                align: 'center',
            }).setOrigin(0.5);

            // Add a glow effect on hover (optional)
            circle.on('pointerover', () => {
                circle.setFillStyle(0x80ff75);
                circle.alpha = 1;
            });

            circle.on('pointerout', () => {
                circle.setFillStyle(0x80ff75);
                circle.alpha = 0.8;
            });

            // Handle button click to start the level
            circle.on('pointerdown', () => {
                if (this.game.global.selectedCharacterKey) {
                    this.scene.start(level.key);
                } else {
                    alert("Please choose a character before playing the game! Thank you.");
                }
            });
        });

        const instructionsButton = this.add.image(300, 500, 'instructions')
        .setScale(0.350)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("InstructionScene");
            });

        const settingsButton = this.add.image(490, 50, 'settings')
        .setScale(0.20)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("SettingScene");
            });
    }
}

// Level 1 Scene
class Level1 extends Phaser.Scene {
    constructor() {
        super("Level1");
        this.score = 0; // Initialize the score
        this.scoreText = null; // Variable to hold the score text object
        this.obstacle = null; // To hold the red obstacle
        this.obstacleActive = true;
    }
    preload() {
        this.load.image("home", "assets/home.png"); // Load home button
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/platform2.jpg');
        this.load.image('groundOne', './assets/platform.png');
        this.load.image('onenote', './assets/musicalnotesone.png'); // Singular note
        this.load.image('threenotes', './assets/musicnoteonne.png'); // Plural notes
        this.load.image('redObstacle', './assets/obstacle.png'); // Load the red obstacle image
        this.load.audio('prizeMusic', './assets/pop.mp3');
    }
    create() {
        this.add.sprite(0,0,'sky').setScale(2);

        const platforms = this.physics.add.staticGroup();
        const floor = this.physics.add.staticGroup();
        const notes = this.physics.add.group(); // Create a group for the musical notes
        this.notes = notes; // Store the notes group in the scene

        // Create the ground platforms
        platforms.create(90,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(180,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(270,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(360,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(450,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(540,547,'ground').setScale(0.5,0.75).refreshBody();

        // Create the green floors and place notes on them
        floor.create(25,175,'groundOne').setScale(1).refreshBody();
        this.placeNotesOnFloor(25, 175, floor);
        floor.create(25,325,'groundOne').setScale(1).refreshBody();
        this.placeNotesOnFloor(25, 325, floor);
        floor.create(550,100,'groundOne').setScale(1).refreshBody();
        this.placeNotesOnFloor(550, 100, floor);
        floor.create(550,250,'groundOne').setScale(1).refreshBody();
        this.placeNotesOnFloor(550, 250, floor);
        floor.create(550,400,'groundOne').setScale(1).refreshBody();
        this.placeNotesOnFloor(550, 400, floor);

        // Create the red obstacle
        this.obstacle = this.physics.add.sprite(285, 390, 'redObstacle').setScale(0.15,2);
        this.obstacle.setImmovable(true);

        const chosenAnimalKey = this.game.global.selectedCharacterKey;
        let player;
        switch (chosenAnimalKey) {
            case 'chick':
                player = this.add.sprite(30, 465, 'chick').setScale(0.25);
                player.flipX = true;
                break;
            case 'blackcat':
                player = this.add.sprite(30, 465, 'blackcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'lightcat':
                player = this.add.sprite(30, 465, 'lightcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'chipmunk':
                player = this.add.sprite(30, 465, 'chipmunk').setScale(0.25);
                player.flipX = true;
                break;
            case 'cow':
                player = this.add.sprite(30, 465, 'cow').setScale(0.25);
                player.flipX = true;
                break;
            case 'dog':
                player = this.add.sprite(30, 465, 'dog').setScale(0.25);
                player.flipX = true;
                break;
            case 'poodle':
                player = this.add.sprite(30, 465, 'poodle').setScale(0.25);
                player.flipX = true;
                break;
            case 'gorilla':
                player = this.add.sprite(30, 465, 'gorilla').setScale(0.25);
                player.flipX = true;
                break;
            case 'hedgehog':
                player = this.add.sprite(30, 465, 'hedgehog').setScale(0.25);
                player.flipX = true;
                break;
            case 'honeybee':
                player = this.add.sprite(30, 465, 'honeybee').setScale(0.25);
                player.flipX = true;
                break;
            case 'monkey':
                player = this.add.sprite(30, 465, 'monkey').setScale(0.25);
                player.flipX = true;
                break;
            case 'pig':
                player = this.add.sprite(30, 465, 'pig').setScale(0.25);
                player.flipX = true;
                break;
            case 'rabbit':
                player = this.add.sprite(30, 465, 'rabbit').setScale(0.25);
                player.flipX = true;
                break;
            case 'tiger':
                player = this.add.sprite(30, 465, 'tiger').setScale(0.25);
                player.flipX = true;
                break;
        }

        this.physics.world.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 800;
        player.body.collideWorldBounds = true;
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, floor);
        this.physics.add.collider(player, this.notes, this.collectNote, null, this); // Add collider for notes
        this.physics.add.collider(player, this.obstacle, this.handleObstacleCollision, null, this); // Add collider with the obstacle
        this.cursors = this.input.keyboard.createCursorKeys();

        // Create the score text
        this.scoreText = this.add.text(16, 16, 'Score: 0', { stroke: '#000000', strokeThickness: 1.9, fontSize: '32px', fill: '#000' });

        this.player = player;

        this.prizeSound = this.sound.add('prizeMusic'); // Create the audio object
        this.musicPlaying = false; // Flag to track if the music is currently playing
    }

    placeNotesOnFloor(x, y, floorGroup) {
        const floor = floorGroup.getChildren().find(child => child.x === x && child.y === y);
        if (floor) {
            const floorWidth = floor.displayWidth;
            const noteSpacing = floorWidth / 4; // Divide into 4 sections to place 3 notes

            const noteY = y - (floor.displayHeight / 2) - 20; // Position notes slightly above the floor

            this.notes.create(x + noteSpacing * 1 - (floorWidth / 2), noteY, 'threenotes').setScale(0.15).refreshBody(); // Musical notes
            this.notes.create(x + noteSpacing * 2 - (floorWidth / 2), noteY, 'onenote').setScale(0.15).refreshBody();   // Musical note
            this.notes.create(x + noteSpacing * 3 - (floorWidth / 2), noteY, 'threenotes').setScale(0.15).refreshBody(); // Musical notes

            this.notes.getChildren().forEach(note => {
                note.body.setAllowGravity(false); // Prevent notes from falling
                note.body.immovable = true; // Prevent notes from being pushed by the player
            });
        }
    }

    collectNote(player, note) {
        note.disableBody(true, true); // Remove the note from the physics world and hide it
        this.score += (10) ; // Increase the score
        this.scoreText.setText('Score: ' + this.score); // Update the score text
    }

    handleObstacleCollision(player, obstacle) {
        if (this.obstacleActive) {
            const answer = prompt("Solve for x: 4x + 3 = 19");
            if (answer !== null) {
                const x = parseInt(answer); // parse this string and return its integer representation and save into variable x
                if (!isNaN(x) && x === 4) { // !isNaN(x) evaluates to true if x is a valid number and false if x is NaN
                    obstacle.disableBody(true, true); // Disappear the obstacle
                    this.obstacleActive = false;
                } else {
                    alert("Sorry. The answer that you sent is wrong. Please try again.");
                }
            }
        }
    }

    update() {
        const player = this.player;
        if (!player) return;

        player.body.velocity.x = 0;

        // Handle left and right movement
        if (this.cursors.left.isDown) {
            player.body.velocity.x = -300;
            player.flipX = false;
        } else if (this.cursors.right.isDown) {
            player.body.velocity.x = 300;
            player.flipX = true;
        }

        // Handle jumping
        if (this.cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -450;
        }

        if (this.score === 100) {
            alert('You win! Here is 1 minute of pop music.')
            this.score = 0
            this.prizeSound.play();
            this.musicPlaying = true;

            // Set up an event to trigger after the music finishes
            this.prizeSound.once('complete', () => {
                alert("Click HOME & choose another level & have more fun with math & music!");

                // "Back to Home" button
                const homeButton = this.add.image(300, 560, 'home')
                .setScale(0.50)
                .setInteractive()
                .on("pointerdown", () => {
                    this.scene.start("HomeScene");
                });

            });
        }

    }
}

// Level 2 Scene
class Level2 extends Phaser.Scene {
    constructor() {
        super("Level2");
    }
    preload() {
        this.load.image("home", "assets/home.png"); // Load home button
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/platform2.jpg');
        this.load.image('onenote', './assets/musicalnotesone.png');
        this.load.image('threenotes', './assets/musicnoteonne.png');
    }
    create() {
        this.add.sprite(0,0,'sky').setScale(2);

        const platforms = this.physics.add.staticGroup();

        platforms.create(90,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(180,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(270,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(360,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(450,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(540,547,'ground').setScale(0.5,0.75).refreshBody();

        const chosenAnimalKey = this.game.global.selectedCharacterKey;
        let player;
        switch (chosenAnimalKey) {
            case 'chick':
                player = this.add.sprite(30, 465, 'chick').setScale(0.25);
                player.flipX = true;
                break;
            case 'blackcat':
                player = this.add.sprite(30, 465, 'blackcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'lightcat':
                player = this.add.sprite(30, 465, 'lightcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'chipmunk':
                player = this.add.sprite(30, 465, 'chipmunk').setScale(0.25);
                player.flipX = true;
                break;
            case 'cow':
                player = this.add.sprite(30, 465, 'cow').setScale(0.25);
                player.flipX = true;
                break;
            case 'dog':
                player = this.add.sprite(30, 465, 'dog').setScale(0.25);
                player.flipX = true;
                break;
            case 'poodle':
                player = this.add.sprite(30, 465, 'poodle').setScale(0.25);
                player.flipX = true;
                break;
            case 'gorilla':
                player = this.add.sprite(30, 465, 'gorilla').setScale(0.25);
                player.flipX = true;
                break;
            case 'hedgehog':
                player = this.add.sprite(30, 465, 'hedgehog').setScale(0.25);
                player.flipX = true;
                break;
            case 'honeybee':
                player = this.add.sprite(30, 465, 'honeybee').setScale(0.25);
                player.flipX = true;
                break;
            case 'monkey':
                player = this.add.sprite(30, 465, 'monkey').setScale(0.25);
                player.flipX = true;
                break;
            case 'pig':
                player = this.add.sprite(30, 465, 'pig').setScale(0.25);
                player.flipX = true;
                break;
            case 'rabbit':
                player = this.add.sprite(30, 465, 'rabbit').setScale(0.25);
                player.flipX = true;
                break;
            case 'tiger':
                player = this.add.sprite(30, 465, 'tiger').setScale(0.25);
                player.flipX = true;
                break;
        }

        this.physics.world.enable(player);

        player.body.bounce.y = 0.2;
        player.body.gravity.y = 800;
        player.body.collideWorldBounds = true;
        this.physics.add.collider(player, platforms);
        this.cursors = this.input.keyboard.createCursorKeys();

        // "Back to Home" button
        const homeButton = this.add.image(300, 560, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
            });

            this.player = player;
    }
    update() {
        const player = this.player;
        if (!player) return;

        player.body.velocity.x = 0;

        // Handle left and right movement
        if (this.cursors.left.isDown) {
            player.body.velocity.x = -300;
            player.flipX = false;
        } else if (this.cursors.right.isDown) {
            player.body.velocity.x = 300;
            player.flipX = true;
        }

        // Handle jumping
        if (this.cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -600;
        }
    }
}

// Level 3 Scene
class Level3 extends Phaser.Scene {
    constructor() {
        super("Level3");
    }
    preload() {
        this.load.image("home", "assets/home.png"); // Load home button
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/platform2.jpg');
        this.load.image('onenote', './assets/musicalnotesone.png');
        this.load.image('threenotes', './assets/musicnoteonne.png');
    }
    create() {
        this.add.sprite(0,0,'sky').setScale(2);

        const platforms = this.physics.add.staticGroup();

        platforms.create(90,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(180,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(270,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(360,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(450,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(540,547,'ground').setScale(0.5,0.75).refreshBody();

        const chosenAnimalKey = this.game.global.selectedCharacterKey;
        let player;
        switch (chosenAnimalKey) {
            case 'chick':
                player = this.add.sprite(30, 465, 'chick').setScale(0.25);
                player.flipX = true;
                break;
            case 'blackcat':
                player = this.add.sprite(30, 465, 'blackcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'lightcat':
                player = this.add.sprite(30, 465, 'lightcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'chipmunk':
                player = this.add.sprite(30, 465, 'chipmunk').setScale(0.25);
                player.flipX = true;
                break;
            case 'cow':
                player = this.add.sprite(30, 465, 'cow').setScale(0.25);
                player.flipX = true;
                break;
            case 'dog':
                player = this.add.sprite(30, 465, 'dog').setScale(0.25);
                player.flipX = true;
                break;
            case 'poodle':
                player = this.add.sprite(30, 465, 'poodle').setScale(0.25);
                player.flipX = true;
                break;
            case 'gorilla':
                player = this.add.sprite(30, 465, 'gorilla').setScale(0.25);
                player.flipX = true;
                break;
            case 'hedgehog':
                player = this.add.sprite(30, 465, 'hedgehog').setScale(0.25);
                player.flipX = true;
                break;
            case 'honeybee':
                player = this.add.sprite(30, 465, 'honeybee').setScale(0.25);
                player.flipX = true;
                break;
            case 'monkey':
                player = this.add.sprite(30, 465, 'monkey').setScale(0.25);
                player.flipX = true;
                break;
            case 'pig':
                player = this.add.sprite(30, 465, 'pig').setScale(0.25);
                player.flipX = true;
                break;
            case 'rabbit':
                player = this.add.sprite(30, 465, 'rabbit').setScale(0.25);
                player.flipX = true;
                break;
            case 'tiger':
                player = this.add.sprite(30, 465, 'tiger').setScale(0.25);
                player.flipX = true;
                break;
        }

        this.physics.world.enable(player);

        player.body.bounce.y = 0.2;
        player.body.gravity.y = 800;
        player.body.collideWorldBounds = true;
        this.physics.add.collider(player, platforms);
        this.cursors = this.input.keyboard.createCursorKeys();

        // "Back to Home" button
        const homeButton = this.add.image(300, 560, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
            });

        this.player = player;

    }
    update() {
        const player = this.player;
        if (!player) return;

        player.body.velocity.x = 0;

        // Handle left and right movement
        if (this.cursors.left.isDown) {
            player.body.velocity.x = -300;
            player.flipX = false;
        } else if (this.cursors.right.isDown) {
            player.body.velocity.x = 300;
            player.flipX = true;
        }

        // Handle jumping
        if (this.cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -600;
        }
    }
}

// Level 4 Scene
class Level4 extends Phaser.Scene {
    constructor() {
        super("Level4");
    }
    preload() {
        this.load.image("home", "assets/home.png"); // Load home button
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/platform2.jpg');
        this.load.image('onenote', './assets/musicalnotesone.png');
        this.load.image('threenotes', './assets/musicnoteonne.png');
    }
    create() {
        this.add.sprite(0,0,'sky').setScale(2);

        const platforms = this.physics.add.staticGroup();

        platforms.create(90,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(180,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(270,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(360,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(450,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(540,547,'ground').setScale(0.5,0.75).refreshBody();

        const chosenAnimalKey = this.game.global.selectedCharacterKey;
        let player;
        switch (chosenAnimalKey) {
            case 'chick':
                player = this.add.sprite(30, 465, 'chick').setScale(0.25);
                player.flipX = true;
                break;
            case 'blackcat':
                player = this.add.sprite(30, 465, 'blackcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'lightcat':
                player = this.add.sprite(30, 465, 'lightcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'chipmunk':
                player = this.add.sprite(30, 465, 'chipmunk').setScale(0.25);
                player.flipX = true;
                break;
            case 'cow':
                player = this.add.sprite(30, 465, 'cow').setScale(0.25);
                player.flipX = true;
                break;
            case 'dog':
                player = this.add.sprite(30, 465, 'dog').setScale(0.25);
                player.flipX = true;
                break;
            case 'poodle':
                player = this.add.sprite(30, 465, 'poodle').setScale(0.25);
                player.flipX = true;
                break;
            case 'gorilla':
                player = this.add.sprite(30, 465, 'gorilla').setScale(0.25);
                player.flipX = true;
                break;
            case 'hedgehog':
                player = this.add.sprite(30, 465, 'hedgehog').setScale(0.25);
                player.flipX = true;
                break;
            case 'honeybee':
                player = this.add.sprite(30, 465, 'honeybee').setScale(0.25);
                player.flipX = true;
                break;
            case 'monkey':
                player = this.add.sprite(30, 465, 'monkey').setScale(0.25);
                player.flipX = true;
                break;
            case 'pig':
                player = this.add.sprite(30, 465, 'pig').setScale(0.25);
                player.flipX = true;
                break;
            case 'rabbit':
                player = this.add.sprite(30, 465, 'rabbit').setScale(0.25);
                player.flipX = true;
                break;
            case 'tiger':
                player = this.add.sprite(30, 465, 'tiger').setScale(0.25);
                player.flipX = true;
                break;
        }

        this.physics.world.enable(player);

        player.body.bounce.y = 0.2;
        player.body.gravity.y = 800;
        player.body.collideWorldBounds = true;
        this.physics.add.collider(player, platforms);
        this.cursors = this.input.keyboard.createCursorKeys();

        // "Back to Home" button
        const homeButton = this.add.image(300, 560, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
            });

        this.player = player;

    }
    update() {
        const player = this.player;
        if (!player) return;

        player.body.velocity.x = 0;

        // Handle left and right movement
        if (this.cursors.left.isDown) {
            player.body.velocity.x = -300;
            player.flipX = false;
        } else if (this.cursors.right.isDown) {
            player.body.velocity.x = 300;
            player.flipX = true;
        }

        // Handle jumping
        if (this.cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -600;
        }
    }
}

// Level 5 Scene
class Level5 extends Phaser.Scene {
    constructor() {
        super("Level5");
    }
    preload() {
        this.load.image("home", "assets/home.png"); // Load home button
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/platform2.jpg');
        this.load.image('onenote', './assets/musicalnotesone.png');
        this.load.image('threenotes', './assets/musicnoteonne.png');
    }
    create() {
        this.add.sprite(0,0,'sky').setScale(2);

        const platforms = this.physics.add.staticGroup();

        platforms.create(90,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(180,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(270,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(360,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(450,547,'ground').setScale(0.5,0.75).refreshBody();
        platforms.create(540,547,'ground').setScale(0.5,0.75).refreshBody();

        const chosenAnimalKey = this.game.global.selectedCharacterKey;
        let player;
        switch (chosenAnimalKey) {
            case 'chick':
                player = this.add.sprite(30, 465, 'chick').setScale(0.25);
                player.flipX = true;
                break;
            case 'blackcat':
                player = this.add.sprite(30, 465, 'blackcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'lightcat':
                player = this.add.sprite(30, 465, 'lightcat').setScale(0.25);
                player.flipX = true;
                break;
            case 'chipmunk':
                player = this.add.sprite(30, 465, 'chipmunk').setScale(0.25);
                player.flipX = true;
                break;
            case 'cow':
                player = this.add.sprite(30, 465, 'cow').setScale(0.25);
                player.flipX = true;
                break;
            case 'dog':
                player = this.add.sprite(30, 465, 'dog').setScale(0.25);
                player.flipX = true;
                break;
            case 'poodle':
                player = this.add.sprite(30, 465, 'poodle').setScale(0.25);
                player.flipX = true;
                break;
            case 'gorilla':
                player = this.add.sprite(30, 465, 'gorilla').setScale(0.25);
                player.flipX = true;
                break;
            case 'hedgehog':
                player = this.add.sprite(30, 465, 'hedgehog').setScale(0.25);
                player.flipX = true;
                break;
            case 'honeybee':
                player = this.add.sprite(30, 465, 'honeybee').setScale(0.25);
                player.flipX = true;
                break;
            case 'monkey':
                player = this.add.sprite(30, 465, 'monkey').setScale(0.25);
                player.flipX = true;
                break;
            case 'pig':
                player = this.add.sprite(30, 465, 'pig').setScale(0.25);
                player.flipX = true;
                break;
            case 'rabbit':
                player = this.add.sprite(30, 465, 'rabbit').setScale(0.25);
                player.flipX = true;
                break;
            case 'tiger':
                player = this.add.sprite(30, 465, 'tiger').setScale(0.25);
                player.flipX = true;
                break;
        }

        this.physics.world.enable(player);

        player.body.bounce.y = 0.2;
        player.body.gravity.y = 800;
        player.body.collideWorldBounds = true;
        this.physics.add.collider(player, platforms);
        this.cursors = this.input.keyboard.createCursorKeys();

        // "Back to Home" button
        const homeButton = this.add.image(300, 560, 'home')
        .setScale(0.50)
            .setInteractive()
            .on("pointerdown", () => {
                this.scene.start("HomeScene");
            });

        this.player = player;

    }
    update() {
        const player = this.player;
        if (!player) return;

        player.body.velocity.x = 0;

        // Handle left and right movement
        if (this.cursors.left.isDown) {
            player.body.velocity.x = -300;
            player.flipX = false;
        } else if (this.cursors.right.isDown) {
            player.body.velocity.x = 300;
            player.flipX = true;
        }

        // Handle jumping
        if (this.cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -600;
        }
    }
}

// Setting Scene
class SettingScene extends Phaser.Scene {
    constructor() {
        super("SettingScene");
    }
    preload() {
        this.load.image("levelbg", "assets/peachpuffbg.png"); // Load home background
        this.load.image("home", "assets/home.png"); // Load home button
        this.load.image("mspeaker", "assets/mspeaker.png");
        this.load.image("lspeaker", "assets/lspeaker.png");
        this.load.image("mdspeaker", "assets/mdspeaker.png");
        this.load.image("hspeaker", "assets/hspeaker.png");
        this.load.image("up", "assets/up.png");
    }
    create() {
        this.add.image(612, 598, "levelbg").setScale(1); // Set background image
        this.add.image(100, 200, "mspeaker").setScale(0.5);
        this.add.image(100, 400, "lspeaker").setScale(0.5);
        this.add.image(400, 185, "mdspeaker").setScale(0.5);
        this.add.image(400, 400, "hspeaker").setScale(0.5);
        this.add.image(500, 525, "up").setScale(0.35);
        this.add.image(100, 525, "up").setScale(0.35);

        this.add.text(250, 25, "Setting", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "40px", fill: "black" });
        this.add.text(140, 140, "Mute", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "35px", fill: "black" });
        this.add.text(140, 180, "Sound", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "35px", fill: "black" });
        this.add.text(450, 140, "Medium", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "35px", fill: "black" });
        this.add.text(450, 180, "Sound", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "35px", fill: "black" });
        this.add.text(140, 340, "Low", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "35px", fill: "black" });
        this.add.text(140, 380, "Sound", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "35px", fill: "black" });
        this.add.text(470, 360, "High", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "35px", fill: "black" });
        this.add.text(470, 400, "Sound", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "35px", fill: "black" });
        this.add.text(160, 480, "Click the speakers to", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "30px", fill: "black" });
        this.add.text(170, 525, "change the volume", {stroke: '#000000', strokeThickness: 1.9, fontFamily: 'Nunito', fontSize: "30px", fill: "black" });

        const homeButton = this.add.image(315, 105, 'home')
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
    scene: [StartScene, CreditsScene, CharacterScene, InstructionScene, HomeScene, Level1, Level2, Level3, Level4, Level5, SettingScene],
    physics: { // Add this physics configuration
        default: 'arcade', // Use the Arcade Physics system
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
game.global = { selectedCharacterKey: null };
