"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var wall_item_1 = require('./wall-item');
var wall_1 = require('./wall');
var ibo_1 = require('./ibo');
var item1 = new wall_item_1.WallItem(0, 'Kia Sportage', '#', '../assets/images/kia.jpg');
var item2 = new wall_item_1.WallItem(1, 'Lamborghini', '#', '../assets/images/lambo.jpeg');
var wall = new wall_1.Wall(1, 'SUV Reviews', new ibo_1.Ibo([item1, item2]));
var newItem = new wall_item_1.WallItem(wall.getNewItemId());
var isEditItemMode = false;
var editItemIndex = -1;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'SUV Reviews';
        this.items = wall.items;
        this.newItem = newItem;
        this.isEditItemMode = isEditItemMode;
        this.editItemIndex = editItemIndex;
        this.tempEditItem = new wall_item_1.WallItem(-1);
    }
    AppComponent.prototype.onSubmit = function () {
        wall.items.addItem(newItem);
        this.newItem = new wall_item_1.WallItem(wall.getNewItemId());
    };
    AppComponent.prototype.updateItem = function (item) {
        wall.items.setItem(this.editItemIndex, item);
        this.isEditItemMode = false;
    };
    AppComponent.prototype.removeItem = function (index) {
        wall.items.removeItem(index);
    };
    AppComponent.prototype.duplicateItem = function (index) {
        wall.items.addItem(wall.duplicateItem(index));
        console.log(wall.items);
    };
    AppComponent.prototype.editItem = function (index) {
        console.log(this.editItemIndex);
        if (this.isEditItemMode) {
            this.isEditItemMode = false;
            this.tempEditItem = newItem;
        }
        else {
            this.isEditItemMode = true;
            this.editItemIndex = index;
            this.tempEditItem = wall.items.getItem(index);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/templates/canvas.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map