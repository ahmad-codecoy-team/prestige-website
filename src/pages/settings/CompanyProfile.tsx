import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Company } from "@/mocks/companies.mock";
import CompanyApplicationLayout from "@/layouts/CompanyApplicationLayout";
import EnhancedExperiencesForm from "@/components/experience/EnhancedExperiencesForm";
import CompanyFormsUpload from "@/components/forms/CompanyFormsUpload";

interface CompanyProfileFormData {
  experiences: string[];
  formFiles: {
    i9File?: File;
    w9File?: File;
  };
}

const CompanyProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canProceedStep1, setCanProceedStep1] = useState(false);
  const [canProceedStep2, setCanProceedStep2] = useState(false);
  const [formData, setFormData] = useState<CompanyProfileFormData>({
    experiences: [],
    formFiles: {},
  });

  useEffect(() => {
    // Get the selected company from localStorage
    const companyData = localStorage.getItem("selected-company-edit");
    if (companyData) {
      try {
        const company = JSON.parse(companyData);
        setSelectedCompany(company);
        // Load existing form data for this company if available
        // For now, we'll start with empty data, but you could load from API
      } catch (error) {
        console.error("Failed to parse company data:", error);
        navigate("/settings/onboarding-documents");
      }
    } else {
      navigate("/settings/onboarding-documents");
    }
  }, [navigate]);

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate("/settings/onboarding-documents");
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // TODO: Submit updated profile data to API
      console.log("Updated company profile:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Navigate back to onboarding documents list
      navigate("/settings/onboarding-documents");
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextClick = () => {
    if (canProceed()) {
      handleNextStep();
    }
  };

  const handleBackClick = () => {
    handlePrevStep();
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return canProceedStep1;
      case 2:
        return canProceedStep2;
      default:
        return false;
    }
  };

  const renderCurrentStep = () => {
    if (!selectedCompany) return null;

    switch (currentStep) {
      case 1:
        return (
          <EnhancedExperiencesForm
            company={selectedCompany}
            onNext={(experiences) => {
              setFormData((prev) => ({ ...prev, experiences }));
              handleNextStep();
            }}
            onDataChange={setCanProceedStep1}
          />
        );
      case 2:
        return (
          <CompanyFormsUpload
            company={selectedCompany}
            onComplete={(files) => {
              setFormData((prev) => ({ ...prev, formFiles: files }));
            }}
            onDataChange={setCanProceedStep2}
          />
        );
      default:
        return (
          <EnhancedExperiencesForm
            company={selectedCompany}
            onNext={(experiences) => {
              setFormData((prev) => ({ ...prev, experiences }));
              handleNextStep();
            }}
            onDataChange={setCanProceedStep1}
          />
        );
    }
  };

  if (!selectedCompany) {
    return <div>Loading...</div>;
  }

  const isLastStep = currentStep === 2;

  const steps = [{ title: "Edit Experiences" }, { title: "Update Documents" }];

  return (
    <CompanyApplicationLayout
      company={selectedCompany}
      currentStep={currentStep}
      steps={steps}
      onBack={handleBackClick}
      onNext={currentStep < 2 ? handleNextClick : undefined}
      onSubmit={currentStep === 2 ? handleSubmit : undefined}
      isLastStep={isLastStep}
      nextDisabled={!canProceed()}
      isSubmitting={isSubmitting}
      isEditing={true}
    >
      {renderCurrentStep()}
    </CompanyApplicationLayout>
  );
};

export default CompanyProfile;
