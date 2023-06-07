export class ObjectForce {

    constructor() {     
        this.force = {x: 0, y: 0};
        this.obj = null;
        this.velocity = null;
    }

    update(deltaTime) {
        this.force = this.normalizeVector(this.force);

        this.obj.x += this.force.x * this.velocity * deltaTime;
        this.obj.y += this.force.y * this.velocity * deltaTime;
    }

    // set obj
    getTarget(obj, velocity) {
        this.obj = obj;
        this.velocity = velocity;
    }

    normalizeVector(vector) {
        const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        
        if(length === 0) return vector;

        const normalizedVector = {
            x: vector.x / length,
            y: vector.y / length,
        };
        return normalizedVector;
    }
}