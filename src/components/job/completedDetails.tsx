import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RotateCw, ChevronDown } from "lucide-react";
import { INVOICE_MOCK_DATA, MEAL_BREAK_OPTIONS } from "@/mocks/invoices.mock";
import PaymentMethodModal from "./PaymentMethodModal";

const CompletedJobDetails = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const { shift } = location.state || {};

  // State for form data
  const [formData, setFormData] = useState({
    clockIn: INVOICE_MOCK_DATA.invoice.clockIn,
    mealBreak: INVOICE_MOCK_DATA.invoice.mealBreak,
    clockOut: INVOICE_MOCK_DATA.invoice.clockOut,
    rate: INVOICE_MOCK_DATA.invoice.rate,
    regHrs: INVOICE_MOCK_DATA.invoice.regHrs,
    otHrs: INVOICE_MOCK_DATA.invoice.otHrs,
    dtHrs: INVOICE_MOCK_DATA.invoice.dtHrs,
    perDiem: INVOICE_MOCK_DATA.invoice.perDiem,
  });

  const [instantPayChecked, setInstantPayChecked] = useState(false);
  const [showMealBreakModal, setShowMealBreakModal] = useState(false);
  const [showMealDropdown, setShowMealDropdown] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Calculate totals
  const calculateTotal = () => {
    const rate = parseFloat(formData.rate) || 0;
    const regHrs = parseFloat(formData.regHrs) || 0;
    const otHrs = parseFloat(formData.otHrs) || 0;
    const dtHrs = parseFloat(formData.dtHrs) || 0;
    const perDiem = parseFloat(formData.perDiem) || 0;

    const total =
      rate * regHrs + rate * 1.5 * otHrs + rate * 2 * dtHrs + perDiem;
    return total.toFixed(2);
  };

  const invoiceTotal = parseFloat(calculateTotal());
  const serviceFee = (
    (invoiceTotal * INVOICE_MOCK_DATA.serviceFeePercentage) /
    100
  ).toFixed(2);
  const instantPayFee = instantPayChecked
    ? (invoiceTotal * 0.05).toFixed(2)
    : "0.00";
  const grandTotal = (
    invoiceTotal +
    parseFloat(serviceFee) +
    parseFloat(instantPayFee)
  ).toFixed(2);

  const handleInputChange = (field: string, value: string) => {
    if (!instantPayChecked) {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleMealBreakSelect = (option: string) => {
    if (!instantPayChecked) {
      setFormData((prev) => ({ ...prev, mealBreak: option }));
    }
    setShowMealBreakModal(false);
    setShowMealDropdown(false);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handlePaymentSubmit = (method: "E-Check" | "Direct Deposit") => {
    console.log("Payment method selected:", method);
    // Handle payment submission here
  };

  // Lock scroll when modal is open
  useEffect(() => {
    if (showMealBreakModal || showPaymentModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMealBreakModal, showPaymentModal]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="fixed top-0 left-0 right-0 bg-[#FCC40B] z-40 shadow-md lg:left-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/home")}
            className="p-2 hover:bg-black/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>

          <h1 className="text-lg md:text-xl font-bold text-black">Invoice</h1>

          <button
            onClick={handleRefresh}
            className="p-2 hover:bg-black/10 rounded-full transition-colors"
          >
            <RotateCw className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* Content starts below fixed header */}
      <div className="pt-20 px-2 sm:px-4 md:px-6 lg:px-8 bg-gray-50">
        {/* Black Summary Box */}
        <div className="bg-black text-white  p-4 md:p-6 mb-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6">
            {/* Left: User Info */}
            <div className="space-y-1 text-xs md:text-sm">
              <p>{INVOICE_MOCK_DATA.user.name}</p>
              <p>{INVOICE_MOCK_DATA.user.location}</p>
              <p>{INVOICE_MOCK_DATA.user.phone}</p>
              <p>{INVOICE_MOCK_DATA.user.email}</p>
              <p>SSN: {INVOICE_MOCK_DATA.user.ssn}</p>
            </div>

            {/* Right: Event Info */}
            <div className="space-y-1 text-xs md:text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="text-[#FCC40B] font-medium">Event Name:</span>
                <span className="text-[#FDD96D]">
                  {INVOICE_MOCK_DATA.event.name}
                </span>

                <span className="text-[#FCC40B] font-medium">Event Venue:</span>
                <span className="text-[#FDD96D]">
                  {INVOICE_MOCK_DATA.event.venue}
                </span>

                <span className="text-[#FCC40B] font-medium">Job #</span>
                <span className="text-[#FDD96D]">
                  {INVOICE_MOCK_DATA.event.jobNumber}
                </span>

                <span className="text-[#FCC40B] font-medium">Date:</span>
                <span className="text-[#FDD96D]">
                  {INVOICE_MOCK_DATA.event.date}
                </span>

                <span className="text-[#FCC40B] font-medium">Position:</span>
                <span className="text-[#FDD96D]">
                  {INVOICE_MOCK_DATA.event.position}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Table - Fitted Width */}
        <div className="mb-2 max-w-7xl mx-auto overflow-x-hidden">
          <div className="w-full max-w-full overflow-x-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-9 bg-[#FDE99E] border border-[#E5C05B] w-full max-width-full">
              {[
                "Clock In",
                "Meal Break",
                "Clock Out",
                "Rate",
                "Reg Hrs",
                "OT Hrs",
                "DT Hrs",
                "Per Diem",
                "Total",
              ].map((header) => (
                <div
                  key={header}
                  className="p-2 flex items-center justify-center font-bold text-black border-r border-[#E5C05B] last:border-r-0 text-xs md:text-sm"
                >
                  {header}
                </div>
              ))}
            </div>

            {/* Table Row */}
            <div className="grid grid-cols-9 bg-white border border-t-0 border-[#E5C05B] w-full max-width-full">
              {/* Clock In */}
              <div className="p-1 border-r border-[#E5C05B]">
                <input
                  type="text"
                  value={formData.clockIn}
                  onChange={(e) => handleInputChange("clockIn", e.target.value)}
                  disabled={instantPayChecked}
                  className="w-full text-center bg-[#E8E8E8] border border-[#FCC40B] rounded px-1 py-2 text-xs md:text-sm disabled:opacity-50"
                />
              </div>

              {/* Meal Break - Dropdown */}
              <div className="p-1 border-r border-[#E5C05B] relative">
                <button
                  onClick={() =>
                    !instantPayChecked && setShowMealBreakModal(true)
                  }
                  disabled={instantPayChecked}
                  className="w-full text-center bg-[#E8E8E8] border border-[#FCC40B] rounded px-1 py-2 flex items-center justify-center gap-1 text-xs md:text-sm disabled:opacity-50"
                >
                  <span className="truncate">{formData.mealBreak}</span>
                  <ChevronDown className="w-3 h-3 shrink-0" />
                </button>
              </div>

              {/* Clock Out */}
              <div className="p-1 border-r border-[#E5C05B]">
                <input
                  type="text"
                  value={formData.clockOut}
                  onChange={(e) =>
                    handleInputChange("clockOut", e.target.value)
                  }
                  disabled={instantPayChecked}
                  className="w-full text-center bg-[#E8E8E8] border border-[#FCC40B] rounded px-1 py-2 text-xs md:text-sm disabled:opacity-50"
                />
              </div>

              {/* Rate */}
              <div className="p-1 border-r border-[#E5C05B]">
                <input
                  type="text"
                  value={`$ ${formData.rate}`}
                  onChange={(e) =>
                    handleInputChange("rate", e.target.value.replace("$ ", ""))
                  }
                  disabled={instantPayChecked}
                  className="w-full text-center bg-[#E8E8E8] border border-[#FCC40B] rounded px-1 py-2 text-xs md:text-sm disabled:opacity-50"
                />
              </div>

              {/* Reg Hrs */}
              <div className="p-1 border-r border-[#E5C05B]">
                <input
                  type="text"
                  value={formData.regHrs}
                  onChange={(e) => handleInputChange("regHrs", e.target.value)}
                  disabled={instantPayChecked}
                  className="w-full text-center bg-[#E8E8E8] border border-[#FCC40B] rounded px-1 py-2 text-xs md:text-sm disabled:opacity-50"
                />
              </div>

              {/* OT Hrs */}
              <div className="p-1 border-r border-[#E5C05B]">
                <input
                  type="text"
                  value={formData.otHrs}
                  onChange={(e) => handleInputChange("otHrs", e.target.value)}
                  disabled={instantPayChecked}
                  className="w-full text-center bg-[#E8E8E8] border border-[#FCC40B] rounded px-1 py-2 text-xs md:text-sm disabled:opacity-50"
                />
              </div>

              {/* DT Hrs */}
              <div className="p-1 border-r border-[#E5C05B]">
                <input
                  type="text"
                  value={formData.dtHrs}
                  onChange={(e) => handleInputChange("dtHrs", e.target.value)}
                  disabled={instantPayChecked}
                  className="w-full text-center bg-[#E8E8E8] border border-[#FCC40B] rounded px-1 py-2 text-xs md:text-sm disabled:opacity-50"
                />
              </div>

              {/* Per Diem */}
              <div className="p-1 border-r border-[#E5C05B]">
                <input
                  type="text"
                  value={`$ ${formData.perDiem}`}
                  onChange={(e) =>
                    handleInputChange(
                      "perDiem",
                      e.target.value.replace("$ ", "")
                    )
                  }
                  disabled={instantPayChecked}
                  className="w-full text-center bg-[#E8E8E8] border border-[#FCC40B] rounded px-1 py-2 text-xs md:text-sm disabled:opacity-50"
                />
              </div>

              {/* Total - Calculated, Not Editable */}
              <div className="p-1 bg-white flex items-center justify-center">
                <span className="font-bold text-xs md:text-sm">
                  ${calculateTotal()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="max-w-7xl mx-auto space-y-4 mt-6">
          {/* Service Fee */}
          <div className="flex justify-end items-center py-2 border-b border-gray-300">
            <div className="flex items-center gap-8">
              <span className="text-gray-600 text-sm md:text-base">
                Service Fee:
              </span>
              <span className="text-gray-600 text-sm md:text-base">
                ${serviceFee}
              </span>
            </div>
          </div>

          {/* Instant Pay Fee with Checkbox */}
          <div className="py-2 border-b border-gray-300">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-gray-600 flex-1">
                By clicking this box, you agree to a 5% fee on this invoice for
                same day payment
              </p>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-gray-600 text-sm md:text-base whitespace-nowrap">
                  Instant Pay Fee:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={instantPayChecked}
                    onChange={(e) => setInstantPayChecked(e.target.checked)}
                    className="w-4 h-4 accent-[#FCC40B] cursor-pointer"
                  />
                  <span className="text-gray-600 text-sm md:text-base">
                    ${instantPayFee}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Grand Total */}
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <span className="font-bold text-black text-base md:text-lg">
              Grand Total:
            </span>
            <span className="font-bold text-black text-base md:text-lg">
              ${grandTotal}
            </span>
          </div>

          {/* Next Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowPaymentModal(true)}
              className="
      w-full               
      max-w-xs             
      md:max-w-sm
      bg-[#FCC40B] text-black font-bold
      text-base md:text-lg
      py-4
      rounded-full
      hover:bg-[#e5b00a]
      transition-colors
    "
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Meal Break Modal */}
      {showMealBreakModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowMealBreakModal(false);
            }
          }}
        >
          <div className="bg-white rounded-3xl w-full max-w-md p-8">
            <h2 className="text-lg md:text-xl font-semibold text-center mb-6">
              Select option
            </h2>

            <div className="mb-6">
              <label className="text-xs md:text-sm text-gray-600 mb-2 block">
                Choice
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowMealDropdown(!showMealDropdown)}
                  className="w-full border-2 border-purple-600 rounded-xl px-4 py-3 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="text-sm md:text-base">
                    {formData.mealBreak}
                  </span>
                  <ChevronDown size={20} />
                </button>

                {showMealDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                    {MEAL_BREAK_OPTIONS.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleMealBreakSelect(option)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-100 border-b border-gray-200 last:border-b-0 text-sm md:text-base"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowMealBreakModal(false);
                  setShowMealDropdown(false);
                }}
                className="flex-1 border-2 border-black text-black py-3 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowMealBreakModal(false)}
                className="flex-1 bg-black text-[#FCC40B] py-3 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Method Modal */}
      <PaymentMethodModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSubmit={handlePaymentSubmit}
      />
    </div>
  );
};

export default CompletedJobDetails;
