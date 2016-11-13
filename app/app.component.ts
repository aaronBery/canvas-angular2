import { Component } from '@angular/core';
import { WallItem } from './wall-item';
import { Wall } from './wall';
import { Ibo } from './ibo';

let item1 = new WallItem (
0,
'Kia Sportage',
'http://www.telegraph.co.uk/cars/land-rover/range-rover-sport-review/',
'http://www.kia.com/us/k3/content/media/mediabin/vehicle/trims/CMS/vehicles/sportage/2017/cgi/lx/exterior/9p_black-cherry/source/17Kia_Sportage_LX_9P_BlackCherry_LgtsOn_1302_001--trim-768x419.png'
)
let item2 = new WallItem (
1,
'Range Rover Evoque',
'http://www.topgear.com/car-reviews/land-rover/range-rover-evoque',
'http://www.topgear.com/sites/default/files/styles/fit_1960x1102/public/cars-car/carousel/2016/07/evoquehseluxurydynamic001.jpg?itok=5S_UYuf4'
)

let wall = new Wall(1, 'SUV Reviews', new Ibo([item1, item2]));

/*let wall = wallService.getWall(1);*/

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
