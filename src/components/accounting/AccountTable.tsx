export default function AccountTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
        <thead className="text-xs text-zinc-700 bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Label
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Sum of credit
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Sum of debit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-zinc-100 border-b dark:bg-zinc-800 dark:border-zinc-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white"
            >
              Frais Compte Postfinance
            </th>
            <td className="px-6 py-4 text-green-500 text-right"></td>
            <td className="px-6 py-4 text-red-500 text-right">-10</td>
          </tr>

          <tr className="bg-zinc-100 border-b dark:bg-zinc-800 dark:border-zinc-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white"
            >
              Cotisation adulte
            </th>
            <td className="px-6 py-4 text-green-500 text-right">+320</td>
            <td className="px-6 py-4 text-red-500 text-right"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
