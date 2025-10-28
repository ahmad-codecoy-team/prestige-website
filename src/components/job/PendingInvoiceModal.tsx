import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Hourglass } from "lucide-react";

interface PendingInvoiceModalProps {
  visible: boolean;
  onClose: () => void;
}

/**
 * Displays a centered overlay modal that informs the user their invoice
 * is still under review.
 */
const PendingInvoiceModal: React.FC<PendingInvoiceModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl w-full max-w-xs p-6 flex flex-col items-center shadow-2xl text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close button (optional if user wants to dismiss manually) */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Hourglass icon */}
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Hourglass className="text-yellow-500 w-8 h-8" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Invoice in Review
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-5 px-3">
              Your invoice is still pending. Please wait for approval.
            </p>

            {/* OK Button */}
            <button
              onClick={onClose}
              className="bg-[#FCC40B] text-black font-semibold rounded-md px-6 py-2 hover:opacity-90 transition"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PendingInvoiceModal;
