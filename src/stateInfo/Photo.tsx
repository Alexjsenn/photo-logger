
export class Photo {
    rollID:number;
    photoNum:number;
    aperture:number;
    focalLength:number;
    shutterSpeed:number;
    lightMeter:number;
    lensId:number;
    description:string;
    

    constructor(rollID:number, photoNum:number) {
        this.rollID = rollID;
        this.photoNum = photoNum;
        this.aperture = -1;
        this.focalLength = -1;
        this.shutterSpeed = -1;
        this.lightMeter = -1;
        this.lensId = -1;
        this.description = '-';
    }
}