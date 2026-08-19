import { Application } from "@pixi/react";
import { useState } from "react";
import Layout from "#/host";
import { useScreenSize } from "./hooks/useScreenSize";
import "./pixiSetup";

const App = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  useScreenSize();

  return (
    <div className="parent" ref={setContainer}>
      <Layout />
      {/* {container && (
        <Application
          resizeTo={container}
          antialias
          resolution={window.devicePixelRatio}
          autoDensity
        >
          <Layout />
        </Application>
      )} */}
    </div>
  );
};

export default App;
