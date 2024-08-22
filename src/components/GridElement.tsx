interface GridElementProps {
  children: React.ReactNode;
  title: string;
}
export default function GridElement(props: GridElementProps) {
  return (
    <div className="p-8 rounded-lg border bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800">
      <h1 className="text-2xl font-semibold mb-8">{props.title}</h1>
      {props.children}
    </div>
  );
}
