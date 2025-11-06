// src/components/attendance/ReviewModal.tsx
import { Star, X } from "lucide-react";
import { useState } from "react";
import ResponsiveModal from "@/components/ui/ResponsiveModal";

interface ReviewModalProps {
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
  open?: boolean;
}

export default function ReviewModal({ onClose, onSubmit, open = true }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const maxChars = 150;

  const handleSubmit = () => {
    onSubmit(rating, comment);
    onClose();
  };

  return (
    <ResponsiveModal
      open={open}
      onClose={onClose}
      ariaLabel="Lead review"
      backdropClassName="bg-black/50"                // <- dim overlay ONLY
      cardClassName="bg-white pb-6 px-6 pt-8"        // <- the white panel
      desktopMaxWidthClass="max-w-2xl"
    >
      {/* header */}
      <div className="flex items-center justify-center md:justify-between mb-6">
        <div className="hidden md:block" />
        <div className="md:hidden w-12 h-1 bg-gray-900 rounded-full" />
        <button
          onClick={onClose}
          className="hidden md:inline-flex text-black hover:text-gray-600 focus:outline-none"
          aria-label="Close"
        >
          <X size={22} />
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8">
        How was your Experience?
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Lead Review</h3>

        <div className="flex gap-2 mb-6 justify-center md:justify-start">
          {[1,2,3,4,5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="focus:outline-none"
              aria-label={`Rate ${star} star${star>1?"s":""}`}
            >
              <Star
                size={48}
                fill={star <= (hoveredRating || rating) ? "#fbbf24" : "#d1d5db"}
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
    </ResponsiveModal>
  );
}
