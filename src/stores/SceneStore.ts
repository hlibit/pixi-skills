import { action, computed, makeObservable, observable } from "mobx";


class SceneStore {
    width = window.innerWidth;
    height = window.innerHeight;
    sceneY = 0;

    constructor() {
        makeObservable(this, {
            width: observable,
            height: observable,
            sceneY: observable,
            buttonGap: computed,
            setSize: action.bound,
            setSceneY: action.bound
        });
    }

    get buttonGap() {
        return this.width * 0.03
    }

    setSize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setSceneY(value: number, containerHeight: number) {
        const gap = this.height / 3.5;
        this.sceneY = value + containerHeight + gap;
    }
}
export default SceneStore;