import {
  PhoneCall,
  History,
  User2,
  FileText,
  Info,
  LogOut,
} from "lucide-react";

export type NavItem =
  | { path: string; icon: JSX.Element; label: string; type?: "link" }
  | { id: "user-settings"; icon: JSX.Element; label: string; type: "action" };

const navItems: NavItem[] = [
  {
    id: "contact-us",
    icon: <PhoneCall className="w-5 h-5" />,
    label: "Contact Us",
    type: "action",
  },
  {
    path: "/workhistory",
    icon: <History className="w-5 h-5" />,
    label: "Work History",
    type: "link",
  },
  {
    id: "user-settings",
    icon: <User2 className="w-5 h-5" />,
    label: "User Settings",
    type: "action",
  },
  {
    path: "/settings/privacypolicy",
    icon: <FileText className="w-5 h-5" />,
    label: "Privacy Policy",
    type: "link",
  },
  {
    path: "/settings/terms",
    icon: <FileText className="w-5 h-5" />,
    label: "Terms And Conditions",
    type: "link",
  },
  {
    path: "/settings/about",
    icon: <Info className="w-5 h-5" />,
    label: "About",
    type: "link",
  },
  {
    path: "/logout",
    icon: <LogOut className="w-5 h-5" />,
    label: "Logout",
    type: "link",
  },
];

export default navItems;
