import { WallItem } from './wall-item';

export class Ibo<T> {
    iterator: number;
    items: Array<T>;

    constructor(items: Array<T>) {
        this.items = items;
    }
    resultCount() {
        return this.items.length;
    }
    get(field: string) {
        return this.items[this.iterator][field];
    }
    getItem(index: number) {
        return this.items[index];
    }
    next() {
        if((this.iterator + 1) >= this.resultCount()) {
            this.iterator = 0;
        }else this.iterator++;
    }
    previous() {
        if((this.iterator - 1) < 0) {
            this.iterator = this.resultCount();
        }else this.iterator--;
    }
    addItem(item: any) {
        this.items.push(item);
    }
    toArray() {
        return this.items;
    }
    removeItem(index: number) {
        this.items.splice(index, 1);
    }
    setItem(index: number, newItem: any) {
        this.items[index] = newItem;
    }
 }