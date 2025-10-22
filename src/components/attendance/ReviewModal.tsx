import { Star } from "lucide-react";
import { useState } from "react";

interface ReviewModalProps {
  workerName: string;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

export default function ReviewModal({
  workerName: _workerName,
  onClose,
  onSubmit,
}: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const maxChars = 150;

  const handleSubmit = () => {
    onSubmit(rating, comment);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-end justify-center z-50 bg-black/50">
      <div className="bg-white rounded-t-3xl w-full max-w-2xl pb-6 px-6 pt-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          How was your Experience?
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Lead Review</h3>
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none"
              >
                <Star
                  size={48}
                  fill={
                    star <= (hoveredRating || rating) ? "#fbbf24" : "#d1d5db"
                  }
                  stroke="none"
                />
              </button>
            ))}
          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, maxChars))}
            placeholder="Add a review."
            className="w-full border-2 border-gray-300 rounded-xl p-4 text-base resize-none focus:outline-none focus:border-gray-400"
            rows={3}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {comment.length}/{maxChars}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-[#fbbf24] py-4 rounded-full text-xl font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
