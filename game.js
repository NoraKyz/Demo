import { Application, Container, Texture, AnimatedSprite, Ticker} from "pixi.js";
import { PlayerMovement } from "./playerMovement";

export class Game {
    static init() {
        const app = new Application({
            resolution: 1,
            backgroundColor: 0x6495ed,
            width: 720,
            height: 1280,
        });
        document.body.appendChild(app.view);

        var sence = new Scene(app.screen.width / 4, app.screen.height);
        app.stage.addChild(sence);
    }
}

export class Scene extends Container {
    constructor(screenWidth = 0, screenHeight = 0) {
        super();

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
        this.animatedClampy.x = 20;
        this.animatedClampy.y = 20;
        this.animatedClampy.animationSpeed = 0.1;

        this.animatedClampy.play();
        this.addChild(this.animatedClampy);

        this.playerMovement = new PlayerMovement();
        this.playerMovement.getTarget(this.animatedClampy, 1)

        Ticker.shared.add(this.update, this);
    }

    update() {
        this.playerMovement.update(1);
    }
}

window.onload = function () {
    Game.init();
};