import React, { Suspense, useEffect, useState } from "react";
import Loader from "./Loader";

interface NavbarProps {
  delay: number;
}

const Navbar: React.FC<NavbarProps> = ({ delay }) => {
  const [Plugin, setPlugin] = useState<React.LazyExoticComponent<
    React.FC<any>
  > | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const LazyPlugin = React.lazy(
        () => import("http://localhost:7200/bundle.js")
      );
      setPlugin(LazyPlugin);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Suspense fallback={<Loader valign="top"/>}>
      {Plugin && <Plugin name="Jonny" uid="1" />}
    </Suspense>
  );
};

export default Navbar;
