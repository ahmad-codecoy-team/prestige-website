import { useState } from "react";
import ContactUs from "@/pages/settings/ContactUs";
import WorkHistory from "@/pages/settings/WorkHistory";
import EditProfile from "@/pages/settings/EditProfile";
import ChangePassword from "@/pages/settings/ChangePassword";
import PrivacyPolicy from "@/pages/settings/PrivacyPolicy";
import About from "@/pages/settings/About";
// import other components when needed

function Index() {
  const tabs = [
    { key: "contactus", label: "Contact Us" },
    { key: "workhistory", label: "Work History" },
    { key: "editprofile", label: "Edit Profile" },
    { key: "changepassword", label: "Change Password" },
    { key: "privacypolicy", label: "Privacy Policy" },
    { key: "about", label: "About" },
  ];

  const [activeTab, setActiveTab] = useState("contactus");

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="text-xs sm:text-sm md:text-base text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap">
          {tabs.map((tab) => (
            <li key={tab.key} className="flex-1">
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-center font-bold py-3 sm:py-4 rounded-t-lg border-b-2 transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "text-black border-black"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                <span className="block sm:hidden text-xs">
                  {tab.label.split(' ')[0]}
                </span>
                <span className="hidden sm:block">
                  {tab.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 sm:mt-6">
        {activeTab === "contactus" && <ContactUs />}
        {activeTab === "workhistory" && <WorkHistory />}
        {activeTab === "editprofile" && <EditProfile />}
        {activeTab === "changepassword" && <ChangePassword />}
        {activeTab === "privacypolicy" && <PrivacyPolicy />}
        {activeTab === "about" && <About />}
      </div>
    </div>
  );
}

export default Index;
