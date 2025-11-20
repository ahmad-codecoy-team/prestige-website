import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MapPin } from "lucide-react";
import { Company } from "@/mocks/companies.mock";
import CompanyLogo from "@/components/ui/CompanyLogo";

interface Step {
  id: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface CompanyApplicationLayoutProps {
  children: ReactNode;
  company: Company;
  currentStep: number;
  steps: { title: string }[];
  onBack: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  isLastStep?: boolean;
  nextDisabled?: boolean;
  isSubmitting?: boolean;
}

const CompanyApplicationLayout = ({
  children,
  company,
  currentStep,
  steps,
  onBack,
  onNext,
  onSubmit,
  isLastStep = false,
  nextDisabled = false,
  isSubmitting = false,
}: CompanyApplicationLayoutProps) => {
  const navigate = useNavigate();

  const stepsData: Step[] = steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    isActive: index + 1 === currentStep,
    isCompleted: index + 1 < currentStep,
  }));

  // Mock company contact data (in real app this would come from company data)
  const companyContact = {
    email: `${company.name.toLowerCase().replace(/\s+/g, "")}@gmail.com`,
    phone: "+34567845690",
    address: "65 Charlotte Rd, Hackney, London",
  };

  const handleBackClick = () => {
    if (currentStep === 1) {
      navigate("/companies");
    } else {
      onBack();
    }
  };

  const handleNextClick = () => {
    if (isLastStep && onSubmit) {
      onSubmit();
    } else if (onNext) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen bg-[#FCC40B]">
      {/* Mobile Header */}
      <header className="lg:hidden bg-black text-white sticky top-0 z-50">
        <div className="w-full max-w-lg mx-auto px-4 py-4">
          <div className="flex gap-4 items-start">
            {/* Back Button */}
            <button
              onClick={handleBackClick}
              className="text-white hover:text-gray-300 transition-colors mt-2"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Company Info */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* Logo + Name + Email */}
              <div className="flex items-center gap-3 mb-3">
                <CompanyLogo
                  name={company.name}
                  logo={company.logo}
                  size="sm"
                />
                <div className="min-w-0 flex-1">
                  <h1 className="text-base font-semibold truncate">{company.name}</h1>
                  <p className="text-gray-400 text-xs truncate">
                    {company.contact?.email || companyContact.email}
                  </p>
                </div>
              </div>

              {/* Phone + Address */}
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{company.contact?.phone || companyContact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{company.contact?.address || companyContact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-black text-white sticky top-0 z-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6">
          <div className="flex gap-6 items-start">
            {/* Back Button */}
            <button
              onClick={handleBackClick}
              className="text-white hover:text-gray-300 transition-colors mt-3"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Company Info */}
            <div className="flex flex-col flex-1">
              {/* Logo + Name + Email */}
              <div className="flex items-center gap-4 mb-4">
                <CompanyLogo
                  name={company.name}
                  logo={company.logo}
                  size="md"
                />
                <div>
                  <h1 className="text-xl font-semibold">{company.name}</h1>
                  <p className="text-gray-400 text-sm">
                    {company.contact?.email || companyContact.email}
                  </p>
                </div>
              </div>

              {/* Phone + Address */}
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{company.contact?.phone || companyContact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{company.contact?.address || companyContact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stepper Section */}
      <div className="bg-[#FCC40B] sticky top-[76px] lg:top-[96px] z-40">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-4 md:pt-8 pb-4 md:pb-6">
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex justify-between items-start gap-2">
              {stepsData.map((step) => (
                <div key={step.id} className="flex-1">
                  {/* Step Title */}
                  <div className="text-center mb-3">
                    <p className="text-black text-xs md:text-sm font-medium leading-tight px-1">
                      {step.title}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        step.isCompleted || step.isActive
                          ? "bg-black w-full"
                          : "bg-transparent w-0"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-h-0 pb-24" style={{ paddingTop: '1rem' }}>
        {children}
      </main>

      {/* Footer Buttons */}
      <div className="bg-[#FCC40B] sticky bottom-0 z-40 border-t border-black/10">
        <div className="w-full max-w-lg mx-auto px-4 py-4">
          <div className="flex gap-3">
            {/* Back Button - Only show on step 2 and beyond */}
            {currentStep > 1 && (
              <button
                onClick={handleBackClick}
                className="flex-1 bg-[#FCC40B] border-2 border-black text-black py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-black hover:text-[#FCC40B] transition-colors"
              >
                Back
              </button>
            )}

            {/* Next/Submit Button */}
            <button
              onClick={handleNextClick}
              disabled={nextDisabled || isSubmitting}
              className={`bg-black text-[#FCC40B] py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                currentStep === 1 ? 'w-full' : 'flex-1'
              }`}
            >
              {isSubmitting ? "Submitting..." : isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyApplicationLayout;
