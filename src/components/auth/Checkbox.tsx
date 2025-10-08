import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <label className="flex items-start gap-3 cursor-pointer group relative z-10">
      <input
        type="checkbox"
        className={cn(
          "w-5 h-5 mt-0.5 rounded border-2 border-black bg-white cursor-pointer appearance-none checked:bg-black checked:border-black relative flex-shrink-0 transition-all",
          "after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:text-[#FFD700] after:text-sm after:font-bold after:opacity-0 checked:after:opacity-100 after:transition-opacity",
          className
        )}
        {...props}
      />
      <span className="text-black font-medium text-sm md:text-base">
        {label}
      </span>
    </label>
  );
};
