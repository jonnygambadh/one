import { tw } from "twind";

interface LoaderProps {
  valign?: "top" | "center";
}

const Loader: React.FC<LoaderProps> = ({ valign = "center" }) => (
  <div
    className={tw(
      "flex justify-center items-center h-full",
      valign === "top" && "mt-[500px] items-start"
    )}
  >
    <div
      className={tw(
        "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"
      )}
    ></div>
  </div>
);

export default Loader;
