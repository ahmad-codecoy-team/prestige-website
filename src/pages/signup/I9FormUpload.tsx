// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthButton } from "@/components/auth/AuthButton";
// import { FileUpload } from "@/components/auth/FileUpload";
// import toast from "react-hot-toast";

// interface I9FormUploadProps {
//   onComplete: (file: File) => void;
// }

// export const I9FormUpload = ({ onComplete }: I9FormUploadProps) => {
//   const navigate = useNavigate();
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileSelect = (file: File) => {
//     setSelectedFile(file);
//     toast.success(`File selected: ${file.name}`);
//   };

//   const handleRemoveFile = () => {
//     setSelectedFile(null);
//     toast.success("File removed");
//   };

//   const handleSubmit = async () => {
//     if (!selectedFile) {
//       toast.error("Please upload the I9 form");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // Mock API call - replace with actual API later
//       console.log("I9 Form uploaded:", selectedFile);
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       toast.success("Registration completed successfully!");
//       onComplete(selectedFile);
//       // Navigate to login or home page
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//     } catch (error) {
//       toast.error("Failed to upload I9 form");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col flex-1">
//       {/* File Upload */}
//       <FileUpload
//         onFileSelect={handleFileSelect}
//         accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//         label="Upload I9 Form"
//         helpText="pdf, docx, jpeg, png"
//       />

//       {/* Selected File Info */}
//       {selectedFile && (
//         <div className="bg-white rounded-2xl p-4 text-sm text-black mt-4 flex justify-between items-center">
//           <div className="flex-1">
//             <p className="font-medium">Selected file:</p>
//             <p className="text-gray-700 truncate">{selectedFile.name}</p>
//             <p className="text-gray-500 text-xs mt-1">
//               {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={handleRemoveFile}
//             className="ml-4 text-grey-600 hover:text-grey-800 font-bold text-xl"
//             aria-label="Remove file"
//           >
//             ×
//           </button>
//         </div>
//       )}

//       {/* Submit Button */}
//       <div className="mt-auto pt-6">
//         <AuthButton
//           type="button"
//           onClick={handleSubmit}
//           disabled={isLoading}
//           variant="secondary"
//         >
//           {isLoading ? "Uploading..." : "Next"}
//         </AuthButton>
//       </div>
//     </div>
//   );
// };

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

  const handleRemoveFile = () => {
    setSelectedFile(null);
    toast.success("File removed");
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast.error("Please upload the I9 form");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Registration completed successfully!");
      onComplete(selectedFile);
      setTimeout(() => navigate("/login"), 1000);
    } catch {
      toast.error("Failed to upload I9 form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col flex-1 h-full bg-[#FCC40B]">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-32 max-w-md mx-auto w-full">
        <FileUpload
          onFileSelect={handleFileSelect}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          label="Upload I9 Form"
          helpText="pdf, docx, jpeg, png"
        />

        {selectedFile && (
          <div className="bg-white rounded-2xl p-4 text-sm text-black mt-4 flex justify-between items-center">
            <div className="flex-1">
              <p className="font-medium">Selected file:</p>
              <p className="text-gray-700 truncate">{selectedFile.name}</p>
              <p className="text-gray-500 text-xs mt-1">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="ml-4 text-grey-600 hover:text-grey-800 font-bold text-xl"
              aria-label="Remove file"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* Fixed footer button */}
      <div
        className="
          fixed bottom-0 left-0 right-0 bg-[#FCC40B] px-4 py-4 shadow-lg w-full
          md:static md:bg-transparent md:shadow-none md:mt-6
        "
      >
        <div className="max-w-md mx-auto w-full">
          <AuthButton
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            variant="secondary"
          >
            {isLoading ? "Uploading..." : "Finish"}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};
