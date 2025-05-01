import React, { useState } from "react";
import ContactUs from "@/components/settings/contactUs";
import WorkHistory from "@/components/settings/WorkHistory";
import EditProfile from "@/components/settings/EditProfile";
import ChangePassword from "@/components/settings/ChangePassword";
import PrivacyPolicy from "@/components/settings/PrivacyPolicy";
import About from "@/components/settings/About";
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
    <>
      <div className="text-xs md:text-lg text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap">
          {tabs.map((tab) => (
            <li key={tab.key} className="flex-1">
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-center font-bold py-4 rounded-t-lg border-b-2 transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "text-black border-black"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        {activeTab === "contactus" && <ContactUs />}
        {activeTab === "workhistory" && <WorkHistory />}
        {activeTab === "editprofile" && <EditProfile />}
        {activeTab === "changepassword" && <ChangePassword />}
        {activeTab === "privacypolicy" && <PrivacyPolicy />}
        {activeTab === "about" && <About />}
      </div>
    </>
  );
}

export default Index;
