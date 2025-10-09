import { useState } from "react";
import ScheduledShifts from "./ScheduledShifts";
import CompletedShifts from "./CompletedShifts";
import AvailableShifts from "./AvailableShifts";
import { HomeSidebar } from "@/components/home/HomeSidebar";
import { Bell, MessageSquare, Menu } from "lucide-react";

type TabKey = "bid" | "schedule" | "invoice";

const TABS: { key: TabKey; label: string }[] = [
  { key: "bid", label: "Bid" },
  { key: "schedule", label: "Schedule" },
  { key: "invoice", label: "Invoice" },
];

function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("bid");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCC40B]">
      {/* ====== Header (Top Bar) ====== */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            aria-label="Open menu"
            onClick={() => setShowSidebar(true)}
            className="p-1"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Centered App Logo */}
          <div className="flex-1 flex justify-center">
            <img
              src="/logo.svg"
              alt="AV Workforce Logo"
              className="h-6 w-auto select-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Messages" className="p-1">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button aria-label="Notifications" className="p-1">
              <Bell className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ====== Tabs ====== */}
        <div className="flex justify-center gap-16  border-white/10">
          {TABS.map((t) => {
            const isActive = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`relative py-3 text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-[2px] h-[2px] w-full bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </header>

      {/* ====== Tab Content ====== */}
      <main className="flex-1 w-full">
        <div className="max-w-5xl mx-auto px-3 py-4 md:px-8">
          {activeTab === "bid" && <AvailableShifts />}
          {activeTab === "schedule" && <ScheduledShifts />}
          {activeTab === "invoice" && <CompletedShifts />}
        </div>
      </main>

      {/* ====== Sidebar ====== */}
      <HomeSidebar open={showSidebar} onClose={() => setShowSidebar(false)} />
    </div>
  );
}

export default Home;

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// import { useState } from "react";
// import ScheduledShifts from "./ScheduledShifts";
// import CompletedShifts from "./CompletedShifts";
// import AvailableShifts from "./AvailableShifts";
// import { HomeSidebar } from "@/components/home/HomeSidebar";
// import { Bell, MessageSquare, Menu } from "lucide-react";
// import FallbackContent from "@/components/ui/FallbackContent"; // Import fallback UI

// type TabKey = "bid" | "schedule" | "invoice";

// const TABS: { key: TabKey; label: string }[] = [
//   { key: "bid", label: "Bid" },
//   { key: "schedule", label: "Schedule" },
//   { key: "invoice", label: "Invoice" },
// ];

// function Home() {
//   const [activeTab, setActiveTab] = useState<TabKey>("bid");
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FCC40B]">
//       {/* ====== Header (Top Bar) ====== */}
//       <header className="bg-black text-white sticky top-0 z-50">
//         <div className="flex items-center justify-between px-4 py-3">
//           <button
//             aria-label="Open menu"
//             onClick={() => setShowSidebar(true)}
//             className="p-1"
//           >
//             <Menu className="w-6 h-6" />
//           </button>

//           {/* Centered App Logo */}
//           <div className="flex-1 flex justify-center">
//             <img
//               src="/logo.svg"
//               alt="AV Workforce Logo"
//               className="h-6 w-auto select-none"
//             />
//           </div>

//           <div className="flex items-center gap-3">
//             <button aria-label="Messages" className="p-1">
//               <MessageSquare className="w-6 h-6" />
//             </button>
//             <button aria-label="Notifications" className="p-1">
//               <Bell className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {/* ====== Tabs ====== */}
//         <div className="flex justify-center gap-16 border-white/10">
//           {TABS.map((t) => {
//             const isActive = activeTab === t.key;
//             return (
//               <button
//                 key={t.key}
//                 onClick={() => setActiveTab(t.key)}
//                 className={`relative py-3 text-sm font-medium tracking-wide transition-colors ${
//                   isActive
//                     ? "text-white font-semibold"
//                     : "text-white/70 hover:text-white"
//                 }`}
//               >
//                 {t.label}
//                 {isActive && (
//                   <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-white rounded-full" />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </header>

//       {/* ====== Tab Content ====== */}
//       <main className="flex-1 w-full">
//         <div className="max-w-5xl mx-auto px-3 py-4 md:px-8">
//           {activeTab === "bid" && <AvailableShifts />}
//           {activeTab === "schedule" && <ScheduledShifts />}
//           {activeTab === "invoice" && <CompletedShifts />}
//           {/* Use FallbackContent component if there is no data */}
//           {false /* Change condition to check if data exists */ && (
//             <FallbackContent message="No content available." />
//           )}
//         </div>
//       </main>

//       {/* ====== Sidebar ====== */}
//       <HomeSidebar open={showSidebar} onClose={() => setShowSidebar(false)} />
//     </div>
//   );
// }

// export default Home;
