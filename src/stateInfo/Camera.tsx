import { Lens } from './Lens'

export class Camera {
    name:string = '';
    shutterSpeedMin:number = 0;
    shutterSpeedMax:number = 0;
    lensList:Lens[] = [];
    currentLensId:number = 0;

    constructor(name?:string, shutterSpeedMin?:number, 
                    shutterSpeedMax?:number, lensList?:Lens[]) {
        if(name) this.name = name;
        if (shutterSpeedMin) this.shutterSpeedMin = shutterSpeedMin;
        if (shutterSpeedMax)this.shutterSpeedMax = shutterSpeedMax;
        if (lensList) this.lensList = lensList;
        //if (lensList && lensList != undefined) this.currentLensId = lensList[0].id;
    }

    static fromJSON(obj: Object): Camera {
        var o = Object.assign(new Camera(), obj);
        var list = o['lensList'];
        var tmp = [];
        for (var lens in list) {
            tmp.push(Lens.fromJSON(lens));
        }
        o.lensList = tmp;
        return o;
    }
}