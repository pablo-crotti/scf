interface NavLinkProps {
  children: string;
  isActive: boolean;
}
export default function NavLink(props: NavLinkProps) {
  return (
    <a
      href="#"
      aria-current="page"
      className={`block text-sm py-2 px-3 rounded-lg md:p-0 ${
        props.isActive
          ? "bg-zinc-500 text-zinc-100 dark:bg-zinc-600 md:bg-zinc-100 md:dark:bg-zinc-950 md:hover:dark:bg-zinc-950 md:text-zinc-900 md:dark:text-zinc-100"
          : "hover:bg-zinc-300 dark:hover:bg-zinc-800 md:hover:bg-zinc-100 md:hover:dark:bg-zinc-950 md:text-zinc-600 md:hover:text-zinc-800 md:dark:text-zinc-400 md:dark:hover:text-zinc-200"
      } duration-300`}
    >
      {props.children}
    </a>
  );
}
