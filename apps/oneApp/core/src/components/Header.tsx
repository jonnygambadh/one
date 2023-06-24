import Plugin from "http://localhost:7300/bundle.js";
import {tw} from "twind";

const Header = () => {
  return (
    <>
      <Plugin name="Dashboard" />
      <hr
        className={`${tw("h-px my-8 bg-gray-200 border-0 dark:bg-gray-700")}`}
      />
    </>
  );
};

export default Header;
