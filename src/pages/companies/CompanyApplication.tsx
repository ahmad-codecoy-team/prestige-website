import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TermsAndConditionsForm } from "../signup/TermsAndConditionsForm";
import { Company } from "@/mocks/companies.mock";
import CompanyApplicationLayout from "@/layouts/CompanyApplicationLayout";
import EnhancedExperiencesForm from "@/components/experience/EnhancedExperiencesForm";
import CompanyFormsUpload from "@/components/forms/CompanyFormsUpload";
import toast from "react-hot-toast";

interface CompanyApplicationFormData {
  personalInfo: Record<string, unknown>;
  experiences: string[];
  termsAccepted: boolean;
  formFiles: {
    i9File?: File;
    w9File?: File;
  };
}

const CompanyApplication = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canProceedStep1, setCanProceedStep1] = useState(false);
  const [canProceedStep2, setCanProceedStep2] = useState(false);
  const [formData, setFormData] = useState<CompanyApplicationFormData>({
    personalInfo: {},
    experiences: [],
    termsAccepted: false,
    formFiles: {},
  });

  const steps = [
    { title: "Your\nExperiences" },
    { title: "I-9 form/\nW-9 form" },
    { title: "Terms and\nConditions" }
  ];

  useEffect(() => {
    // Get selected company from localStorage
    const companyData = localStorage.getItem('selected-company');
    if (companyData) {
      setSelectedCompany(JSON.parse(companyData));
    } else {
      // No company selected, redirect to companies list
      navigate('/companies');
    }
  }, [navigate]);

  const handleNextStep = async () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call for company application
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store application data
      const applicationData = {
        company: selectedCompany,
        formData,
        appliedAt: new Date().toISOString(),
      };
      
      // Get existing applications
      const existingApplications = JSON.parse(
        localStorage.getItem('company-applications') || '[]'
      );
      
      // Add new application
      existingApplications.push(applicationData);
      localStorage.setItem('company-applications', JSON.stringify(existingApplications));
      
      // Set flag to show profile under review modal
      localStorage.setItem('profile-under-review', 'true');
      
      // Clean up selected company
      localStorage.removeItem('selected-company');
      
      toast.success(`Successfully applied to ${selectedCompany?.name}!`);
      navigate('/home');
    } catch {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <EnhancedExperiencesForm 
            company={selectedCompany}
            onNext={(experiences) => {
              setFormData(prev => ({ ...prev, experiences }));
              handleNextStep();
            }}
            onDataChange={setCanProceedStep1}
          />
        );
      case 2:
        return selectedCompany ? (
          <CompanyFormsUpload 
            company={selectedCompany}
            onComplete={(files) => {
              setFormData(prev => ({ ...prev, formFiles: files }));
            }}
            onDataChange={setCanProceedStep2}
          />
        ) : null;
      case 3:
        return (
          <TermsAndConditionsForm 
            onNext={() => {
              setFormData(prev => ({ ...prev, termsAccepted: true }));
              // Don't auto-advance, let user click Submit
            }} 
          />
        );
      default:
        return (
          <EnhancedExperiencesForm 
            company={selectedCompany}
            onNext={(experiences) => {
              setFormData(prev => ({ ...prev, experiences }));
              handleNextStep();
            }}
            onDataChange={setCanProceedStep1}
          />
        );
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return canProceedStep1;
      case 2:
        return canProceedStep2;
      case 3:
        return formData.termsAccepted;
      default:
        return false;
    }
  };

  if (!selectedCompany) {
    return (
      <div className="min-h-screen bg-[#FCC40B] flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-black mb-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <CompanyApplicationLayout
      company={selectedCompany}
      currentStep={currentStep}
      steps={steps}
      onBack={handleBackStep}
      onNext={handleNextStep}
      onSubmit={handleSubmit}
      isLastStep={currentStep === steps.length}
      nextDisabled={!canProceed()}
      isSubmitting={isSubmitting}
    >
      {renderStepContent()}
    </CompanyApplicationLayout>
  );
};

export default CompanyApplication;