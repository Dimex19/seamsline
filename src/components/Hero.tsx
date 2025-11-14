import { useState } from "react";
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";
import Image4 from "../assets/images/image4.png";
import Image5 from "../assets/images/image5.png";
import Image6 from "../assets/images/image6.png";
import Image7 from "../assets/images/image7.png";
import Image8 from "../assets/images/image8.png";
import WaitlistModal from "./modals/WaitlistModal";
import RegisterModal from "./modals/RegisterModal";
import SuccessModal from "./modals/SuccessModal";
import { joinWaitlist, registerEarly } from "../api/loader"; 
import toast from "react-hot-toast";

const Hero = () => {
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
      const message =
        (err as any)?.response?.data?.error ??
        (err instanceof Error ? err.message : "An error occurred. Please try again.");
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* === HERO SECTION === */}
      <section className="bg-[#00458B]">
        <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 text-white px-6 md:px-12 lg:pl-[55px] py-16 md:py-24 font-[Inter]">
          {/* === Left Section === */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-[480px] xl:w-[520px]">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold mb-4 leading-tight">
              <span className="text-[#3FD2C7]">Creativity</span> meets{" "}
              <span className="text-[#D96C48]">Structure</span>
            </h1>
            <p className="font-light text-base md:text-lg mb-8 font-garet max-w-[530px]">
              From managing client orders to showcasing collections, Seamsline gives creatives
              the tools to work smarter, look professional, and scale beyond the rack.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => setActiveModal("waitlist")}
                className="w-[140px] h-10 bg-white text-[#00458B] rounded-xl font-medium hover:bg-[#D96C48] hover:text-white transition"
              >
                Join Waitlist
              </button>
              <div className="flex flex-col items-center lg:items-start">
                <button
                  onClick={() => setActiveModal("register")}
                  className="w-[140px] h-10 bg-white text-[#00458B] rounded-xl font-medium hover:bg-[#D96C48] hover:text-white transition"
                >
                  Register Now
                </button>
                <p className="text-[10px] text-center mt-1 leading-tight w-[140px]">
                  Register now and get 6 months free on PRO plan
                </p>
              </div>
            </div>
          </div>

          {/* === Right Section (Images) === */}
          <div className="relative md:flex-2 hidden md:block min-h-[400px] lg:min-h-[600px]">
            <img src={Image1} alt="" className="absolute z-30 top-0 lg:-left-12 xl:left-[-30px] w-50 xl:w-[327.3px]" /> 
            <img src={Image2} alt="" className="absolute z-20 left-[140px] lg:left-[110px] xl:left-[220px] top-6 xl:top-8 w-50 xl:w-[277.3px]" /> 
            <img src={Image3} alt="" className="absolute left-[280px] lg:left-[220px] top-4.5 xl:left-[465px] z-10 w-60 xl:w-[327.3px]" />
            <img src={Image4} alt="" className="absolute z-40 lg:top-[290px] left-[450px] lg:left-0 xl:left-[-50px] w-50 xl:w-[277.3px]" />
            <img src={Image5} alt="" className="absolute z-20 top-[200px] lg:top-[300px] left-[300px] lg:left-[130px] xl:left-[230px] w-50 xl:w-[277.3px]" />
            <img src={Image6} alt="" className="absolute z-20 top-[170px] xl:top-[260px] left-[390px] lg:left-[220px] xl:left-[430px] w-62 xl:w-[327.3px]" />
            <img src={Image7} alt="" className="absolute z-30 lg:z-0 left-30 lg:left-30 xl:left-[65px] top-[170px] xl:top-[250px] xl:-bottom-5 w-60 xl:w-[327.3px]" />
            <img src={Image8} alt="" className="absolute top-40 xl:top-[130px] xl:left-[325px] w-50 xl:w-[327.3px]" />
          </div>
        </div>
      </section>

      {/* === Reusable Modals === */}
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
    </>
  );
};

export default Hero;
