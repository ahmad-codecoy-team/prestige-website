import { useState } from "react";

interface CompanyLogoProps {
  name: string;
  logo?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const getCompanyInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2) // Take only first 2 initials
    .join('');
};

const getRandomColor = (name: string): string => {
  const colors = [
    'bg-blue-500',
    'bg-green-500', 
    'bg-purple-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-teal-500',
  ];
  
  // Use company name to generate consistent color
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

const CompanyLogo = ({ name, logo, size = "md", className = "" }: CompanyLogoProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm", 
    lg: "w-12 h-12 text-base",
  };
  
  const initials = getCompanyInitials(name);
  const bgColor = getRandomColor(name);
  
  // Show fallback if no logo, image failed, or still loading
  const showFallback = !logo || imageError || !imageLoaded;
  
  return (
    <div className={`${sizeClasses[size]} rounded-full flex items-center justify-center overflow-hidden relative ${className}`}>
      {/* Fallback initials */}
      <div className={`${showFallback ? 'flex' : 'hidden'} w-full h-full ${bgColor} items-center justify-center`}>
        <span className="text-white font-bold">
          {initials}
        </span>
      </div>
      
      {/* Company logo */}
      {logo && (
        <img
          src={logo}
          alt={`${name} logo`}
          className={`${imageLoaded && !imageError ? 'block' : 'hidden'} w-full h-full object-cover absolute inset-0`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
};

export default CompanyLogo;