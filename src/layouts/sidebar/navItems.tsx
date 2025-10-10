import {
  PhoneCall,
  History,
  User2,
  FileText,
  Info,
  LogOut,
} from "lucide-react";

const navItems = [
  {
    path: "/settings/contactus",
    icon: <PhoneCall className="w-5 h-5" />,
    label: "Contact Us",
  },
  {
    path: "/settings/workhistory",
    icon: <History className="w-5 h-5" />,
    label: "Work History",
  },
  {
    path: "/settings/editprofile",
    icon: <User2 className="w-5 h-5" />,
    label: "User Settings",
  },
  {
    path: "/settings/privacypolicy",
    icon: <FileText className="w-5 h-5" />,
    label: "Privacy Policy",
  },
  {
    path: "/settings/terms",
    icon: <FileText className="w-5 h-5" />,
    label: "Terms And Conditions",
  },
  {
    path: "/settings/about",
    icon: <Info className="w-5 h-5" />,
    label: "About",
  },
  {
    path: "/logout",
    icon: <LogOut className="w-5 h-5" />,
    label: "Logout",
  },
];

export default navItems;
