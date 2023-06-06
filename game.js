import { Application, Container, Graphics, Sprite, TextStyle, Text, BitmapText, BitmapFont, BlurFilter, Texture, SCALE_MODES, AnimatedSprite, Ticker, FederatedPointerEvent } from "pixi.js";

export class Game {
    static init() {
        const app = new Application({
            resolution: window.devicePixelRatio || 1,
            backgroundColor: 0x6495ed,
            width: 720,
            height: 1280,
        });
        document.body.appendChild(app.view);

        var sence = new Scene(150, app.screenHeight);
        sence.update(1)
        app.stage.addChild(sence);

        function setupKeyboardEvents() {
            window.addEventListener("keydown", onKeyDown);
            window.addEventListener("keyup", onKeyUp);
        }

        function onKeyDown(e) {
            if (e.keyCode === 65) {
                console.log("down");
            }
        }

        function onKeyUp(e) {
            if (e.keyCode === 65) {
                console.log("up");
            }
        }

        setupKeyboardEvents();
    }
}

export class Scene extends Container {
    constructor(screenWidth = 0, screenHeight = 0) {
        super();

        this.animatedClampy;
        this.clampyVelocity = 1;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;

        var clampyFrames = [
            "player-idle-1.png",
            "player-idle-2.png",
            "player-idle-3.png",
            "player-idle-4.png"
        ];

        this.animatedClampy = new AnimatedSprite(clampyFrames.map((stringy) => Texture.from("assets/images/" + stringy)));

        this.animatedClampy.anchor.set(0.5);
        this.animatedClampy.x = 0;
        this.animatedClampy.y = 20;
        this.animatedClampy.animationSpeed = 0.1;

        this.animatedClampy.play();
        this.addChild(this.animatedClampy);

        Ticker.shared.add(this.update, this);

        this.animatedClampy.on("pointertap", this.onClicky, this);
        this.animatedClampy.interactive = true;
    }

    update(deltaTime) {
        this.animatedClampy.x = this.animatedClampy.x + this.clampyVelocity * deltaTime;

        if (this.animatedClampy.x > this.screenWidth) {
            this.animatedClampy.x = 0;
        }
    }

    onClicky(e) {
        console.log("You interacted with Clampy!")
        console.log("The data of your interaction is super interesting", e)
    }
}

window.onload = function () {
    Game.init();
};