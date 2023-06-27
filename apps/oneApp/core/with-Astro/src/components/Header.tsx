import React, { Suspense, useEffect, useState } from "react";
import Loader from "./Loader";
import { tw } from "twind";

interface HeaderProps {
  name: string;
  delay: number;
}

const Header: React.FC<HeaderProps> = ({ name, delay }) => {
  const [Plugin, setPlugin] = useState<React.LazyExoticComponent<
    React.FC<any>
  > | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const LazyPlugin = React.lazy(
        () => import("http://localhost:7300/bundle.js")
      );
      setPlugin(LazyPlugin);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {Plugin && <Plugin name={name} />}
      </Suspense>
      <hr
        className={`${tw("h-px my-8 bg-gray-200 border-0 dark:bg-gray-700")}`}
      />
    </>
  );
};

export default Header;
