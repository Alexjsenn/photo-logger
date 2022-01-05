import { Camera } from './Camera'
import { Roll } from './Roll'
import { Lens } from './Lens'
import cameraJson from '../config/camera.json'

export class globalState {
    camera:Camera;
    rollList:Roll[];
    currentRoll:number;
    currentPhoto:number;

    contructor() {}
    constructor(camera?:Camera) {
        if (camera) this.camera = camera
        else this.camera = new Camera('unkown', 0, 0, []);
        this.rollList = [];
        this.currentRoll = -1;
        this.currentPhoto = -1;
    }

    static fromJSON(obj: Object): globalState {
        var o = Object.assign(new globalState(), obj);
        o.camera = Camera.fromJSON(o['camera']);
        return o;
    }

    newRoll(name:string, iso:number, size:number) {
        let id = 0;
        if (this.rollList.length != 0) {
            id = this.rollList[this.rollList.length - 1].id + 1;
        }
        let roll = new Roll(id, name, iso, size);
        this.rollList.push(roll);
        setGlobalState(this);
    }
}

export function initGlobalState() {
    var cameraInfo = cameraJson.camera;
    var lensList:Lens[] = [];
    for(let i = 0; i < cameraInfo.lensList.length; i++) {
        var lensInfo = cameraInfo.lensList[i];
        lensList.push(
            new Lens(
                i, 
                lensInfo.name,
                lensInfo.apertureMin,
                lensInfo.apertureMax,
                lensInfo.focalMin,
                lensInfo.focalMax
            ))
    }
    var camera = new Camera(
        cameraInfo.name,
        cameraInfo.shutterSpeedMin,
        cameraInfo.shutterSpeedMax,
        lensList
        )
    var state = new globalState(camera);
    var str = JSON.stringify(state);
    window.localStorage.setItem("globalState", str);
}

export function getGlobalState(): globalState | null {
    var str = window.localStorage.getItem("globalState");
    if (str == null) return null;
    var obj = JSON.parse(str);
    return globalState.fromJSON(obj);
}

export function setGlobalState(state: globalState) {
    var str = JSON.stringify(state);
    window.localStorage.setItem("globalState", str);
}