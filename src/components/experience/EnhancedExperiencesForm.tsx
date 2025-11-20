import { useState, useEffect } from "react";
import { Company } from "@/mocks/companies.mock";
import ExperienceModal from "./ExperienceModal";

interface EnhancedExperiencesFormProps {
  onNext: (selectedExperiences: string[]) => void;
  company: Company;
  onDataChange?: (hasData: boolean) => void;
}

const EnhancedExperiencesForm = ({ onNext, company, onDataChange }: EnhancedExperiencesFormProps) => {
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [modalExperience, setModalExperience] = useState<string | null>(null);

  // Notify parent about data changes
  useEffect(() => {
    onDataChange?.(selectedExperiences.length > 0);
  }, [selectedExperiences, onDataChange]);

  const handleExperienceClick = (experience: string) => {
    const subOptions = company.experienceSubOptions[experience];
    
    if (subOptions && subOptions.length > 0) {
      // Show modal for experiences with sub-options
      setModalExperience(experience);
    } else {
      // Direct toggle for experiences without sub-options
      toggleExperience(experience);
    }
  };

  const toggleExperience = (experience: string) => {
    setSelectedExperiences(prev => 
      prev.includes(experience)
        ? prev.filter(exp => exp !== experience)
        : [...prev, experience]
    );
  };

  const handleModalSave = (subExperiences: string[]) => {
    if (modalExperience) {
      // Remove any existing selections for this main experience
      const filteredExperiences = selectedExperiences.filter(exp => 
        exp !== modalExperience && !exp.startsWith(`${modalExperience} - `)
      );
      
      const newExperiences = new Set(filteredExperiences);
      
      if (subExperiences.length > 0) {
        // Add main experience
        newExperiences.add(modalExperience);
        
        // Add selected sub-experiences
        subExperiences.forEach(sub => {
          newExperiences.add(`${modalExperience} - ${sub}`);
        });
      }
      
      setSelectedExperiences(Array.from(newExperiences));
    }
    setModalExperience(null);
  };

  const isExperienceSelected = (experience: string) => {
    return selectedExperiences.some(exp => 
      exp === experience || exp.startsWith(`${experience} - `)
    );
  };


  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-4 pb-6">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-center text-base font-semibold mb-4">
          Please Select Your Past Experiences for {company.name}
        </h2>
        <div className="space-y-6">
          {company.experienceCategories.map((cat, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-sm font-bold">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.options.map((opt: string, j: number) => {
                  const isSelected = isExperienceSelected(opt);
                  const hasSubOptions = company.experienceSubOptions[opt]?.length > 0;
                  
                  return (
                    <button
                      key={j}
                      type="button"
                      onClick={() => handleExperienceClick(opt)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                        isSelected
                          ? "bg-black text-[#FCC40B]"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                    >
                      <span>{opt}</span>
                      {hasSubOptions && <span>›</span>}
                      
                      {/* Red Cross for Removing - Inside the button */}
                      {isSelected && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Remove main experience and all sub-experiences
                            setSelectedExperiences(prev => 
                              prev.filter(exp => exp !== opt && !exp.startsWith(`${opt} - `))
                            );
                          }}
                          className="w-3 h-3 bg-red-500 text-white rounded-full text-[10px] font-bold hover:bg-red-600 transition-colors flex items-center justify-center ml-auto"
                          aria-label={`Remove ${opt}`}
                        >
                          ×
                        </button>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Count */}
        {selectedExperiences.length > 0 && (
          <div className="text-center text-sm text-gray-600 mt-6">
            {selectedExperiences.length} experience(s) selected
          </div>
        )}


        {/* Experience Modal */}
        {modalExperience && (
          <ExperienceModal
            isOpen={!!modalExperience}
            onClose={() => setModalExperience(null)}
            experienceTitle={modalExperience}
            subExperiences={company.experienceSubOptions[modalExperience] || []}
            onSave={handleModalSave}
          />
        )}
      </div>
    </div>
  );
};

export default EnhancedExperiencesForm;