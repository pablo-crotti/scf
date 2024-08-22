export default function Loader() {
  return (
    <div className="w-screen h-screen fixed z-50 flex justify-center items-center bg-[#ffffffaa] dark:bg-[#000000aa]">
      <div className="loader">
        <div className="circle bg-zinc-800 dark:bg-zinc-200"></div>
        <div className="circle bg-zinc-800 dark:bg-zinc-200"></div>
        <div className="circle bg-zinc-800 dark:bg-zinc-200"></div>
        <div className="circle bg-zinc-800 dark:bg-zinc-200"></div>
      </div>
    </div>
  );
}
