import { useState } from "react";
import { X } from "lucide-react";
import ResponsiveModal from "@/components/ui/ResponsiveModal";

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experienceTitle: string;
  subExperiences: string[];
  onSave: (selectedItems: string[]) => void;
}

const ExperienceModal = ({
  isOpen,
  onClose,
  experienceTitle,
  subExperiences,
  onSave,
}: ExperienceModalProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (item: string) => {
    setSelectedItems(prev => 
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const handleSave = () => {
    onSave(selectedItems);
    setSelectedItems([]);
    onClose();
  };

  const handleClose = () => {
    setSelectedItems([]);
    onClose();
  };

  return (
    <ResponsiveModal
      open={isOpen}
      onClose={handleClose}
      ariaLabel={`${experienceTitle} Selection`}
      cardClassName="bg-white max-h-[80vh] overflow-hidden flex flex-col"
      desktopMaxWidthClass="md:max-w-lg"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black">{experienceTitle}</h2>
          <button
            onClick={handleClose}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <p className="text-sm text-gray-600 mb-4">
            Select your specific experiences in {experienceTitle}:
          </p>
          <div className="flex flex-wrap gap-2">
            {subExperiences.map((item, index) => {
              const isSelected = selectedItems.includes(item);
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleSelection(item)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-black text-[#FCC40B]"
                      : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <span>{item}</span>
                  
                  {/* Red Cross for Removing - Inside the button */}
                  {isSelected && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelection(item);
                      }}
                      className="w-3 h-3 bg-red-500 text-white rounded-full text-[10px] font-bold hover:bg-red-600 transition-colors flex items-center justify-center ml-auto"
                      aria-label={`Remove ${item}`}
                    >
                      ×
                    </button>
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Selected Count */}
          {selectedItems.length > 0 && (
            <div className="text-center text-sm text-gray-600 mt-4">
              {selectedItems.length} sub-experience(s) selected
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="w-full bg-black text-[#FCC40B] py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </ResponsiveModal>
  );
};

export default ExperienceModal;