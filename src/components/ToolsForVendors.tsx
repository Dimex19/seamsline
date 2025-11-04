import { useState } from "react";
import Icon9 from "../assets/icon/icon9.png";
import Icon10 from "../assets/icon/icon10.png";
import Icon11 from "../assets/icon/icon11.png";
import Icon12 from "../assets/icon/icon12.png";


const ToolsForVendors = () => {
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
    <div className="font-[Inter] text-center pt-12 pb-10 px-6 sm:px-10 lg:px-[103px]">
      {/* Heading */}
      <h3 className="font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#1F2131] mb-2">
        Tools for Vendors
      </h3>
      <p className="text-sm sm:text-base mb-10 max-w-[600px] mx-auto">
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
              <p className="mt-2 text-sm sm:text-base">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        <button
          onClick={() => setActiveModal("waitlist")}
          className="w-[127px] h-10 bg-white text-[#00458B] border border-[#00458B] rounded-xl 
                     hover:bg-[#00458B] hover:text-white transition text-sm sm:text-base"
        >
          Join Waitlist
        </button>
        <button
          onClick={() => setActiveModal("register")}
          className="w-[127px] h-10 bg-white text-[#00458B] border border-[#00458B] rounded-xl 
                     hover:bg-[#00458B] hover:text-white transition text-sm sm:text-base"
        >
          Register Now
        </button>
      </div>

      {/* === Waitlist Modal === */}
      {activeModal === "waitlist" && (
        <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-sm p-6 sm:p-8 rounded-xl relative shadow-lg">
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
                <label className="block text-sm text-gray-600 mb-1 text-left">Email</label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">Full Name</label>
                <input
                  type="text"
                  placeholder="Adunni Abidoun"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#00458B]"
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
          <div className="bg-white w-full max-w-sm p-6 sm:p-8 rounded-xl relative shadow-lg">
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
                <label className="block text-sm text-gray-600 mb-1 text-left">Email</label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">Full Name</label>
                <input
                  type="text"
                  placeholder="Adunni Abidoun"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#00458B]"
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

      {/* === Success Modal (shared) === */}
      {successMessage && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-sm p-8 rounded-2xl relative shadow-lg text-center">
            <button
              onClick={() => setSuccessMessage(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>
            <p className="text-[#00458B] mb-6">{successMessage}</p>
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

export default ToolsForVendors;
