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
import SettingsLayout from "./SettingsLayout";

function EditProfile() {
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

  const Footer = (
    <div className="sticky bottom-0 bg-[#FCC40B] border-t border-black/10">
      <div className="w-full max-w-lg mx-auto px-4 py-4">
        <AuthButton variant="secondary">Update</AuthButton>
      </div>
    </div>
  );

  return (
    <SettingsLayout title="Profile">
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
      {Footer}
    </SettingsLayout>
  );
}

export default EditProfile;
