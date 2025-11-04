import { useRef, useState, useEffect } from "react";
import Image33 from "../assets/images/image33.png";
import Image38 from "../assets/images/image38.png";
import Image40 from "../assets/images/image40.png";
import Image34 from "../assets/images/image34.png";
import Image41 from "../assets/images/image41.png";
import Image42 from "../assets/images/image42.png";
import Image43 from "../assets/images/image43.png";
import Image44 from "../assets/images/image44.png";

const JoinSeamsline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const sections = [
    {
      title: "Fashion Creative",
      text: "Whether you create bespoke bridal gowns or ready-to-wear collections, Seamsline helps you stay organized, profitable, and visible to the right clients.",
      images: [Image33, Image38, Image40, Image34],
    },
    {
      title: "Customer",
      text: "Discover trusted fashion creatives, book services, share measurements securely, and track every step — from concept to delivery — all while staying on top of budgets, fittings, and timelines.",
      images: [Image41, Image42, Image43, Image44],
    },
    {
      title: "Shop Vendor",
      text: "Sell accessories and tools to a pool of fashion creatives through a trusted digital storefront all while managing sales, payments, and inventory from one dashboard.",
      images: [Image44], // single image for this section
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollPosition / width);
      setActiveIndex(index);
    };

    const div = scrollRef.current;
    div?.addEventListener("scroll", handleScroll);
    return () => div?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-[Inter] text-center pt-[60px] pb-10 px-5 sm:px-8 md:px-[60px] lg:px-[103px]">
      <h3 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] mb-2">
        Join <span className="text-[#00458B]">Seamsline</span> as a?
      </h3>
      <p className="text-[16px] text-[#576675] font-garet font-light sm:text-[16px] mb-10">
        Choose from a wide array of account types that suit your needs
      </p>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {sections.map((section, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-between items-center shrink-0 w-full snap-center gap-6 md:gap-10"
          >
            {/* Images Section */}
            <div
              className={`grid gap-[7px] w-full md:w-auto ${
                section.images.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-2"
              }`}
            >
              {section.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${section.title}-${index}`}
                  className={`object-cover rounded-lg ${
                    section.images.length === 1
                      ? "w-full h-[400px] md:h-[500px] lg:h-[550px]" // large single image
                      : "w-full h-auto"
                  }`}
                />
              ))}
            </div>

            {/* Text Section */}
            <div className="text-left max-w-[520px] w-full mt-6 md:mt-0">
              <h2 className="text-[#00458B] font-semibold text-[22px] sm:text-[26px] md:text-[32px] mb-2">
                {section.title}
              </h2>
              <p className="text-[14px] sm:text-[16px] font-garet font-light text-[#1F2131] mb-4 leading-relaxed">
                {section.text}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setActiveModal("waitlist")}
                  className="px-6 py-2 bg-[#FFFFFF] text-[#00458B] border border-[#00458B] rounded-xl hover:bg-[#00458B] hover:text-[#FFFFFF] transition"
                >
                  Join Waitlist
                </button>
                <button
                  onClick={() => setActiveModal("register")}
                  className="px-6 py-2 bg-[#FFFFFF] text-[#00458B] border border-[#00458B] rounded-xl hover:bg-[#00458B] hover:text-[#FFFFFF] transition"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Circle indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {sections.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-[#00458B] scale-110" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Success/Modal sections remain same */}
      {activeModal && (
        <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-[400px] p-6 sm:p-8 rounded-xl relative shadow-lg">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-center text-[#00458B] font-semibold mb-6 text-lg sm:text-xl">
              {activeModal === "waitlist"
                ? "Be the first to experience Seamsline"
                : "Register your Seamsline account"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(activeModal);
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
              {activeModal === "register" && (
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
              )}
              <button
                type="submit"
                className="w-full bg-[#00458B] text-white py-2 rounded-lg font-medium hover:bg-[#003a76] transition"
              >
                {activeModal === "waitlist" ? "Join Waitlist" : "Register Now"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-[380px] p-8 rounded-2xl relative shadow-lg text-center">
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

export default JoinSeamsline;
