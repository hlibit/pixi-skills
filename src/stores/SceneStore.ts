import { BUTTON_SIZE } from "#/constants";
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
            buttonParameters: computed,
            setSize: action.bound,
            setSceneY: action.bound
        });
    }

    get buttonGap() {
        return Math.max(this.width * 0.01, 10)
    }


    get buttonParameters() {
        return {
            width: Math.max(this.width / 12, BUTTON_SIZE.width),
            height: Math.max(this.height / 16, BUTTON_SIZE.height)
        }
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