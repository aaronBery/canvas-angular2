import { Ibo } from "./ibo";
import { WallItem } from "./wall-item";

export class Wall {
    id: number;
    name: string;
    items: Ibo<WallItem>;

    constructor(
        id: number = 1,
        name: string = '',
        wallItems: Ibo<WallItem> = new Ibo([])) {
        this.id = id;
        this.name = name;
        this.items = wallItems;
    }

    getNewItemId() {
        return this.items.resultCount();    
    }
    duplicateItem(itemId: number): WallItem {
        let newItem: WallItem;
        for(let item of this.items.toArray()) {
            if(item.id === itemId) {      
                newItem = new WallItem(
                    this.getNewItemId(),
                    item.name,
                    item.socialValueSourceUrl,
                    item.imageUrl
                );
            }     
        }
        return newItem;
    }
}