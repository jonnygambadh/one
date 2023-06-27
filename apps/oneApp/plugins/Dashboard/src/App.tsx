import Plugin from "http://localhost:7100/statistics.js";
import { tw } from "twind";

const Orders = () => {
  return (
    <div className={`${tw("border-solid border-2 border-sky-500 max-w-md")}`}>
      <Plugin />
    </div>
  );
};

export default Orders;
