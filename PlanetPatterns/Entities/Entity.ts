class Entity {
    private x: number;
    private y: number;
    private gfx: PIXI.Graphics;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public get X() {
        return this.x;
    }

    public get Y() {
        return this.y;
    }

    public get Gfx() {
        return this.gfx;
    }

    public set Gfx(gfx: PIXI.Graphics) {
        this.gfx = gfx;
    }
} 