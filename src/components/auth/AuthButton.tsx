import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const AuthButton = ({
  variant = "primary",
  className,
  children,
  disabled,
  ...props
}: AuthButtonProps) => {
  return (
    <button
      className={cn(
        "w-full py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-200",
        variant === "primary" && "bg-[#FCC40B] text-black hover:bg-[#FCC40B]/90 hover:scale-[1.02] active:scale-[0.98]",
        variant === "secondary" && "bg-black text-[#FCC40B] hover:bg-black/90 hover:scale-[1.02] active:scale-[0.98]",
        disabled && "opacity-50 cursor-not-allowed hover:scale-100",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
