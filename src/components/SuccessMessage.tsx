import React from "react";

interface SuccessMessageProps {
  children: React.ReactNode;
}

export default function SuccessMessage(props: SuccessMessageProps) {
  return (
    <div className="w-max bg-green-500 text-white fixed top-4 right-4 py-3 px-8 rounded-lg animate-fallfall">
      <p>{props.children}</p>
    </div>
  );
}
