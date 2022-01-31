import { Camera } from "./Camera";
import { Roll } from "./Roll";
import { Lens } from "./Lens";
import cameraJson from "../config/camera.json";
import useMediaQuery from "@mui/material/useMediaQuery";

export class globalState {
  appName = "Photo Logger v-0.3";
  theme: string;
  camera: Camera;
  lensList: Lens[];
  rollList: Roll[];
  cameraList: Camera[];
  currentRoll: number;
  currentPhoto: number;
  rollView: number; // Indicates which roll is being viewed in the photoList page
  rollName: string; // name of the roll being viewed "                        "
  photoView: number; // Indicates which photo is being viewed in the photoView page

  //   contructor() {}
  constructor(camera?: Camera) {
    this.theme = "dark";
    this.rollList = [];
    this.lensList = [];
    this.cameraList = [];
    this.currentRoll = -1;
    this.currentPhoto = -1;
  }

  static fromJSON(obj: Object): globalState {
    var o = Object.assign(new globalState(), obj);
    o.camera = Camera.fromJSON(o["camera"]);
    return o;
  }

  // brand;model;mount;speed;name;
  newCamera(
    brand?: string,
    model?: string,
    mount?: any[],
    speed?: any[],
    name?: string
  ) {
    let id = 0;
    if (this.cameraList.length != 0) {
      id = this.cameraList[this.cameraList.length - 1].id + 1;
    }
    let camera2 = new Camera(id, brand, model, mount, speed, name);
    this.cameraList.push(camera2);
    setGlobalState(this);
  }

  newLens(
    brand?: string,
    mount?: string,
    lengthMin?: number,
    lengthMax?: number,
    aperture?: any[],
    name?: string
  ) {
    let id = 0;
    if (this.lensList.length != 0) {
      id = this.lensList[this.lensList.length - 1].id + 1;
    }
    let lens = new Lens(id, brand, mount, lengthMin, lengthMax, aperture, name);
    this.lensList.push(lens);
    setGlobalState(this);
  }

  newRoll(name: string, iso: number, size: number) {
    let id = 0;
    if (this.rollList.length != 0) {
      id = this.rollList[this.rollList.length - 1].id + 1;
    }
    let roll = new Roll(id, name, iso, size);
    this.rollList.push(roll);
    setGlobalState(this);
  }

  setCurrentRoll(rollID: number) {
    this.currentRoll = rollID;
  }
}

export function initGlobalState() {
  var cameraInfo = cameraJson.camera;
  var lensList: Lens[] = [];
  //   for (let i = 0; i < cameraInfo.lensList.length; i++) {
  //     var lensInfo = cameraInfo.lensList[i];
  //     lensList.push(
  //       new Lens(
  //         i,
  //         lensInfo.name,
  //         lensInfo.apertureMin,
  //         lensInfo.apertureMax,
  //         lensInfo.focalMin,
  //         lensInfo.focalMax
  //       )
  //     );
  //   }
  // var camera = new Camera(
  //   cameraInfo.name,
  //   cameraInfo.shutterSpeedMin,
  //   cameraInfo.shutterSpeedMax,
  //   lensList
  // );
  // var state = new globalState(camera);
  // var str = JSON.stringify(state);
  // window.localStorage.setItem("globalState", str);
  // console.log("init");
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

export function eraseGlobalState() {
  window.localStorage.setItem("globalState", null);
}
