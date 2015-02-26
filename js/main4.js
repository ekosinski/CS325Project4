window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        //game.load.image( 'b', 'assets/phaser.png' );
        game.load.image( 'background', 'assets/green.png' );
        //game.load.audio( 'bodyDry', 'assets/01 -Before my body is dry.mp3');
        //game.load.audio('mario', 'assets/Mario_Slide.wav');
        game.load.image('girrafeHead','assets/girrafe_head.png');
        game.load.image('girrafeBody','assets/girrafe_body.jpg');
        game.load.image('girrafeLeftLeg','assets/girrafe_left_leg.png');
        game.load.image('girrafeRightLeg','assets/girrafe_right.png');
        game.load.image('gorillaHead','assets/gorilla_head.jpg');
        game.load.image('gorillaLeftArm','assets/gorilla_left_arm.jpg');
        game.load.image('gorillaRightArm','assets/gorilla_right_arm.jpg');
        game.load.image('gorillaLeftLeg','assets/gorilla_left_leg.jpg');
        game.load.image('gorillaRightLeg','assets/gorilla_right_leg.jpg');
        game.load.image('gorillaBody','assets/gorilla_body.jpg');
        game.load.image('humanHead','assets/human_head.jpg');
        game.load.image('humanRightArm','assets/right_arm.jpg');
        game.load.image('humanLeftArm','assets/left_arm.jpg');
        game.load.image('humanRightLeg','assets/right_leg');
        game.load.image('humanLeftLeg','assets/left_leg');
        game.load.image('catHead','assets/cat_head');
    }
    
    var background1;
    var background2;

    var girrafeHead;
    var girrafeBody;
    var girrafeLeftLeg;
    var girrafeRightLeg;

    var gorillaHead;
    var gorillaLeftArm;
    var gorillaRightArm;
    var gorillaBody;
    var gorillaLeftLeg;
    var gorillaRightLeg;

    var humanHead;
    var humanLeftArm;
    var humanRightArm;
    var humanLeftLeg;
    var humanRightLeg;

    var catHead;

    var counter = 0;
    
    function create() {

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        background = game.add.tileSprite(0,0,800,600,'background');
        /*mario = game.add.audio('mario');
        mario.loop = true;
        mario.play();*/
        
    }

    function update() {
		

        /*if (counter == 0) {
                var Q = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q1');
                var A1 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A11');
                var A2 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A12');
                var A3 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A13');
                A1.inputEnabled = true;
                A2.inputEnabled = true;
                A3.inputEnabled = true;
                A1.events.onInputDown.add(listenerA11, this);
                A2.events.onInputDown.add(listenerA12, this);
                A3.events.onInputDown.add(listenerA13, this);
            }*/
      


  
};
