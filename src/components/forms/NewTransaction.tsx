"use client";
import React, { useRef, useState } from "react";

import Period from "@/types/Period";

import Modal from "@/components/Modal";
// import InputText from "@/components/forms/InputText";
// import InputError from "@/components/forms/InputError";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Loader from "@/components/Loader";

// interface NewAccountProps {
//   lastPeriod: Period;
//   lastAccount: any;
// }

export default function NewTransaction(/*props: NewAccountProps*/) {
  const [isLoading, setIsLoading] = useState(false);

  const modalRef = useRef<any>(null);

  //   const actualYear = new Date().getFullYear();

  //   const [periodStartYear, setPeriodStartYear] = useState(actualYear);
  //   const [periodEndYear, setPeriodEndYear] = useState(actualYear + 1);
  //   const [balance, setBalance] = useState("");

  //   const [error, setError] = useState("");
  //   const [startYearError, setStartYearError] = useState(false);
  //   const [endYearError, setEndYearError] = useState(false);
  //   const [balanceError, setBalanceError] = useState(false);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.toggleModal();
    }

    // setPeriodStartYear(actualYear);
    // setPeriodEndYear(actualYear + 1);
    // setBalance("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // setIsLoading(true);
    // setStartYearError(false);
    // setEndYearError(false);
    // setBalanceError(false);
    // const response = await fetch("/api/accounts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     startYear: periodStartYear,
    //     endYear: periodEndYear,
    //     balance: parseFloat(balance),
    //   }),
    // });
    // if (response.status === 500) {
    //   setError("An error occurred while creating the account");
    //   setIsLoading(false);
    //   return;
    // }
    // if (!response.ok) {
    //   const error = await response.json();
    //   setError(error.error);
    //   if (error.error === "All the fields are required") {
    //     setStartYearError(true);
    //     setEndYearError(true);
    //     setBalanceError(true);
    //   }
    //   if (error.error === "Start year is required") {
    //     setStartYearError(true);
    //   }
    //   if (error.error === "End year is required") {
    //     setEndYearError(true);
    //   }
    //   if (error.error === "Balance is required") {
    //     setBalanceError(true);
    //   }
    //   setIsLoading(false);
    //   return;
    // }
    // closeModal();
    // setIsLoading(false);
  };

  return <>{isLoading && <Loader />}</>;
}
