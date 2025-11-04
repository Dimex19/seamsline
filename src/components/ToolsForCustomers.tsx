import { useState } from "react";
import Icon5 from "../assets/icon/icon5.png";
import Icon6 from "../assets/icon/icon6.png";
import Icon7 from "../assets/icon/icon7.png";
import Icon8 from "../assets/icon/icon8.png";

const ToolsForCustomers = () => {
  const [activeModal, setActiveModal] = useState<"waitlist" | "register" | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (type: "waitlist" | "register") => {
    setActiveModal(null);
    setSuccessMessage(
      type === "waitlist"
        ? "You’ve successfully joined the waitlist"
        : "You’ve successfully registered"
    );
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const cards = [
    {
      title: "Order tracking",
      text: "See exactly where your outfit is from first sketch to delivery.",
      bgColor: "#00458B",
      textColor: "#FFFFFF",
      icon: Icon5,
    },
    {
      title: "In-app communication",
      text: "Message your creative directly and stay updated on progress",
      bgColor: "#D96C48",
      textColor: "#FFFFFF",
      icon: Icon6,
    },
    {
      title: "Secure checkout",
      text: "Pay confidently through Seamsline’s trusted payment system",
      bgColor: "#3FD2C7",
      textColor: "#00458B",
      icon: Icon7,
    },
    {
      title: "Verified creatives",
      text: "Discover trusted creatives and stylists to bring your ideas to life",
      bgColor: "#99DDFF",
      textColor: "#00458B",
      icon: Icon8,
    },
  ];

  return (
    <div className="font-[Inter] text-center py-16 px-6 sm:px-8 lg:px-10 xl:px-20 bg-[#F8F4EF]">
      <h3 className="font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#1F2131] mb-2">
        Tools for Customers
      </h3>
      <p className="text-sm sm:text-base lg:text-[16px] mb-10 max-w-2xl mx-auto">
        Designed to make booking and tracking your fashion orders simple
      </p>

      {/* Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] h-auto sm:h-[260px] bg-white text-[#00458B] text-left px-5 py-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            }}
          >
            <img src={card.icon} alt={card.title} className="w-10 h-10" />
            <h2 className="mt-4 text-lg sm:text-xl font-semibold">{card.title}</h2>
            <p className="mt-3 text-sm sm:text-base w-full max-w-[245px]">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center mt-8 gap-4 flex-wrap">
        <button
          onClick={() => setActiveModal("waitlist")}
          className="w-[127px] h-10 bg-[#FFFFFF] text-[#00458B] border border-[#00458B] rounded-xl hover:bg-[#00458B] hover:text-[#FFFFFF] transition"
        >
          Join Waitlist
        </button>
        <button
          onClick={() => setActiveModal("register")}
          className="w-[127px] h-10 bg-[#FFFFFF] text-[#00458B] border border-[#00458B] rounded-xl hover:bg-[#00458B] hover:text-[#FFFFFF] transition"
        >
          Register Now
        </button>
      </div>

      {/* === Waitlist Modal === */}
      {activeModal === "waitlist" && (
        <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-[400px] p-6 sm:p-8 rounded-xl relative shadow-lg">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-center text-[#00458B] font-semibold mb-6 text-lg sm:text-xl">
              Be the first to experience Seamsline
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit("waitlist");
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Adunni Abidoun"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#00458B] text-white py-2 rounded-lg font-medium hover:bg-[#003a76] transition"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      )}

      {/* === Register Modal === */}
      {activeModal === "register" && (
        <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-[400px] p-6 sm:p-8 rounded-xl relative shadow-lg">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-center text-[#00458B] font-semibold mb-6 text-lg sm:text-xl">
              Register your Seamsline account
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit("register");
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Adunni Abidoun"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#00458B] text-white py-2 rounded-lg font-medium hover:bg-[#003a76] transition"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* === Success Modal === */}
      {successMessage && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-[380px] p-8 rounded-2xl relative shadow-lg text-center">
            <button
              onClick={() => setSuccessMessage(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>
            <p className="text-[#00458B] mb-6 text-sm sm:text-base">{successMessage}</p>
            <div className="flex justify-center">
              <div className="w-14 h-14 flex justify-center items-center border-4 border-[#00458B] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#00458B"
                  className="w-8 h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsForCustomers;
