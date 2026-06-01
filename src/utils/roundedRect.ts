import type { Graphics } from "pixi.js";

export const roundedRect = (g: Graphics, rectWidth: number, rectHeight: number, radius: number = 30) => {
    g.clear();
    g.pivot.set(rectWidth / 2, rectHeight / 2)

    g.roundRect(0, 0, rectWidth, rectHeight, radius)

    return g
}