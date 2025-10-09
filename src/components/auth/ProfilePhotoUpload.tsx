import { useState } from "react";
import { FiCamera, FiUser } from "react-icons/fi";

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
    <div className="relative inline-block">
      <label htmlFor="profile-photo" className="cursor-pointer group">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-black overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
          {preview ? (
            <img src={preview} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <FiUser className="w-16 h-16 md:w-20 md:h-20 text-[#FCC40B]" />
          )}
        </div>
        <div className="absolute bottom-1 right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110 border-2 border-black">
          <FiCamera className="w-5 h-5 text-black" />
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
  );
};
