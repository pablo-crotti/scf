"use client";
import { useState, useEffect } from "react";

import Account from "@/types/Account";
import Period from "@/types/Period";

import NewAccount from "@/components/forms/NewAccount";
import GridElement from "@/components/GridElement";
import AccountTable from "@/components/accounting/AccountTable";
import Loader from "@/components/Loader";
import SelectPeriod from "@/components/accounting/SelectPeriod";
import ClosePeriod from "@/components/forms/ClosePeriod";

export default function Home() {
  const [lastPeriod, setLastPeriod] = useState<Period>({
    id: 0,
    startYear: 2021,
    endYear: 2022,
    isCurrent: false,
    createdAt: "",
    updatedAt: "",
  });
  const [lastAccount, setLastAccount] = useState<Account>({
    id: 0,
    balance: 300,
    periodId: 0,
    createdAt: "",
    updatedAt: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const periodResponse = await fetch("/api/periods/last");
    const accountResponse = await fetch("/api/accounts/last");

    const periodData = await periodResponse.json();
    const accountData = await accountResponse.json();

    setLastPeriod(periodData);
    setLastAccount(accountData);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex justify-between mb-5">
        <SelectPeriod />
        <div className="flex gap-8">
          <NewAccount lastPeriod={lastPeriod} lastAccount={lastAccount} />
          {lastPeriod.isCurrent && (
            <ClosePeriod onSuccessfullyClosed={loadData} />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GridElement
          title={`Accounting ${lastPeriod.startYear}-${lastPeriod.endYear}`}
        >
          <AccountTable />
          <div className="mt-8 flex justify-between">
            <div className="flex flex-col items-center w-max border border-zinc-300 dark:border-zinc-800 rounded-lg p-4 hover:scale-105 duration-300">
              <h2 className="font-semibold text-zinc-500">Balance</h2>
              <p className="text-sm mb-2 text-zinc-500">
                {new Date(lastAccount.createdAt).toLocaleDateString()}
              </p>
              <p>CHF {lastAccount ? lastAccount.balance : "0.00"}</p>
            </div>

            <div className="flex flex-col items-center w-max border border-zinc-300 dark:border-zinc-800 rounded-lg p-4 hover:scale-105 duration-300">
              <h2 className="font-semibold text-zinc-500">Balance</h2>
              <p className="text-sm mb-2 text-zinc-500">Actual</p>
              <p>CHF {lastAccount.balance}</p>
            </div>

            <div className="flex flex-col items-center w-max border border-zinc-300 dark:border-zinc-800 rounded-lg p-4 justify-between hover:scale-105 duration-300">
              <h2 className="font-semibold text-zinc-500">Result</h2>
              <p className="text-sm mb-2 text-zinc-500"></p>
              <p className="text-red-500">CHF -300</p>
            </div>
          </div>
        </GridElement>
      </div>
    </>
  );
}
