import { useState } from "react";
import Icon9 from "../assets/icon/icon9.png";
import Icon10 from "../assets/icon/icon10.png";
import Icon11 from "../assets/icon/icon11.png";
import Icon12 from "../assets/icon/Icon12.png";
// import Check from "../assets/icon/check.png";
import WaitlistModal from "./modals/WaitlistModal";
import RegisterModal from "./modals/RegisterModal";
import SuccessModal from "./modals/SuccessModal";
import { joinWaitlist, registerEarly } from "../api/loader"; 


const ToolsForVendors = () => {
  const [activeModal, setActiveModal] = useState<"waitlist" | "register" | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (type: "waitlist" | "register", formData: any) => {
    try {
      setLoading(true);
      if (type === "waitlist") {
        await joinWaitlist({
          email: formData.email,
          fullname: formData.fullname,
        });
        setSuccessMessage("You’ve successfully joined the waitlist");
      } else {
        await registerEarly({
          email: formData.email,
          fullname: formData.fullname,
          password: formData.password,
        });
        setSuccessMessage("You’ve successfully registered");
      }
      setActiveModal(null);
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      console.error("Form submission error:", err);
      const message =
        (err as any)?.response?.data?.error ??
        (err instanceof Error ? err.message : "An error occurred. Please try again.");
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Showcase your products",
      text: "List fabrics, accessories, and sewing essentials in a few clicks",
      shadowColor: "0, 69, 139",
      icon: Icon9,
    },
    {
      title: "Manage Orders",
      text: "Track new and completed sales from your vendor dashboard",
      shadowColor: "153, 221, 255",
      icon: Icon10,
    },
    {
      title: "Organize your inventory",
      text: "Update stock levels and stay on top of what’s selling",
      shadowColor: "63, 210, 199",
      icon: Icon11,
    },
    {
      title: "Reports & Insights",
      text: "Track sales, payouts, and product performance",
      shadowColor: "217, 108, 72",
      icon: Icon12,
    },
  ];

  return (
    <div className="">
      <div className="font-[Inter] mx-auto max-w-[1440px] text-center pt-12 pb-10 px-6 sm:px-10 lg:px-[103px]">
        {/* Heading */}
        <h3 className="font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#1F2131] mb-2">
          Tools for Vendors
        </h3>
        <p className="text-sm sm:text-[16px] font-garet font-light text-[#576675] mb-10 max-w-[600px] mx-auto">
          Sell fabrics, trims, and tools directly to the creatives who need them
        </p>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-x-10 lg:gap-y-8 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white text-[#00458B] rounded-2xl p-4 sm:p-5 shadow-md"
              style={{
                boxShadow: `rgba(${card.shadowColor}, 0.9) 0px 4px 6px -1px, rgba(${card.shadowColor}, 0.9) 0px 2px 4px -1px`,
              }}
            >
              <img src={card.icon} alt={card.title} className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" />
              <div className="text-start">
                <h2 className="text-lg sm:text-xl font-semibold">{card.title}</h2>
                <p className="mt-2 text-sm sm:text-[16px] font-garet font-light">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center mt-10 gap-4">
          <button
            onClick={() => setActiveModal("waitlist")}
            className="w-[127px] h-10 bg-white text-[#00458B] border border-[#00458B] rounded-xl
                       transition text-sm sm:text-base"
          >
            Join Waitlist
          </button>
          <button
            onClick={() => setActiveModal("register")}
            className="w-[127px] h-10 bg-[#00458B] text-[#FFFFFF] rounded-xl transition text-sm sm:text-base"
          >
            Register Now
          </button>
        </div>
        {/* === Modals === */}
      {activeModal === "waitlist" && (
        <WaitlistModal
          onClose={() => setActiveModal(null)}
          onSubmit={(data) => handleSubmit("waitlist", data)}
          loading={loading}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          onClose={() => setActiveModal(null)}
          onSubmit={(data) => handleSubmit("register", data)}
          loading={loading}
        />
      )}

      {successMessage && (
        <SuccessModal message={successMessage} onClose={() => setSuccessMessage(null)} />
      )}
      </div>
    </div>
  );
};

export default ToolsForVendors;
