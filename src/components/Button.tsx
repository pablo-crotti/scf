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
      className={`px-4 py-2 rounded-lg ${
        props.disabled
          ? "border border-zinc-300 text-zinc-400 dark:border-zinc-600 dark:text-zinc-500"
          : "bg-zinc-500 hover:bg-zinc-600 text-zinc-100 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:text-zinc-100"
      }  duration-300`}
    >
      {props.children}
    </button>
  );
}
