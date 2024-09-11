"use client";
import React, { useState, useImperativeHandle, forwardRef } from "react";

import DangerButton from "@/components/DangerButton";

interface ModalProps {
  title: string;
  maxSize: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  isActionDisabled: boolean;
  children: React.ReactNode;
  buttonTitle: string;
}

const DangerModal = forwardRef(function ModalComponent(props: ModalProps, ref) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e?: React.MouseEvent) => {
    if (e && e.target !== e.currentTarget) return;
    setIsModalOpen(!isModalOpen);
  };

  useImperativeHandle(ref, () => ({
    toggleModal,
  }));

  return (
    <>
      <DangerButton
        onClick={(e) => toggleModal(e)}
        disabled={props.isActionDisabled}
        type="button"
      >
        {props.buttonTitle}
      </DangerButton>
      {isModalOpen && (
        <div
          className="w-screen h-screen fixed top-0 left-0 z-40 flex justify-center items-center bg-[#ffffffaa] dark:bg-[#000000aa] animate-fade"
          onClick={(e) => toggleModal(e)}
        >
          <div
            className={`px-8 py-8 rounded-lg border border-zinc-300 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 w-full dark:border ${
              props.maxSize === "md"
                ? "sm:max-w-md"
                : props.maxSize === "lg"
                ? "sm:max-w-lg"
                : props.maxSize === "xl"
                ? "sm:max-w-xl"
                : props.maxSize === "2xl"
                ? "sm:max-w-2xl"
                : props.maxSize === "3xl"
                ? "sm:max-w-3xl"
                : props.maxSize === "4xl"
                ? "sm:max-w-4xl"
                : props.maxSize === "5xl"
                ? "sm:max-w-5xl"
                : props.maxSize === "6xl"
                ? "sm:max-w-6xl"
                : "sm:max-w-7xl"
            } animate-fall`}
          >
            <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-800 md:text-2xl dark:text-white mb-8">
              {props.title}
            </h1>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
});

export default DangerModal;
