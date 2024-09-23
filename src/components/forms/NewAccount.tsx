"use client";
import React, { useEffect, useRef, useState } from "react";

import Period from "@/types/Period";
import Account from "@/types/Account";

import Modal from "@/components/Modal";
import InputText from "@/components/forms/InputText";
import InputError from "@/components/forms/InputError";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Loader from "@/components/Loader";

interface NewAccountProps {
  lastPeriod: Period;
  lastAccount: Account;
}

export default function NewAccount(props: NewAccountProps) {
  const [isLoading, setIsLoading] = useState(false);

  const modalRef = useRef<any>(null);

  const actualYear = new Date().getFullYear();

  let newStartYear = actualYear;
  let newEndYear = actualYear + 1;
  let newBalance = "";

  if (props.lastPeriod.id !== 0) {
    newStartYear = props.lastPeriod.endYear;
    newEndYear = props.lastPeriod.endYear + 1;
    newBalance = props.lastAccount.balance.toString();
  }

  const [periodStartYear, setPeriodStartYear] = useState(newStartYear);
  const [periodEndYear, setPeriodEndYear] = useState(newEndYear);
  const [balance, setBalance] = useState(newBalance);

  const [error, setError] = useState("");
  const [startYearError, setStartYearError] = useState(false);
  const [endYearError, setEndYearError] = useState(false);
  const [balanceError, setBalanceError] = useState(false);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.toggleModal();
    }

    if (props.lastPeriod.id !== 0) {
      setPeriodStartYear(props.lastPeriod.endYear);
      setPeriodEndYear(props.lastPeriod.endYear + 1);
      setBalance(props.lastAccount.balance.toString());
      return;
    } else {
      setPeriodStartYear(actualYear);
      setPeriodEndYear(actualYear + 1);
      setBalance("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setStartYearError(false);
    setEndYearError(false);
    setBalanceError(false);

    const response = await fetch("/api/accounts", {
      method: "POST",
      body: JSON.stringify({
        startYear: periodStartYear,
        endYear: periodEndYear,
        balance: parseFloat(balance),
      }),
    });

    if (response.status === 500) {
      setError("An error occurred while creating the account");
      setIsLoading(false);
      return;
    }

    if (!response.ok) {
      const error = await response.json();
      setError(error.error);

      if (error.error === "All the fields are required") {
        setStartYearError(true);
        setEndYearError(true);
        setBalanceError(true);
      }

      if (error.error === "Start year is required") {
        setStartYearError(true);
      }

      if (error.error === "End year is required") {
        setEndYearError(true);
      }

      if (error.error === "Balance is required") {
        setBalanceError(true);
      }

      setIsLoading(false);
      return;
    }

    closeModal();
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Modal
        ref={modalRef}
        title="New account"
        isActionDisabled={props.lastPeriod?.isCurrent || false}
        maxSize="4xl"
        buttonTitle="New account"
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <InputText
              type="number"
              label="Start year"
              name="startYear"
              value={periodStartYear}
              placeholder="2022"
              autocomplete="startYear"
              error={startYearError}
              onChange={(e) => setPeriodStartYear(parseFloat(e.target.value))}
            />
            <InputText
              type="number"
              label="End year"
              name="endYear"
              value={periodEndYear}
              placeholder="2022"
              autocomplete="endYear"
              error={endYearError}
              onChange={(e) => setPeriodEndYear(parseFloat(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InputText
              type="number"
              label="Balance"
              name="balance"
              value={balance}
              placeholder="5672.50"
              step={0.01}
              autocomplete="balance"
              error={balanceError}
              onChange={(e) => setBalance(e.target.value)}
            />
          </div>

          <InputError>{error}</InputError>
          <div className="flex justify-end gap-4">
            <SecondaryButton
              type="button"
              disabled={false}
              onClick={closeModal}
            >
              Discard
            </SecondaryButton>
            <PrimaryButton
              type="submit"
              disabled={!periodStartYear || !periodEndYear || !balance}
            >
              Create account
            </PrimaryButton>
          </div>
        </form>
      </Modal>
    </>
  );
}
