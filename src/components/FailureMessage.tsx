import React from "react";

interface FailureMessageProps {
  children: React.ReactNode;
}

export default function FailureMessage(props: FailureMessageProps) {
  return (
    <div className="w-max bg-red-500 text-white fixed top-4 right-4 py-3 px-8 rounded-lg animate-fallfall">
      <p>{props.children}</p>
    </div>
  );
}
