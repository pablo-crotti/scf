import SelectOptions from "@/types/SelectOptions";

interface DropdownProps {
  id: string;
  options: SelectOptions[];
  selected?: string | number;
  dropdownName: string;
}
export default function Dropdown(props: DropdownProps) {
  return (
    <>
      <button
        id={`${props.id}-dropdownHoverButton`}
        data-dropdown-toggle={`${props.id}-dropdownHover`}
        data-dropdown-trigger="hover"
        className="px-4 py-2 rounded-lg h-max inline-flex items-center bg-zinc-500 hover:bg-zinc-600 text-zinc-100 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:text-zinc-100 duration-300"
        type="button"
      >
        {props.options.find((option) => option.value === props.selected)
          ?.label || props.dropdownName}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id={`${props.id}-dropdownHover`}
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby={`${props.id}-dropdownHoverButton`}
        >
          {props.options.map((option) => (
            <li key={option.value}>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
