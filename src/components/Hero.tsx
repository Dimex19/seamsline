import { useState } from "react";
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";
import Image4 from "../assets/images/image4.png";
import Image5 from "../assets/images/image5.png";
import Image6 from "../assets/images/image6.png";
import Image7 from "../assets/images/image7.png";
import Image8 from "../assets/images/image8.png";

const Hero = () => {
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

  return (
    <>
      {/* === HERO SECTION === */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 bg-[#00458B] text-white px-6 md:px-12 lg:pl-[85px] py-16 md:py-24 font-[Inter] pt-30">
        {/* === Left Section === */}
        <div className="flex flex-col justify-center w-full lg:w-[500px]">
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold mb-4 leading-tight">
            <span className="text-[#3FD2C7]">Creativity</span> meets{" "}
            <span className="text-[#D96C48]">Structure</span>
          </h1>
          <p className="font-light text-base md:text-lg mb-8 md:w-[530px] font-garet">
            From managing client orders to showcasing collections, Seamsline gives creatives
            the tools to work smarter, look professional, and scale beyond the rack.
          </p>
          <div className="flex  items-start gap-4">
            <button
              onClick={() => setActiveModal("waitlist")}
              className="w-[140px] h-10 bg-white text-[#00458B] rounded-xl font-medium hover:bg-[#00458B] hover:text-white hover:border hover:border-white transition"
            >
              Join Waitlist
            </button>
            <div className="flex flex-col items-start sm:items-center">
              <button
                onClick={() => setActiveModal("register")}
                className="w-[140px] h-10 bg-white text-[#00458B] rounded-xl font-medium hover:bg-[#00458B] hover:text-white hover:border hover:border-white transition"
              >
                Register Now
              </button>
              <p className="text-[10px] text-center mt-1 w-[140px] leading-tight">
                Register now and get 6 months free on PRO plan
              </p>
            </div>
          </div>
        </div>

        {/* === Right Section (Images) === */}
        <div className="relative md:flex-2 hidden md:block min-h-[400px] lg:min-h-[600px]">
          <img src={Image1} alt="" className="absolute z-30 top-0 left-0 xl:left-[-30px] w-50 xl:w-[327.3px]" />
          <img src={Image2} alt="" className="absolute z-20 left-[35%] xl:left-[220px] top-8 w-50 xl:w-[277.3px]" />
          <img src={Image3} alt="" className="absolute right-[5%] top-4.5 xl:left-[465px] z-10 w-60 xl:w-[327.3px]" />
          <img src={Image4} alt="" className="absolute z-40 top-[290px] left-[10%] xl:left-[-50px] w-50 xl:w-[277.3px]" />
          <img src={Image5} alt="" className="absolute z-20 top-[300px] left-[35%] xl:left-[230px] w-50 xl:w-[277.3px]" />
          <img src={Image6} alt="" className="absolute z-20 top-[260px] right-[5%] xl:left-[430px] w-60 xl:w-[327.3px]" />
          <img src={Image7} alt="" className="absolute left-[75px] z-0 bottom-[20%] xl:-bottom-5 w-50 xl:w-[327.3px]" />
          <img src={Image8} alt="" className="absolute top-[170px] left-[350px] w-50 xl:w-[277.3px]" />
        </div>
      </div>

      {/* === Waitlist Modal === */}
      {activeModal === "waitlist" && (
        <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-[400px] p-6 md:p-8 rounded-xl relative shadow-lg">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-center text-[#00458B] font-semibold mb-6 text-lg md:text-xl">
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
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Full Name</label>
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
          <div className="bg-white w-full max-w-[400px] p-6 md:p-8 rounded-xl relative shadow-lg">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-center text-[#00458B] font-semibold mb-6 text-lg md:text-xl">
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
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Adunni Abidoun"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Password</label>
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
            <p className="text-[#00458B] mb-6 text-base md:text-lg">{successMessage}</p>
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
    </>
  );
};

export default Hero;
