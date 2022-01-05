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
        this.photos = [];
        this.full = false;
    }
}