import { useState, useEffect } from "react";
import Period from "@/types/Period";
import SelectOptions from "@/types/SelectOptions";

import Dropdown from "@/components/forms/Dropdown";
import Loader from "@/components/Loader";

export default function SelectPeriod() {
  const [options, setOptions] = useState<SelectOptions[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const findActivePeriodOrLast = (periods: Period[]) => {
    const activePeriod = periods.find((period) => period.isCurrent);

    if (activePeriod) {
      setSelectedPeriod(activePeriod.id);
    } else {
      setSelectedPeriod(periods[0].id);
    }
  };

  const setOptionsFromPeriods = (periods: Period[]) => {
    const options = periods.map((period) => ({
      value: period.id,
      label: `Période ${period.startYear}-${period.endYear}`,
    }));

    setOptions(options);
  };

  const loadPeriods = async () => {
    const response = await fetch("/api/periods");

    if (!response.ok) {
      console.error(response.statusText);
      return;
    }

    const data = await response.json();
    findActivePeriodOrLast(data);
    setOptionsFromPeriods(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPeriods();
  });
  return (
    <>
      {isLoading && <Loader />}
      <Dropdown
        dropdownName="Sélectionner une période"
        id="period"
        options={options}
        selected={selectedPeriod}
      />
    </>
  );
}
