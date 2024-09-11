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
          : "border border-red-500 text-red-500 hover:bg-red-500 hover:text-zinc-100 duration-300"
      }  duration-300`}
    >
      {props.children}
    </button>
  );
}
