const InputManager = {
    keys: {},
    mouse: {
        x: 0,
        y: 0,
        isClicked: false,
    },

    init() {
        window.addEventListener("keydown", (e) => this.handleKeyDown(e));
        window.addEventListener("keyup", (e) => this.handleKeyUp(e));
    },

    handleKeyDown(e){
        this.keys[e.keyCode] = true;
    },
    
    handleKeyUp(e){
        this.keys[e.keyCode] = false;
    },

    isKeyPressed(key) {
        return !!this.keys[key.charCodeAt()];
    }
};

export default InputManager;
