import { ChevronDownIcon } from "@heroicons/react/24/solid";
export const Accordions = () => {
  return (
    <div className="flex flex-col justify-center max-w-5xl gap-4">
      <details className="accordion">
        <summary className="flex cursor-pointer items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            Accordion Title
          </span>
          <ChevronDownIcon className="relative w-6 flex" />
        </summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </details>

      <details className="accordion">
        <summary className="flex cursor-pointer items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            Accordion Title
          </span>
          <ChevronDownIcon className="relative w-6 flex" />
        </summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </details>
    </div>
  );
};
