class Sun extends Entity {

    private diameter: number;
    private planets: Planet[];

    constructor(x: number, y: number, diameter: number) {
        super(x, y);

        this.diameter = diameter;
        this.planets = [];
    }

    public AddPlanet(planet: Planet) {
        this.planets.push(planet);
    }

    public get Diameter() {
        return this.diameter;
    }
} 