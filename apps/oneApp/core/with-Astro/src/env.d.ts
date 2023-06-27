/// <reference types="astro/client" />

declare module "http://localhost:7200/bundle.js" {
  interface PluginProps {
    name: string;
    uid: string;
  }

  const Plugin: React.FC<PluginProps>;
  export default Plugin;
}

declare module "http://localhost:7300/bundle.js" {
  interface PluginProps {
    name: string;
  }

  const Plugin: React.FC<PluginProps>;
  export default Plugin;
}
