import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { RiPictureInPictureExitFill } from "react-icons/ri";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef: any = useRef(null);

  // Format path for breadcrumb-style title
  const formattedPath =
    path
      .split("/")
      .filter(Boolean)
      .map((segment) =>
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      )
      .join(" > ") || "Home";

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("prestige-website");
    navigate("/");
    // Add logout logic here
  };

  return (
    <header className="flex justify-between items-center p-4 relative">
      <div className="text-lg font-semibold text-gray-700 ml-5">
        {formattedPath}
      </div>
      <div className="relative" ref={dropdownRef}>
        <img
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-12 h-12 p-1 rounded-full cursor-pointer"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="User avatar"
        />

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-md z-10">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <RiPictureInPictureExitFill />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
