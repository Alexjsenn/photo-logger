import { Photo } from './Photo'
 
export class Roll {
    id:number;
    name:string;
    iso:number;
    size:number;
    photos:Photo[];
    full:boolean;

    constructor(id:number, name:string, iso:number, size:number) {
        this.id = id;
        this.name = name;
        this.iso = iso;
        this.size = size;
        this.full = false;
        let photoList = [];
        for (let i = 0; i<size; i++) {
            photoList.push(new Photo(id, i));
        }
        this.photos = [];
    }
}