"use client";
import { useState, useEffect } from "react";

import Loader from "@/components/Loader";
import SelectPeriod from "@/components/accounting/SelectPeriod";
import NewTransaction from "@/components/forms/NewTransaction";

export default function Transactions() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex justify-between mb-5">
        <SelectPeriod />
        <NewTransaction />
      </div>
    </>
  );
}
