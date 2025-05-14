import { BsChat, BsQrCodeScan } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

import { FaHome } from "react-icons/fa";

const navItems = [
  { path: "/home", icon: <FaHome size={24} />, label: "Home" },
  { path: "/chat", icon: <BsChat size={24} />, label: "Chat" },
  // { path: "/grid", icon: <BsQrCodeScan size={24} />, label: "Grid" },
  { path: "/settings", icon: <FiSettings size={24} />, label: "Settings" },
];

export default navItems;
