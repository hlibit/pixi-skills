import SceneStore from "./SceneStore";

class RootStore {
    scene: SceneStore;

    constructor() {
        this.scene = new SceneStore();
    }
}

export default RootStore;
