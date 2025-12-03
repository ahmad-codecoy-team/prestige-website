import { useState, useCallback, useEffect } from "react";
import { Company } from "@/mocks/companies.mock";
import { FileUpload } from "@/components/auth/FileUpload";

interface CompanyFormsUploadProps {
  company: Company;
  onComplete: (files: { i9File?: File; w9File?: File }) => void;
  onDataChange?: (hasData: boolean) => void;
}

interface UploadedFiles {
  i9File?: File;
  w9File?: File;
}

const CompanyFormsUpload = ({
  company,
  onComplete,
  onDataChange,
}: CompanyFormsUploadProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({});

  const { needsI9, needsW9 } = company.formRequirements;

  const handleFileUpload = useCallback(
    (fileType: "i9" | "w9", file: File | null) => {
      setUploadedFiles((prev) => {
        const newFiles = { ...prev };
        if (file) {
          newFiles[`${fileType}File`] = file;
        } else {
          delete newFiles[`${fileType}File`];
        }

        return newFiles;
      });
    },
    []
  );

  // Check if all required files are uploaded and notify parent
  useEffect(() => {
    const hasAllRequiredFiles =
      (!needsI9 || !!uploadedFiles.i9File) &&
      (!needsW9 || !!uploadedFiles.w9File);

    onDataChange?.(hasAllRequiredFiles);

    // Update the complete callback with current files
    if (hasAllRequiredFiles) {
      onComplete(uploadedFiles);
    }
  }, [uploadedFiles, needsI9, needsW9, onDataChange, onComplete]);

  const getTitle = () => {
    if (needsI9 && needsW9) return "Upload I9 or W9 Form";
    if (needsI9) return "Upload I9 Form";
    if (needsW9) return "Upload W9 Form";
    return "Upload Forms";
  };

  const isComplete =
    (!needsI9 || !!uploadedFiles.i9File) &&
    (!needsW9 || !!uploadedFiles.w9File);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-4 pb-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-base font-semibold mb-4">
          {getTitle()}
        </h2>

        {/* Forms Grid */}
        <div className="space-y-4">
          {/* I9 Form */}
          {needsI9 && (
            <div className="space-y-3">
              <FileUpload
                onFileSelect={(file) => handleFileUpload("i9", file)}
                accept=".pdf,.doc,.docx,.jpeg,.png"
                helpText="pdf, docx, jpeg, png"
                label="I9 Form"
              />
              {uploadedFiles.i9File && (
                <div className="text-sm text-green-600 font-medium flex items-center justify-between">
                  <span>✓ {uploadedFiles.i9File.name} uploaded</span>
                  <button
                    onClick={() => handleFileUpload("i9", null)}
                    className="text-red-500 hover:text-red-600 text-xs"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          )}

          {/* W9 Form */}
          {needsW9 && (
            <div className="space-y-3">
              <FileUpload
                onFileSelect={(file) => handleFileUpload("w9", file)}
                accept=".pdf,.doc,.docx,.jpeg,.png"
                helpText="pdf, docx, jpeg, png"
                label="W9 Form"
              />
              {uploadedFiles.w9File && (
                <div className="text-sm text-green-600 font-medium flex items-center justify-between">
                  <span>✓ {uploadedFiles.w9File.name} uploaded</span>
                  <button
                    onClick={() => handleFileUpload("w9", null)}
                    className="text-red-500 hover:text-red-600 text-xs"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        {(needsI9 || needsW9) && (
          <div className="mt-8 text-center">
            <div className="text-sm text-gray-600 mb-2">Upload Progress</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    (Object.keys(uploadedFiles).length /
                      ((needsI9 ? 1 : 0) + (needsW9 ? 1 : 0))) *
                    100
                  }%`,
                }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {Object.keys(uploadedFiles).length} of{" "}
              {(needsI9 ? 1 : 0) + (needsW9 ? 1 : 0)} files uploaded
            </div>
          </div>
        )}

        {/* Success Message */}
        {isComplete && (
          <div className="text-center text-sm text-green-600 font-medium mt-6">
            All required forms have been uploaded successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyFormsUpload;
