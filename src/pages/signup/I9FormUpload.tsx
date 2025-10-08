import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthButton } from "@/components/auth/AuthButton";
import { FileUpload } from "@/components/auth/FileUpload";
import toast from "react-hot-toast";

interface I9FormUploadProps {
  onComplete: (file: File) => void;
}

export const I9FormUpload = ({ onComplete }: I9FormUploadProps) => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    toast.success(`File selected: ${file.name}`);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast.error("Please upload the I9 form");
      return;
    }

    setIsLoading(true);
    try {
      // Mock API call - replace with actual API later
      console.log("I9 Form uploaded:", selectedFile);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Registration completed successfully!");
      onComplete(selectedFile);
      // Navigate to login or home page
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error("Failed to upload I9 form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-[#FFD700] rounded-3xl p-6 md:p-8 w-full">
      {/* File Upload */}
      <FileUpload
        onFileSelect={handleFileSelect}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        label="Upload I9 Form"
        helpText="pdf, docx, jpeg, png"
      />

      {/* Selected File Info */}
      {selectedFile && (
        <div className="bg-white/80 rounded-2xl p-4 text-sm text-black">
          <p className="font-medium">Selected file:</p>
          <p className="text-gray-700">{selectedFile.name}</p>
          <p className="text-gray-500 text-xs mt-1">
            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}

      {/* Submit Button */}
      <AuthButton
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full mt-4"
      >
        {isLoading ? "Uploading..." : "Next"}
      </AuthButton>
    </div>
  );
};
