// src/pages/attendance/Attendance.tsx
import { useLocation } from "react-router-dom";
import WorkerAttendance from "./WorkerAttendence";
import LeadAttendance from "./LeadAttendence";

function Attendance() {
  const location = useLocation();
  const { isLead } = location.state || { isLead: false };

  return isLead ? <LeadAttendance /> : <WorkerAttendance />;
}

export default Attendance;
