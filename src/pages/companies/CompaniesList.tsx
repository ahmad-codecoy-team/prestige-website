import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import { COMPANIES_MOCK, Company } from "@/mocks/companies.mock";
import CompanyLogo from "@/components/ui/CompanyLogo";

const CompaniesList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = COMPANIES_MOCK.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApplyToCompany = (company: Company) => {
    // Store selected company and navigate to company application flow
    localStorage.setItem('selected-company', JSON.stringify(company));
    navigate('/company-application');
  };

  return (
    <div className="min-h-screen bg-[#FCC40B] flex flex-col">
      {/* Header */}
      <div className="flex items-center px-4 py-6 relative">
        <button
          onClick={() => navigate('/home')}
          className="p-2 -ml-2 text-black hover:bg-black/10 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-black">
          List of Companies
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pb-8">
        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-lg text-black font-medium">
            To start getting work, please apply to a licensee company below.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
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
        <div className="space-y-3 max-w-md mx-auto">
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
              <div className="flex-1 bg-white rounded-xl shadow-md px-4 py-3 border border-gray-200 flex flex-col justify-center">
                <div className="flex justify-between items-center gap-3">
                  {/* Company Name */}
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

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyToCompany(company)}
                    className="shrink-0 bg-black text-[#FCC40B] px-4 py-2 rounded-full font-semibold text-[13px] hover:bg-gray-900 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
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
  );
};

export default CompaniesList;