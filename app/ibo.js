"use strict";
var Ibo = (function () {
    function Ibo(items) {
        this.items = items;
    }
    Ibo.prototype.resultCount = function () {
        return this.items.length;
    };
    Ibo.prototype.get = function (field) {
        return this.items[this.iterator][field];
    };
    Ibo.prototype.getItem = function (index) {
        return this.items[index];
    };
    Ibo.prototype.next = function () {
        if ((this.iterator + 1) >= this.resultCount()) {
            this.iterator = 0;
        }
        else
            this.iterator++;
    };
    Ibo.prototype.previous = function () {
        if ((this.iterator - 1) < 0) {
            this.iterator = this.resultCount();
        }
        else
            this.iterator--;
    };
    Ibo.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Ibo.prototype.toArray = function () {
        return this.items;
    };
    Ibo.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    Ibo.prototype.setItem = function (index, newItem) {
        this.items[index] = newItem;
    };
    return Ibo;
}());
exports.Ibo = Ibo;
//# sourceMappingURL=ibo.js.map