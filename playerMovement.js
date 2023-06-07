import InputManager from "./inputManager.js";
import { ObjectForce } from "./objectForce.js";

export class PlayerMovement extends ObjectForce {

    constructor(){
        super();
        InputManager.init();
    }

    update(deltaTime) {
        super.update(deltaTime);

        if (InputManager.isKeyPressed("D")) {
            this.force.x = 1;
        } else if (InputManager.isKeyPressed("A")) {
            this.force.x = -1;
        } else {
            this.force.x = 0;
        }

        if (InputManager.isKeyPressed("W")) {
            this.force.y = -1;
        } else if (InputManager.isKeyPressed("S")) {
            this.force.y = 1;
        } else {
            this.force.y = 0;
        }
    }
}