import React, { useState } from "react";

function Experiences() {
  const [selectedExperiences, setSelectedExperiences] = useState<any>([]);

  const categories = [
    {
      name: "General",
      options: [
        "Stagehand",
        "AV Tech",
        "Truck Loader / Pusher",
        "Dept Head: Leads",
      ],
    },
    {
      name: "Audio",
      options: [
        "A1 Audio Engineer",
        "A2 Audio Engineer",
        "A3 Audio Technician",
        "Wireless Frequency Coordinator",
        "Line Array Systems",
      ],
    },
    {
      name: "Video",
      options: [
        "V1 - Video Engineer",
        "V2 - Video Technician",
        "E2 / E3 Operator",
        "Video Shader",
        "Record Operator",
        "Graphics (GFX) Operator",
        "Playback Operator",
        "Teleprompter Operator",
        "Technical Director - HD Bay",
        "Spyder Operator",
        "Streaming Technician",
        "Projectionist",
      ],
    },
    {
      name: "Lighting",
      options: [
        "LD - Lighting Director",
        "L1 Lighting Engineer",
        "L1 Lighting Technician",
        "ME - Master Electrician",
        "Spot Operator",
      ],
    },
    {
      name: "Camera",
      options: [
        "Camera Operator",
        "Camera Operator - Long Lens",
        "Camera Operator - Short Lens",
        "Camera Operator - Handheld",
      ],
    },
    {
      name: "LED",
      options: ["LED Technician / Wall Assist", "LED Engineer"],
    },
  ];

  const toggleExperience = (experience: any) => {
    if (selectedExperiences.includes(experience)) {
      setSelectedExperiences(
        selectedExperiences.filter((item: any) => item !== experience)
      );
    } else {
      setSelectedExperiences([...selectedExperiences, experience]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-medium text-center mb-6">
        Please Select Your Past Experiences
      </h2>

      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-medium mb-2">{category.name}</h3>
            <div className="flex flex-wrap gap-2 ">
              {category.options.map((option, optIndex) => {
                const isSelected = selectedExperiences.includes(option);

                return (
                  <button
                    key={optIndex}
                    className={`px-3 py-2 rounded text-sm transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-black text-accent"
                        : "bg-white border border-gray-300"
                    } hover:bg-opacity-90`}
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
  );
}

export default Experiences;
