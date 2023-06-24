import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
  );
}

export default App;
