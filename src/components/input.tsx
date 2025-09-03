import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export function Input({ label, required, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        required={required}
        id={props.name}
        className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:outline-none"
      />
    </div>
  );
}
