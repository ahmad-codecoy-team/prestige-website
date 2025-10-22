import { Phone } from "lucide-react";

interface Worker {
  name: string;
  review: number;
  phone?: string;
}

interface DefaultViewProps {
  workers: Worker[];
  onReviewClick: (workerIndex: number) => void;
}

const DefaultView = ({ workers, onReviewClick }: DefaultViewProps) => {
  return (
    <>
      {/* Shift Information */}
      <div className="flex justify-between items-center px-4 py-3 text-black bg-[#fbbf24]">
        <div className="font-semibold text-lg">Strike Technician</div>
        <div className="font-semibold text-lg">08:00-19:00</div>
      </div>

      {/* Worker List */}
      <div className="flex-1 bg-[#fbbf24] pb-24">
        <div className="bg-white rounded-2xl border-2 border-gray-300 mx-4 overflow-hidden">
          <div className="flex justify-between font-semibold text-lg px-6 py-4 border-b-2 border-gray-300">
            <div>Name</div>
            <div>Review</div>
          </div>
          {workers.map((worker, index) => (
            <div
              key={index}
              className={`flex justify-between items-center px-6 py-4 ${
                index < workers.length - 1 ? "border-b-2 border-gray-300" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => window.location.href = `tel:${worker.phone || '+1234567890'}`}
                  className="text-green-600 hover:text-green-800"
                >
                  <Phone size={24} />
                </button>
                <span className="text-base">{worker.name}</span>
              </div>
              <div
                className="text-base cursor-pointer hover:text-blue-600"
                onClick={() => onReviewClick(index)}
              >
                {worker.review}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DefaultView;
