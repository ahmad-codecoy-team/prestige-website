// CompletedJobDetails.page.tsx (new wrapper page)

import LandscapeOnly from "../ui/LandScapeOnly";
import CompletedJobDetails from "./completedDetails";

export default function CompletedJobDetailsPage() {
  return (
    <LandscapeOnly>
      {/* Full-bleed landscape canvas that scales to device */}
      <div className="w-screen h-dvh flex items-start justify-center bg-gray-100 ">
        <div
          className="
           bg-white shadow w-full min-h-full
       max-w-full
          "
        >
          {/* Your original component unchanged */}
          <CompletedJobDetails />
        </div>
      </div>
    </LandscapeOnly>
  );
}
