var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Planet = (function (_super) {
    __extends(Planet, _super);
    function Planet(diameter, velocity, distanceFromSun) {
        _super.call(this, 0, 0);
        this.degrees = 0;
        this.diameter = diameter;
        this.velocity = velocity;
        this.distanceFromSun = distanceFromSun;
    }
    Object.defineProperty(Planet.prototype, "Diameter", {
        get: function () {
            return this.diameter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Planet.prototype, "Distance", {
        get: function () {
            return this.distanceFromSun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Planet.prototype, "Degrees", {
        get: function () {
            return this.degrees;
        },
        set: function (degrees) {
            this.degrees = degrees;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Planet.prototype, "Velocity", {
        get: function () {
            return this.velocity;
        },
        enumerable: true,
        configurable: true
    });
    return Planet;
})(Entity);
//# sourceMappingURL=Planet.js.map