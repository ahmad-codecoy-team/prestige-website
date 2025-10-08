import { useState } from "react";
import { FiCamera } from "react-icons/fi";

interface ProfilePhotoUploadProps {
  onChange?: (file: File | null) => void;
  value?: string | null;
}

export const ProfilePhotoUpload = ({ onChange, value }: ProfilePhotoUploadProps) => {
  const [preview, setPreview] = useState<string | null>(value || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange?.(file);
    }
  };

  return (
    <div className="flex justify-center mb-3">
      <div className="relative">
        <label htmlFor="profile-photo" className="cursor-pointer group">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white overflow-hidden border-4 border-white shadow-lg transition-transform group-hover:scale-105">
            {preview ? (
              <img src={preview} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Add Photo</span>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 right-0 w-7 h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
            <FiCamera className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
          </div>
        </label>
        <input
          id="profile-photo"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};
