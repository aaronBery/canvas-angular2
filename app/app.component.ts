import { Component } from '@angular/core';
import { WallItem } from './wall-item';
import { Wall } from './wall';
import { Ibo } from './ibo';

let item1 = new WallItem (
0,
'Kia Sportage',
'#',
'../assets/images/kia.jpg'
)
let item2 = new WallItem (
1,
'Lamborghini',
'#',
'../assets/images/lambo.jpeg'
)

let wall = new Wall(1, 'SUV Reviews', new Ibo([item1, item2]));

let newItem = new WallItem(wall.getNewItemId());
let isEditItemMode: boolean = false;
let editItemIndex: number = -1;

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/canvas.html'
})

export class AppComponent {
  title: string = 'SUV Reviews';
  items: Ibo<WallItem> = wall.items;
  newItem: WallItem = newItem;
  isEditItemMode: boolean = isEditItemMode;
  editItemIndex: number = editItemIndex;
  tempEditItem: WallItem = new WallItem(-1);
  onSubmit() {
    wall.items.addItem(newItem);
    this.newItem = new WallItem(wall.getNewItemId());
  }
  updateItem(item: WallItem) {
    wall.items.setItem(this.editItemIndex, item);
    this.isEditItemMode = false;
  }
  removeItem(index: number) {
    wall.items.removeItem(index);
  }
  duplicateItem(index: number) {
    wall.items.addItem(wall.duplicateItem(index));
    console.log(wall.items);
  }
  editItem(index: number) {
    console.log(this.editItemIndex);
    if(this.isEditItemMode) {
      this.isEditItemMode = false;
      this.tempEditItem = newItem;
    } else {
      this.isEditItemMode = true;
      this.editItemIndex = index;
      this.tempEditItem = wall.items.getItem(index);
    }
  }
}
