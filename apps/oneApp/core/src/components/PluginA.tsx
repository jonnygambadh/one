import Plugin from "http://localhost:7100/bundle.js";

const PluginA = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Plugin />
    </div>
  );
};

export default PluginA;
