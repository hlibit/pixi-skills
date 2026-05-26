import { Application } from "@pixi/react";
import { useState } from "react";
import Layout from "./layout/Layout";
import { useScreenSize } from "./hooks/useScreenSize";
import "./pixiSetup";

const App = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  useScreenSize();

  return (
    <div className="parent" ref={setContainer}>
      {container && (
        <Application
          resizeTo={container}
          antialias
          resolution={window.devicePixelRatio}
          autoDensity
        >
          <Layout />
        </Application>
      )}
    </div>
  );
};

export default App;
