import { action, makeObservable, observable } from "mobx";


class SceneStore {
    width = window.innerWidth;
    height = window.innerHeight;

    constructor() {
        makeObservable(this, {
            width: observable,
            height: observable,
            setSize: action.bound
        });
    }

    setSize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}
export default SceneStore;