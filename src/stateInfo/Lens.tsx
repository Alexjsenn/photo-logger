export class Lens {
    id:number = -1;
    name:string = '';
    apertureMin:number = -1;
    apertureMax:number = -1;
    focalMin:number = -1;
    focalMax:number = -1;

    public constructor(id?:number, name?:string, apertureMin?:number, apertureMax?:number, 
                    focalMin?:number, focalMax?:number) {
        if (id) this.id = id;
        if (name) this.name = name;
        if (apertureMin) this.apertureMin = apertureMin;
        if (apertureMax) this.apertureMax = apertureMax;
        if (focalMin) this.focalMin = focalMin;
        if (focalMax) this.focalMax = focalMax;
    }

    static fromJSON(obj: Object) :Lens {
        var o = Object.assign(new Lens(), obj);
        return o;
    }
}