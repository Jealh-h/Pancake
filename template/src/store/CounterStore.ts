import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0
  constructor() {
    makeAutoObservable(this);
  }
  plus() {
    this.count++;
  }
  minus() {
    this.count--;
  }
}
export default new CounterStore();