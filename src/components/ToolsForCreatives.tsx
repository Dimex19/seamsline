import { useState } from "react";
import Icon1 from "../assets/icon/icon1.png";
import Icon2 from "../assets/icon/icon2.png";
import Icon3 from "../assets/icon/icon3.png";
import Icon4 from "../assets/icon/icon4.png";
// import Check from "../assets/icon/check.png";
import WaitlistModal from "./modals/WaitlistModal";
import RegisterModal from "./modals/RegisterModal";
import SuccessModal from "./modals/SuccessModal";
import { joinWaitlist, registerEarly } from "../api/loader"; 
import toast from "react-hot-toast";

const ToolsForCreatives = () => {
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
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Create & manage orders",
      text: "Stay on top of every job from start to finish in one dashboard.",
      bgColor: "#00458B",
      textColor: "#FFFFFF",
      icon: Icon1,
    },
    {
      title: "Manage Customers",
      text: "Client details and communication neatly in one place.",
      bgColor: "#D96C48",
      textColor: "#FFFFFF",
      icon: Icon2,
    },
    {
      title: "Reports & Insights",
      text: "View summaries of your earnings and completed projects easily.",
      bgColor: "#3FD2C7",
      textColor: "#00458B",
      icon: Icon3,
    },
    {
      title: "Schedule Fittings",
      text: "Plan your week and never miss an appointment again.",
      bgColor: "#99DDFF",
      textColor: "#00458B",
      icon: Icon4,
    },
  ];

  return (
    <div className="mx-auto">
      <div className="font-[Inter] mx-auto max-w-[1440px] text-center py-16 px-6 sm:px-10 xl:px-24">
        {/* Section Heading */}
        <h3 className="font-semibold text-2xl sm:text-3xl text-[#1F2131] mb-3">
          Tools for Creatives
        </h3>
        <p className="text-sm sm:text-base md:text-lg mb-12 font-garet font-light text-[#576675] max-w-2xl mx-auto">
          Run your fashion business easily — simple tools that help every fashion creative work
          smarter and deliver better.
        </p>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[300px] h-auto sm:h-[260px] text-left p-5 rounded-2xl shadow-md"
              style={{
                backgroundColor: card.bgColor,
                color: card.textColor,
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
              }}
            >
              <img src={card.icon} alt={card.title} className="w-10 h-10" />
              <h2 className="mt-4 text-lg sm:text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-[16px] sm:text-base font-garet font-light  leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={() => setActiveModal("waitlist")}
            className="w-[150px] h-10 bg-white text-[#00458B] border border-[#00458B] rounded-xl font-medium transition"
          >
            Join Waitlist
          </button>
          <button
            onClick={() => setActiveModal("register")}
            className="w-[150px] h-10 bg-[#00458B] text-[#FFFFFF] rounded-xl transition"
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

export default ToolsForCreatives;
