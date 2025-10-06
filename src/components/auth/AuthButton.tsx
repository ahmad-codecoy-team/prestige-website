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
  ...props
}: AuthButtonProps) => {
  return (
    <button
      className={cn(
        "w-full py-4 rounded-full text-lg font-semibold transition-all",
        variant === "primary" && "bg-black text-[#E8BF21] hover:bg-black/90",
        variant === "secondary" && "border-2 border-black bg-transparent text-black hover:bg-black/5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
