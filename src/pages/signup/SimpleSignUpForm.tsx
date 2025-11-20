import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Calendar, Phone, Lock, Eye, EyeOff, MapPin, Building } from "lucide-react";
import { AuthInput } from "@/components/auth/AuthInput";
import { BackButton } from "@/components/auth/BackButton";
import { Checkbox } from "@/components/auth/Checkbox";
import { ProfilePhotoUpload } from "@/components/auth/ProfilePhotoUpload";
import { US_STATES } from "@/constants/signupData";
import toast from "react-hot-toast";

const SimpleSignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setProfilePhoto] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    state: "",
    city: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store user data in localStorage for now (since using mock data)
      localStorage.setItem('prestige-token', 'mock-token');
      localStorage.setItem('user-signup-completed', 'true');
      
      toast.success("Account created successfully!");
      navigate("/home");
    } catch {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCC40B] flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="max-w-lg mx-auto w-full">
          <div className="flex items-center px-4 py-6 relative">
            <BackButton onClick={() => navigate("/")} />
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-black">
              Create Account
            </h1>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 w-full max-w-4xl mx-auto overflow-hidden">
        <div className="max-w-lg mx-auto w-full px-4 pb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Photo */}
            <div className="flex flex-col items-center mb-6">
              <ProfilePhotoUpload onChange={(file) => setProfilePhoto(file ? URL.createObjectURL(file) : null)} />
              <h2 className="text-3xl font-bold text-black mt-4 mb-2">Sign up</h2>
              <p className="text-gray-700">Please create your profile</p>
            </div>

            {/* First Name */}
            <AuthInput
              label="First Name"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              error={errors.firstName}
              icon={<User className="w-5 h-5 text-gray-400" />}
            />

            {/* Last Name */}
            <AuthInput
              label="Last Name"
              placeholder="Smith"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              error={errors.lastName}
              icon={<User className="w-5 h-5 text-gray-400" />}
            />

            {/* Email */}
            <AuthInput
              label="Email"
              type="email"
              placeholder="johnsmith@gmail.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              error={errors.email}
              icon={<Mail className="w-5 h-5 text-gray-400" />}
            />

            {/* Date of Birth */}
            <AuthInput
              label="Date of Birth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              error={errors.dateOfBirth}
              icon={<Calendar className="w-5 h-5 text-gray-400" />}
            />

            {/* Phone Number */}
            <AuthInput
              label="Phone Number"
              type="tel"
              placeholder="+345678990"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              error={errors.phoneNumber}
              icon={<Phone className="w-5 h-5 text-gray-400" />}
            />

            {/* Password */}
            <AuthInput
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              error={errors.password}
              icon={<Lock className="w-5 h-5 text-gray-400" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              }
            />

            {/* Confirm Password */}
            <AuthInput
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              error={errors.confirmPassword}
              icon={<Lock className="w-5 h-5 text-gray-400" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              }
            />

            {/* Address */}
            <AuthInput
              label="Address"
              placeholder="California, USA"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              error={errors.address}
              icon={<MapPin className="w-5 h-5 text-gray-400" />}
            />

            {/* State */}
            <div className="relative">
              <label className="text-sm text-gray-600 mb-1 block">State (List of all the states from USA)</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className="w-full py-3 md:py-4 pl-11 md:pl-12 pr-4 rounded-lg text-sm md:text-base bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20 appearance-none border-0"
                >
                  <option value="">California (CA)</option>
                  {US_STATES.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label} ({state.value})
                    </option>
                  ))}
                </select>
              </div>
              {errors.state && <div className="text-red-600 text-sm mt-1 px-2">{errors.state}</div>}
            </div>

            {/* City */}
            <AuthInput
              label="City"
              placeholder="San Francisco"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              error={errors.city}
              icon={<Building className="w-5 h-5 text-gray-400" />}
            />

            {/* Terms and Conditions */}
            <div className="pt-4">
              <Checkbox
                checked={formData.termsAccepted}
                onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                label="I agree to the terms and conditions."
              />
              {errors.termsAccepted && <div className="text-red-600 text-sm mt-1">{errors.termsAccepted}</div>}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-[#FCC40B] py-4 rounded-full text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-900 transition-colors"
              >
                {isSubmitting ? "Creating Account..." : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleSignUpForm;