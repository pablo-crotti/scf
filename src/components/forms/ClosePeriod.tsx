import { useRef, useState } from "react";
import DangerModal from "@/components/DangerModal";
import PrimaryButton from "@/components/PrimaryButton";
import DangerButton from "@/components/DangerButton";
import SuccessMessage from "@/components/SuccessMessage";
import FailureMessage from "@/components/FailureMessage";
import Loader from "@/components/Loader";

interface ClosePeriodProps {
  onSuccessfullyClosed: () => void;
}

export default function ClosePeriod(props: ClosePeriodProps) {
  const modalRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successfullyClosed, setSuccessfullyClosed] = useState(false);
  const [error, setError] = useState("");
  const [failureToClose, setFailureToClose] = useState(false);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.toggleModal();
    }
  };

  const manageSuccessMessage = () => {
    setSuccessfullyClosed(true);

    setTimeout(() => {
      setSuccessfullyClosed(false);
    }, 7000);
  };

  const manageFailureMessage = () => {
    setFailureToClose(true);

    setTimeout(() => {
      setFailureToClose(false);
    }, 7000);
  };

  const confirmClosePeriod = async () => {
    setIsLoading(true);
    const response = await fetch("/api/periods/close", {
      method: "POST",
    });

    setIsLoading(false);

    if (response.status === 500) {
      setError("An error occurred while closing the period");
      closeModal();
      manageFailureMessage();
      return;
    }

    if (response.status === 400) {
      setError("There is no current period");
      closeModal();
      manageFailureMessage();
      return;
    }

    manageSuccessMessage();
    closeModal();

    props.onSuccessfullyClosed();
  };
  return (
    <>
      {isLoading && <Loader />}
      {successfullyClosed && (
        <SuccessMessage>Period closed successfully</SuccessMessage>
      )}

      {failureToClose && <FailureMessage>{error}</FailureMessage>}
      <DangerModal
        ref={modalRef}
        title="Close period"
        isActionDisabled={false}
        maxSize="4xl"
        buttonTitle="Close period"
      >
        <div>
          <p className="text-lg text-zinc-800 dark:text-white">
            Are you sure you want to close the period? If you close the period,
            you will not be able to make any changes to the transactions.
          </p>
          <div className="flex justify-end gap-4 mt-8">
            <PrimaryButton disabled={false} type="button" onClick={closeModal}>
              No, cancel
            </PrimaryButton>
            <DangerButton
              disabled={false}
              type="button"
              onClick={confirmClosePeriod}
            >
              Yes, close period
            </DangerButton>
          </div>
        </div>
      </DangerModal>
    </>
  );
}
