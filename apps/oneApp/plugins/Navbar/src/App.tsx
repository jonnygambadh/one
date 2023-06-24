import { tw } from "twind";

function App({ uid, name }: { uid: string; name: string }) {
  return (
    <div
      className={`${tw(
        "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4 h-full"
      )}`}
    >
      <div className={`${tw("flex h-16 shrink-0 items-center")}`}>
        <img
          className={`${tw("h-8 w-auto")}`}
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <nav className={`${tw("flex flex-1 flex-col")}`}>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              <li>uno</li>
              <li>dos</li>
            </ul>
          </li>
          <li>
            <div
              className={`${tw(
                "text-xs font-semibold leading-6 text-indigo-200"
              )}`}
            >
              Your teams {name}
            </div>
            <ul role="list" className={`${tw("-mx-2 mt-2 space-y-1")}`}>
              <li>{uid}</li>
              <li>cuatro</li>
            </ul>
          </li>
          <li className={`${tw("mt-auto")}`}>
            <a
              href="#"
              className={`${tw(
                "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
              )}`}
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
