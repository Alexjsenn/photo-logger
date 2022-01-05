
export class Photo {
    rollID:number;
    photoNum:number;
    aperture:number;
    focalLength:number;
    shutterSpeed:number;
    lightMeter:number;
    lensId:number;
    description:string;
    

    constructor(rollID:number, photoNum:number, aperture:number, focalLength:number, shutterSpeed:number, 
                    lightMeter:number, lensId:number) {
        this.rollID = rollID;
        this.photoNum = photoNum;
        this.aperture = aperture;
        this.focalLength = focalLength;
        this.shutterSpeed = shutterSpeed;
        this.lightMeter = lightMeter;
        this.lensId = lensId;
        this.description = '';
    }
}