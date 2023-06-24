import { useState, useEffect, ComponentType } from "react";

const PluginA = () => {
  const [show, setShow] = useState(false);
  const [MicroFrontendB, setMicroFrontendB] =
    useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (show) {
      import("http://localhost:7100/bundle.js" as any)
        .then((module) => {
          setMicroFrontendB(() => module.default);
        })
        .catch((error) =>
          console.error(`Error loading microfrontend bundle: ${error}`)
        );
    }
  }, [show]);

  return (
    <div>
      <button onClick={() => setShow(true)}>show</button>
      {show && MicroFrontendB && <MicroFrontendB />}
    </div>
  );
};

export default PluginA;
