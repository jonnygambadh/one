import App from "./App";

const MicroFrontend = ({ name, uid }: { name: string; uid: string }) => (
  <App name={name} uid={uid} />
);

export default MicroFrontend;
