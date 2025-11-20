import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiFile } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number;
  label?: string;
  helpText?: string;
}

export const FileUpload = ({
  onFileSelect,
  accept = "image/*,.pdf,.doc,.docx",
  maxSize = 10485760, // 10MB
  helpText = "pdf, docx, jpeg, png",
  label,
}: FileUploadProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.split(",").reduce((acc, curr) => {
      const trimmed = curr.trim();
      if (trimmed.startsWith(".")) {
        acc[`application/${trimmed.slice(1)}`] = [trimmed];
      } else {
        acc[trimmed] = [];
      }
      return acc;
    }, {} as Record<string, string[]>),
    maxSize,
    multiple: false,
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "bg-black rounded-2xl p-6 md:p-8 flex flex-row items-center justify-center gap-4 cursor-pointer transition-all hover:bg-black/90",
          isDragActive && "bg-black/80 scale-[0.98]"
        )}
      >
        <input {...getInputProps()} />
        <FiFile className="w-10 h-10 md:w-12 md:h-12 text-[#FCC40B]" />
        <span className="text-[#FCC40B] text-lg md:text-xl font-bold text-center">
          {label || "Upload File"}
        </span>
      </div>

      <div className="flex justify-between items-center text-xs md:text-sm text-black">
        <span>{helpText}</span>
        <span>maximum upload size 10MB</span>
      </div>
    </div>
  );
};
