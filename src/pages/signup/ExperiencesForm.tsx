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
    if (selectedExperiences.includes(experience)) {
      setSelectedExperiences(
        selectedExperiences.filter((item) => item !== experience)
      );
    } else {
      setSelectedExperiences([...selectedExperiences, experience]);
    }
  };

  const handleSubmit = async () => {
    if (selectedExperiences.length === 0) {
      toast.error("Please select at least one experience");
      return;
    }

    setIsLoading(true);
    try {
      // Mock API call - replace with actual API later
      console.log("Selected experiences:", selectedExperiences);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Experiences saved successfully!");
      // Navigate to next step
      onNext(selectedExperiences);
    } catch (err) {
      console.log(err);
      toast.error("Failed to save experiences");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-[#FFD700] rounded-3xl p-6 md:p-8 w-full">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-black text-center">
        Please Select Your Past Experiences
      </h2>

      {/* Categories */}
      <div className="space-y-6 max-h-[65vh] overflow-y-auto px-2 scrollbar-thin">
        {EXPERIENCE_CATEGORIES.map((category, index) => (
          <div key={index} className="space-y-2.5">
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
                    className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-black text-[#FFD700]"
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

      {/* Submit Button */}
      <AuthButton
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full mt-2"
      >
        {isLoading ? "Saving..." : "Next"}
      </AuthButton>

      {/* Sign in Link */}
      <p className="text-center text-black text-sm">
        Already have an account?{" "}
        <a href="/login" className="font-bold hover:underline">
          Sign in
        </a>
      </p>
    </div>
  );
};
