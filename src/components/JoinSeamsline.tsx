import { useRef, useState, useEffect } from "react";
import Image33 from "../assets/images/image33.png";
import Image38 from "../assets/images/image38.png";
import Image40 from "../assets/images/image40.png";
import Image34 from "../assets/images/image34.png";
import Image41 from "../assets/images/image41.png";
import Image42 from "../assets/images/image42.png";
import Image43 from "../assets/images/image43.png";
import Image44 from "../assets/images/image44.png";
import Image45 from "../assets/images/image45.png"
// import Check from "../assets/icon/check.png";
import WaitlistModal from "./modals/WaitlistModal";
import RegisterModal from "./modals/RegisterModal";
import SuccessModal from "./modals/SuccessModal";
import { joinWaitlist, registerEarly } from "../api/loader"; 


const JoinSeamsline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    {
      title: "Fashion Creative",
      text: "Whether you create bespoke bridal gowns or ready-to-wear collections, Seamsline helps you stay organized, profitable, and visible to the right clients.",
      images: [Image38, Image33, Image34, Image40],
    },
    {
      title: "Customer",
      text: "Discover trusted fashion creatives, book services, share measurements securely, and track every step — from concept to delivery — all while staying on top of budgets, fittings, and timelines.",
      images: [Image41, Image42, Image43, Image44],
    },
    {
      title: "Shop Vendor",
      text: "Sell accessories and tools to a pool of fashion creatives through a trusted digital storefront all while managing sales, payments, and inventory from one dashboard.",
      images: [Image45], // single image for this section
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
    <div className="">
      <div className="font-[Inter] max-w-[1440px] mx-auto text-center pt-[60px] pb-10 ">
        <div className="xl:max-w-[698px] xl:ml-[340px] xl:mr-[402px]">
          <h3 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] mb-2">
            Join <span className="text-[#00458B]">Seamsline</span> as a?
          </h3>
          <p className="text-[16px] text-[#576675] font-garet font-light sm:text-[16px] mb-2.5 md:mb-10">
            Choose from a wide array of account types that suit your needs
          </p>
        </div>
        {/* Scrollable container */}
        <div className="px-5 sm:px-8 lg:px-[60px] xl:pl-[103px] xl:pr-[77px]">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {sections.map((section, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row justify-between items-center shrink-0 w-full snap-center gap-6 md:gap-[70px]"
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
                          ? "w-[660px] h-[387px] md:h-[400px] xl:h-[669px]" // large single image
                          : "w-full h-auto"
                      }`}
                    />
                  ))}
                </div>
                {/* Text Section */}
                <div className="text-left max-w-[520px] w-full lg:mt-6 mt-0">
                  <h2 className="text-[#00458B] font-semibold text-[22px] sm:text-[26px] md:text-[32px] mb-2">
                    {section.title}
                  </h2>
                  <p className="text-[14px] max-w-[470px] sm:text-[16px] font-garet font-light text-[#1F2131] mb-4 leading-relaxed">
                    {section.text}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setActiveModal("waitlist")}
                      className="px-6 py-2 bg-[#FFFFFF] text-[#00458B] border border-[#00458B] rounded-xl transition"
                    >
                      Join Waitlist
                    </button>
                    <button
                      onClick={() => setActiveModal("register")}
                      className="px-6 py-2 bg-[#00458B] text-[#FFFFFF] rounded-xl transition"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default JoinSeamsline;
