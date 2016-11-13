export class WallItem {
    id: number;
    name: string;
    socialValueSourceUrl: string;
    imageUrl: string;

    constructor(
        id: number = 1,
        name: string = '',
        socialValueSourceUrl: string = '',
        imageUrl: string = '') {
        this.id = id;
        this.name = name;
        this.socialValueSourceUrl = socialValueSourceUrl;
        this.imageUrl = imageUrl;
    }
}