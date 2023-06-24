import { tw } from "twind";

export default function App({ name }: { name: string }) {
  return (
    <header>
      <div>
        <nav className={`${tw("sm:flex")}`} aria-label="Breadcrumb">
          <ol role="list" className={tw("flex items-center space-x-4")}>
            <li>
              <div className={`${tw("flex")}`}>
                <a
                  href="#"
                  className={`${tw(
                    "text-sm font-medium text-gray-500 hover:text-gray-700"
                  )}`}
                >
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className={`${tw("flex items-center")}`}>
                <a
                  href="#"
                  className={`${tw(
                    "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  )}`}
                >
                  Engineering
                </a>
              </div>
            </li>
            <li>
              <div className={`${tw("flex items-center")}`}>
                <a
                  href="#"
                  aria-current="page"
                  className={`${tw(
                    "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  )}`}
                >
                  Backend Developer
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div
        className={`${tw("mt-2 md:flex md:items-center md:justify-between")}`}
      >
        <div className={`${tw("min-w-0 flex-1")}`}>
          <h2
            className={`${tw(
              "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
            )}`}
          >
            {name}
          </h2>
        </div>
        <div className={`${tw("mt-4 flex flex-shrink-0 md:ml-4 md:mt-0")}`}>
          <button
            type="button"
            className={`${tw(
              "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            )}`}
          >
            Edit
          </button>
          <button
            type="button"
            className={`${tw(
              "ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            )}`}
          >
            Publish
          </button>
        </div>
      </div>
    </header>
  );
}
