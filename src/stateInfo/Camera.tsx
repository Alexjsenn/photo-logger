import { Lens } from "./Lens";

// brand;model;mount;speed;name;
export class Camera {
  id: number;
  brand: string;
  model: string;
  mount: any[];
  speed: any[];
  name: string = "";

  constructor(
    id?: number,
    brand?: string,
    model?: string,
    mount?: any[],
    speed?: any[],
    name?: string
  ) {
    if (id) this.id = id;
    if (brand) this.brand = brand;
    if (model) this.model = model;
    if (mount) this.mount = mount;
    if (speed) this.speed = speed;
    if (name) this.name = name;
  }

  static fromJSON(obj: Object): Camera {
    // var o = Object.assign(new Camera(), obj);
    // var list = o['lensList'];
    // var tmp = [];
    // for (var lens in list) {
    //     tmp.push(Lens.fromJSON(lens));
    // }
    // o.lensList = tmp;
    // return o;
    return null;
  }
}
