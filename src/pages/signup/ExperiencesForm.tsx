// import { useState } from "react";
// import { AuthButton } from "@/components/auth/AuthButton";
// import { EXPERIENCE_CATEGORIES } from "@/constants/experiencesData";
// import toast from "react-hot-toast";

// interface ExperiencesFormProps {
//   onNext: (data: string[]) => void;
// }

// export const ExperiencesForm = ({ onNext }: ExperiencesFormProps) => {
//   const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const toggleExperience = (experience: string) => {
//     if (selectedExperiences.includes(experience)) {
//       setSelectedExperiences(
//         selectedExperiences.filter((item) => item !== experience)
//       );
//     } else {
//       setSelectedExperiences([...selectedExperiences, experience]);
//     }
//   };

//   const handleSubmit = async () => {
//     if (selectedExperiences.length === 0) {
//       toast.error("Please select at least one experience");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // Mock API call - replace with actual API later
//       console.log("Selected experiences:", selectedExperiences);
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       toast.success("Experiences saved successfully!");
//       // Navigate to next step
//       onNext(selectedExperiences);
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to save experiences");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col flex-1">
//       {/* Heading */}
//       <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-6">
//         Please Select Your Past Experiences
//       </h2>

//       {/* Categories */}
//       <div className="space-y-6 flex-1 overflow-visible">
//         {EXPERIENCE_CATEGORIES.map((category, index) => (
//           <div key={index} className="space-y-3">
//             <h3 className="text-base md:text-lg font-bold text-black">
//               {category.name}
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {category.options.map((option, optIndex) => {
//                 const isSelected = selectedExperiences.includes(option);

//                 return (
//                   <button
//                     key={optIndex}
//                     type="button"
//                     className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
//                       isSelected
//                         ? "bg-black text-[#FCC40B]"
//                         : "bg-white text-black hover:bg-gray-100"
//                     }`}
//                     onClick={() => toggleExperience(option)}
//                   >
//                     {option}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Submit Button */}
//       <div className="mt-auto pt-6">
//         <AuthButton
//           type="button"
//           onClick={handleSubmit}
//           disabled={isLoading}
//           variant="secondary"
//         >
//           {isLoading ? "Saving..." : "Next"}
//         </AuthButton>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { AuthButton } from "@/components/auth/AuthButton";
import { EXPERIENCE_CATEGORIES } from "@/constants/experiencesData";
import toast from "react-hot-toast";

interface ExperiencesFormProps {
  onNext: (data: string[]) => void;
}

export const ExperiencesForm = ({ onNext }: ExperiencesFormProps) => {
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleExperience = (experience: string) => {
    setSelectedExperiences((prev) =>
      prev.includes(experience)
        ? prev.filter((item) => item !== experience)
        : [...prev, experience]
    );
  };

  const handleSubmit = async () => {
    if (selectedExperiences.length === 0) {
      toast.error("Please select at least one experience");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Experiences saved successfully!");
      onNext(selectedExperiences);
    } catch {
      toast.error("Failed to save experiences");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col flex-1 h-full bg-[#FCC40B]">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-32 max-w-md mx-auto w-full">
        <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-6">
          Please Select Your Past Experiences
        </h2>

        <div className="space-y-6">
          {EXPERIENCE_CATEGORIES.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-base md:text-lg font-bold text-black">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.options.map((option, optIndex) => {
                  const isSelected = selectedExperiences.includes(option);
                  return (
                    <button
                      key={optIndex}
                      type="button"
                      className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-black text-[#FCC40B]"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                      onClick={() => toggleExperience(option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
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
            {isLoading ? "Saving..." : "Next"}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};
