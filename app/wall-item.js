"use strict";
var WallItem = (function () {
    function WallItem(id, name, socialValueSourceUrl, imageUrl) {
        if (id === void 0) { id = 1; }
        if (name === void 0) { name = ''; }
        if (socialValueSourceUrl === void 0) { socialValueSourceUrl = ''; }
        if (imageUrl === void 0) { imageUrl = ''; }
        this.id = id;
        this.name = name;
        this.socialValueSourceUrl = socialValueSourceUrl;
        this.imageUrl = imageUrl;
    }
    return WallItem;
}());
exports.WallItem = WallItem;
//# sourceMappingURL=wall-item.js.map