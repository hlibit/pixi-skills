import { useEffect } from "react";
import { rootStore } from "../stores";
import { useWindowSize } from "@uidotdev/usehooks";

export const useScreenSize = () => {
    const { scene: { setSize } } = rootStore
    const { width, height } = useWindowSize();

    useEffect(() => {
        if (width && height) {
            setSize(width, height)
        }
    }, [width, height]);
};