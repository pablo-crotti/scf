import GridElement from "@/components/GridElement";
import AccountTable from "@/components/accounting/AccountTable";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <GridElement title="Comptabilité 2024-2025">
        <AccountTable />
        <div className="mt-8 flex justify-between">
          <div className="flex flex-col items-center w-max border border-zinc-300 dark:border-zinc-800 rounded-lg p-4 hover:scale-105 duration-300">
            <h2 className="font-semibold text-zinc-500">Balance</h2>
            <p className="text-sm mb-2 text-zinc-500">01.07.2024</p>
            <p>CHF 310.00</p>
          </div>

          <div className="flex flex-col items-center w-max border border-zinc-300 dark:border-zinc-800 rounded-lg p-4 hover:scale-105 duration-300">
            <h2 className="font-semibold text-zinc-500">Balance</h2>
            <p className="text-sm mb-2 text-zinc-500">Actual</p>
            <p>CHF 310.00</p>
          </div>

          <div className="flex flex-col items-center w-max border border-zinc-300 dark:border-zinc-800 rounded-lg p-4 justify-between hover:scale-105 duration-300">
            <h2 className="font-semibold text-zinc-500">Result</h2>
            <p className="text-sm mb-2 text-zinc-500"></p>
            <p className="text-red-500">CHF -310.00</p>
          </div>
        </div>
      </GridElement>
    </div>
  );
}
