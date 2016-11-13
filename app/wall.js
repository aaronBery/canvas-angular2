"use strict";
var ibo_1 = require("./ibo");
var wall_item_1 = require("./wall-item");
var Wall = (function () {
    function Wall(id, name, wallItems) {
        if (id === void 0) { id = 1; }
        if (name === void 0) { name = ''; }
        if (wallItems === void 0) { wallItems = new ibo_1.Ibo([]); }
        this.id = id;
        this.name = name;
        this.items = wallItems;
    }
    Wall.prototype.getNewItemId = function () {
        return this.items.resultCount();
    };
    Wall.prototype.duplicateItem = function (itemId) {
        var newItem;
        for (var _i = 0, _a = this.items.toArray(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === itemId) {
                newItem = new wall_item_1.WallItem(this.getNewItemId(), item.name, item.socialValueSourceUrl, item.imageUrl);
            }
        }
        return newItem;
    };
    return Wall;
}());
exports.Wall = Wall;
//# sourceMappingURL=wall.js.map