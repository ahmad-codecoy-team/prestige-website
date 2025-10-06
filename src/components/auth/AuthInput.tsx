import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
}

export const AuthInput = ({
  label,
  error,
  icon,
  rightIcon,
  className,
  ...props
}: AuthInputProps) => {
  return (
    <div className="relative">
      {label && (
        <label htmlFor={props.id} className="text-sm text-gray-600 mb-1 block">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          className={cn(
            "w-full py-4 rounded-2xl text-base bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20",
            icon ? "pl-12" : "pl-4",
            rightIcon ? "pr-12" : "pr-4",
            error ? "border-2 border-red-500" : "border-0",
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <div className="text-red-600 text-sm mt-1 px-2">{error}</div>}
    </div>
  );
};
