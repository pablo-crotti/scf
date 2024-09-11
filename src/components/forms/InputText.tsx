import { ChangeEvent } from "react";

interface InputTextProps {
  type: "text" | "password" | "email" | "number";
  name: string;
  label: string;
  placeholder?: string;
  autocomplete?: string;
  value: string | number;
  step?: number;
  error: boolean;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText(props: InputTextProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={props.name}
        className={`block mb-4 ${
          props.error ? "text-red-600" : "text-zinc-900 dark:text-zinc-100"
        }`}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        step={props.type === "number" ? (props.step ? props.step : 1) : ""}
        placeholder={props.placeholder}
        autoComplete={props.autocomplete}
        onChange={props.onChange}
        className={`w-full px-4 py-2 rounded-lg border focus:outline-none bg-zinc-100 dark:bg-red-100  ${
          props.error
            ? "border-red-600"
            : "border-zinc-300 dark:border-zinc-800 focus:border-zinc-500 dark:focus:border-zinc-500"
        } duration-300`}
      />
    </div>
  );
}
