var Entity = (function () {
    function Entity(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Entity.prototype, "X", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "Y", {
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "Gfx", {
        get: function () {
            return this.gfx;
        },
        set: function (gfx) {
            this.gfx = gfx;
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
})();
//# sourceMappingURL=Entity.js.map