import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import { COMPANIES_MOCK, Company } from "@/mocks/companies.mock";
import CompanyLogo from "@/components/ui/CompanyLogo";
import SettingsLayout from "./SettingsLayout";

const OnboardingDocuments = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter companies to show only those where user has profiles
  // For now showing all companies, but you can filter based on actual user data
  const filteredCompanies = COMPANIES_MOCK.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditCompanyProfile = (company: Company) => {
    // Store selected company and navigate to company profile editing flow
    localStorage.setItem('selected-company-edit', JSON.stringify(company));
    navigate('/settings/company-profile');
  };

  return (
    <SettingsLayout title="Onboarding Documents">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-4 pb-6">
        <div className="w-full max-w-md mx-auto">
          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-lg text-black font-medium">
              Manage your company profiles and documents
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
            />
          </div>

          {/* Companies List */}
          <div className="space-y-3">
            {filteredCompanies.map((company) => (
              <div key={company.id} className="relative w-full flex items-center gap-3">
                {/* Company Logo */}
                <div className="flex items-center h-full">
                  <CompanyLogo 
                    name={company.name}
                    logo={company.logo}
                    size="md"
                  />
                </div>

                {/* Company Card */}
                <div className="flex-1 bg-white rounded-xl shadow-md px-4 py-3 border border-gray-200 flex items-center justify-between">
                  {/* Company Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-[15px] text-black leading-snug break-words">
                      {company.name}
                    </h3>
                    {company.description && (
                      <p className="text-gray-500 text-[12px] mt-1 leading-tight break-words">
                        {company.description}
                      </p>
                    )}
                  </div>

                  {/* Right Arrow Button */}
                  <button
                    onClick={() => handleEditCompanyProfile(company)}
                    className="shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label={`Edit ${company.name} profile`}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-700 text-lg">
                No companies found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>
    </SettingsLayout>
  );
};

export default OnboardingDocuments;