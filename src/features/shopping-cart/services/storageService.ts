import { RootState } from "../../../app/store";
// storage for saving cartState in localstorage
const storageName = "cartState";

export default class StorageService {

  static get() {
    return JSON.parse(localStorage.getItem(storageName) || 'null');
  }

  static set(state: RootState) {
    localStorage.setItem(storageName, JSON.stringify(state));
  }
}
