import ResponsiveModal from "@/components/ui/ResponsiveModal";

interface ProfileUnderReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileUnderReviewModal = ({
  isOpen,
  onClose,
}: ProfileUnderReviewModalProps) => {
  return (
    <ResponsiveModal
      open={isOpen}
      onClose={onClose}
      ariaLabel="Profile Under Review"
      cardClassName="bg-white"
      desktopMaxWidthClass="md:max-w-md"
    >
      <div className="p-8 text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-black mb-6">Profile under review</h2>

        {/* Description */}
        <p className="text-gray-700 mb-8 text-base leading-relaxed">
          Your profile is currently under review. Once it's approved by our team, you'll be 
          able to explore and enjoy all the app's features! You will receive a notification 
          once your application has been approved.
        </p>

        {/* OK Button */}
        <button
          onClick={onClose}
          className="w-full bg-black text-[#FCC40B] py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors"
        >
          Ok
        </button>
      </div>
    </ResponsiveModal>
  );
};

export default ProfileUnderReviewModal;