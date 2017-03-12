export default class Item {
  id: number;
  bmi: Object;
  mode: string;
  constructor(id: number, bmi: Object, mode: string) {
    this.id = id;
    this.bmi = bmi;
    this.mode = mode;
  }
}
