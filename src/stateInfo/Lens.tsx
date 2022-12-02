export class Lens {
  id: number;
  brand: string;
  mount: string;
  lengthMin: number;
  lengthMax: number;
  aperture: any[];
  name: string = "";

  constructor(
    id?: number,
    brand?: string,
    mount?: string,
    lengthMin?: number,
    lengthMax?: number,
    aperture?: any[],
    name?: string
  ) {
    if (id) this.id = id;
    if (brand) this.brand = brand;
    if (mount) this.mount = mount;
    if (lengthMin) this.lengthMin = lengthMin;
    if (lengthMax) this.lengthMax = lengthMax;
    if (aperture) this.aperture = aperture;
    if (name) this.name = name;
  }

  static fromJSON(obj: Object): Lens {
    var o = Object.assign(new Lens(), obj);
    return o;
  }
}
