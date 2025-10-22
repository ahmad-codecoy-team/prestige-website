import { FiMail, FiPhoneCall } from "react-icons/fi";

function ContactUs() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      <div className="bg-black rounded-md p-2 text-center text-white font-bold flex items-center justify-center gap-2">
        <FiPhoneCall /> Call Us
      </div>
      <div className="border border-black rounded-md p-2 text-center  font-bold flex items-center justify-center gap-2">
        <FiMail className="w-5 h-5" /> Email
      </div>
    </div>
  );
}

export default ContactUs;
