interface ButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  type: "button" | "submit" | "reset";

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`px-4 py-2 rounded-lg h-max ${
        props.disabled
          ? "border border-zinc-300 text-zinc-400 dark:border-zinc-600 dark:text-zinc-500"
          : "border border-zinc-500 text-zinc-600 hover:border-zinc-800 hover:bg-zinc-800 hover:text-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-800"
      }  duration-300`}
    >
      {props.children}
    </button>
  );
}
