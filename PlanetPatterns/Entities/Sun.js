var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sun = (function (_super) {
    __extends(Sun, _super);
    function Sun(x, y, diameter) {
        _super.call(this, x, y);
        this.diameter = diameter;
        this.planets = [];
    }
    Sun.prototype.AddPlanet = function (planet) {
        this.planets.push(planet);
    };
    Object.defineProperty(Sun.prototype, "Diameter", {
        get: function () {
            return this.diameter;
        },
        enumerable: true,
        configurable: true
    });
    return Sun;
})(Entity);
//# sourceMappingURL=Sun.js.map