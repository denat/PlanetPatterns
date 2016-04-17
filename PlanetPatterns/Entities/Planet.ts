class Planet extends Entity {

    private diameter: number;
    private velocity: number;
    private distanceFromSun: number;
    private degrees: number;

    constructor(diameter:number, velocity: number, distanceFromSun: number) {
        super(0, 0);

        this.degrees = 0;
        this.diameter = diameter;
        this.velocity = velocity;
        this.distanceFromSun = distanceFromSun;
    }

    public get Diameter() {
        return this.diameter;
    }

    public get Distance() {
        return this.distanceFromSun;
    }

    public get Degrees() {
        return this.degrees;
    }

    public set Degrees(degrees: number) {
        this.degrees = degrees;
    }

    public get Velocity() {
        return this.velocity;
    }
}