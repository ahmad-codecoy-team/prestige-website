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
  label = "Upload File",
  helpText = "pdf, docx, jpeg, png",
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
    <div className="space-y-3">
      <h3 className="text-lg md:text-xl font-bold text-black">{label}</h3>

      <div
        {...getRootProps()}
        className={cn(
          "bg-black rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:bg-black/90",
          isDragActive && "bg-black/80 scale-[0.98]"
        )}
      >
        <input {...getInputProps()} />
        <FiFile className="w-12 h-12 md:w-16 md:h-16 text-[#FFD700]" />
        <span className="text-[#FFD700] text-lg md:text-xl font-bold text-center">
          I9 From
        </span>
      </div>

      <div className="flex justify-between items-center text-xs md:text-sm text-black">
        <span>{helpText}</span>
        <span>maximum up load size 10MB</span>
      </div>
    </div>
  );
};
