import { useState } from "react";
import { ProfilePhotoUpload } from "@/components/auth/ProfilePhotoUpload";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthButton } from "@/components/auth/AuthButton";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiMap,
} from "react-icons/fi";
import { BsShieldLock } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import { EXPERIENCE_CATEGORIES } from "@/constants/experiencesData";
import { FileUpload } from "@/components/auth/FileUpload";
import SettingsLayout from "./SettingsLayout";
import styles from "./EditProfile.module.css";


type TabKey = "personal" | "experiences" | "i9";

function EditProfile() {
  const [active, setActive] = useState<TabKey>("personal");

  // Personal form state (simplified; wire to API later)
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    ssn: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
  });

  // Experiences state
  const [experiences, setExperiences] = useState<string[]>([]);
  const toggleExp = (exp: string) =>
    setExperiences((prev) =>
      prev.includes(exp) ? prev.filter((x) => x !== exp) : [...prev, exp]
    );

  // I9 upload state
  const [i9File, setI9File] = useState<File | null>(null);

  const MobileTabsHeader = (
    <div className="lg:hidden bg-black text-white sticky top-[56px] z-30">
      <div className="flex items-center justify-around border-b border-white/10">
        {[
          { k: "personal", label: "Personal Information" },
          { k: "experiences", label: "Experiences" },
          { k: "i9", label: "I9 Form" },
        ].map((t) => {
          const is = active === (t.k as TabKey);
          return (
            <button
              key={t.k}
              onClick={() => setActive(t.k as TabKey)}
              className={`relative py-3 text-xs font-semibold tracking-wide ${
                is ? "text-white" : "text-white/70"
              }`}
            >
              {t.label}
              {is && (
                <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-white rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  const Footer = (
    <div className="sticky bottom-0 bg-[#FCC40B] border-t border-black/10">
      <div className="w-full max-w-lg mx-auto px-4 py-4">
        <AuthButton variant="secondary">Update</AuthButton>
      </div>
    </div>
  );

  const PersonalTab = (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-4 pb-6">
      <div className="w-full max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <ProfilePhotoUpload />
        </div>
        <div className="flex flex-col gap-3">
        <AuthInput
          placeholder="First Name"
          value={personal.firstName}
          onChange={(e) => setPersonal({ ...personal, firstName: e.target.value })}
          icon={<FiUser className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          placeholder="Last Name"
          value={personal.lastName}
          onChange={(e) => setPersonal({ ...personal, lastName: e.target.value })}
          icon={<FiUser className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          type="email"
          placeholder="Email"
          value={personal.email}
          onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
          icon={<FiMail className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          type="tel"
          placeholder="Phone Number"
          value={personal.phoneNumber}
          onChange={(e) => setPersonal({ ...personal, phoneNumber: e.target.value })}
          icon={<FiPhone className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          type="date"
          placeholder="Date of Birth"
          value={personal.dateOfBirth}
          onChange={(e) => setPersonal({ ...personal, dateOfBirth: e.target.value })}
          icon={<FiCalendar className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          placeholder="SSN"
          value={personal.ssn}
          onChange={(e) => setPersonal({ ...personal, ssn: e.target.value })}
          icon={<BsShieldLock className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          placeholder="Address"
          value={personal.address}
          onChange={(e) => setPersonal({ ...personal, address: e.target.value })}
          icon={<FiMapPin className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          placeholder="State"
          value={personal.state}
          onChange={(e) => setPersonal({ ...personal, state: e.target.value })}
          icon={<BiBuilding className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          placeholder="City"
          value={personal.city}
          onChange={(e) => setPersonal({ ...personal, city: e.target.value })}
          icon={<BiBuilding className="w-5 h-5 text-gray-400" />}
        />
        <AuthInput
          placeholder="Zip Code"
          value={personal.zipCode}
          onChange={(e) => setPersonal({ ...personal, zipCode: e.target.value })}
          icon={<FiMap className="w-5 h-5 text-gray-400" />}
        />
        </div>
      </div>
    </div>
  );

  const ExperiencesTab = (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-4 pb-6">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-center text-base font-semibold mb-4">
        Please Select Your Past Experiences
      </h2>
      <div className="space-y-6">
        {EXPERIENCE_CATEGORIES.map((cat, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-sm font-bold">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.options.map((opt: string, j: number) => {
                const isSel = experiences.includes(opt);
                return (
                  <button
                    key={j}
                    type="button"
                    onClick={() => toggleExp(opt)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      isSel
                        ? "bg-black text-[#FCC40B]"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );

  const I9Tab = (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-4 pb-6">
      <div className="w-full max-w-lg mx-auto">
        <FileUpload
        onFileSelect={(f) => setI9File(f)}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        label="Upload I9 Form"
        helpText={i9File ? i9File.name : "pdf, docx, jpeg, png"}
      />
      </div>
    </div>
  );

  return (
    <SettingsLayout title="Profile">
      {MobileTabsHeader}
      
      {/* Desktop Sub-tabs for Profile - visible only on lg+ screens */}
      <div className={styles.desktopTabs}>
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 flex gap-6">
          {[
            { k: "personal", label: "Personal Information" },
            { k: "experiences", label: "Experiences" },
            { k: "i9", label: "I9 Form" },
          ].map((t) => {
          const is = active === (t.k as TabKey);
          return (
            <button
              key={t.k}
              onClick={() => setActive(t.k as TabKey)}
              className={`relative pb-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                is
                  ? "text-black font-semibold"
                  : "text-black/60 hover:text-black"
              }`}
            >
              {t.label}
              {is && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black rounded-full" />
              )}
            </button>
          );
          })}
        </div>
      </div>
      
      {/* Content Area */}
      <div>
        {active === "personal" && PersonalTab}
        {active === "experiences" && ExperiencesTab}
        {active === "i9" && I9Tab}
      </div>
      {Footer}
    </SettingsLayout>
  );
}

export default EditProfile;
