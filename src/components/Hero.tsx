import { useState } from "react";
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";
import Image4 from "../assets/images/image4.png";
import Image5 from "../assets/images/image5.png";
import Image6 from "../assets/images/image6.png";
import Image7 from "../assets/images/image7.png";
import Image8 from "../assets/images/image8.png";
import Check from "../assets/icon/check.png";

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
      <div className=" bg-[#00458B]" id="">
        <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 text-white px-6 md:px-12 lg:pl-[55px] py-16 md:py-24 font-[Inter] pt-30">
          {/* === Left Section === */}
          <div className="flex flex-col mt-10 text-center lg:text-start lg:mt-0 justify-center w-full lg:w-[400px] xl:w-[500px]">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold mb-4 leading-tight">
              <span className="text-[#3FD2C7]">Creativity</span> meets{" "}
              <span className="text-[#D96C48]">Structure</span>
            </h1>
            <p className="font-light text-base md:text-lg mb-8 md:w-[480px] mx-auto xl:w-[530px] font-garet">
              From managing client orders to showcasing collections, Seamsline gives creatives
              the tools to work smarter, look professional, and scale beyond the rack.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button
                onClick={() => setActiveModal("waitlist")}
                className="w-[140px] h-10 bg-white text-[#00458B] rounded-xl font-medium"
              >
                Join Waitlist
              </button>
              <div className="flex  flex-col items-start md:justify-center">
                <button
                  onClick={() => setActiveModal("register")}
                  className="w-[140px] h-10 bg-white text-[#00458B] rounded-xl font-medium transition"
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
            <img src={Image1} alt="" className="absolute z-30 top-0 lg:-left-12 xl:left-[-30px] w-50 xl:w-[327.3px]" />
            <img src={Image2} alt="" className="absolute z-20 left-[140px] lg:left-[110px] xl:left-[220px] top-6 xl:top-8 w-50 xl:w-[277.3px]" />
            <img src={Image3} alt="" className="absolute left-[280px] lg:left-[220px] top-4.5 xl:left-[465px] z-10 w-60 xl:w-[327.3px]" />
            <img src={Image4} alt="" className="absolute z-40 lg:top-[290px] left-[450px] lg:left-0 xl:left-[-50px] w-50 xl:w-[277.3px]" />
            <img src={Image5} alt="" className="absolute z-20 top-[200px] lg:top-[300px] left-[300px] lg:left-[130px] xl:left-[230px] w-50 xl:w-[277.3px]" />
            <img src={Image6} alt="" className="absolute z-20 top-[170px] xl:top-[260px] left-[390px] lg:left-[220px] xl:left-[430px] w-62 xl:w-[327.3px]" />
            <img src={Image7} alt="" className="absolute z-30 lg:z-0 left-30 lg:left-30 xl:left-[75px] top-[180px] xl:-bottom-5 w-60 xl:w-[327.3px]" />
            <img src={Image8} alt="" className="absolute top-40 xl:top-[170px] xl:left-[350px] w-50 xl:w-[277.3px]" />
          </div>
        </div>
      </div>

      {/* === Waitlist Modal === */}
      {activeModal === "waitlist" && (
          <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 px-4">
            <div className="bg-white font-[Inter] w-full max-w-[526px] p-6 sm:px-6 sm:py-5 rounded-xl relative shadow-lg">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
              >
                ×
              </button>
              <h2 className="text-center font-semibold mb-6 text-[12px]">
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
                  <label className="block text-sm font-semibold mb-1 text-left">Email</label>
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    required
                    className="w-full border border-[#576675] rounded-lg px-[8.5px] py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-left">Full Name</label>
                  <input
                    type="text"
                    placeholder="Adunni Abidoun"
                    required
                    className="w-full border border-[#576675] rounded-lg px-[8.5px] py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                  />
                </div>
                <button
                  type="submit"
                  className="max-w-32 bg-[#00458B] text-white py-2 rounded-lg font-medium transition"
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
            <div className="bg-white font-[Inter] w-full max-w-[526px] p-6 sm:px-6 sm:py-5 rounded-xl relative shadow-lg">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
              >
                ×
              </button>
              <h2 className="text-center font-semibold mb-6 text-[12px]">
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
                  <label className="block text-sm font-semibold mb-1 text-left">Email</label>
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    required
                    className="w-full border border-[#576675] rounded-lg px-[8.5px] py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-left">Full Name</label>
                  <input
                    type="text"
                    placeholder="Adunni Abidoun"
                    required
                    className="w-full border border-[#576675] rounded-lg px-[8.5px] py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-left">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    required
                    className="w-full border border-[#576675] rounded-lg px-[8.5px] py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                  />
                </div>
                <button
                  type="submit"
                  className="max-w-32 bg-[#00458B] text-white py-2 rounded-lg font-medium transition"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        )}
        {/* === Success Modal === */}
        {successMessage && (
        <div className="fixed inset-0 bg-[#003a76]/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-[449px] flex flex-col justify-center h-[345px] p-8 sm:p-10 rounded-2xl relative shadow-lg text-center">
            <button
              onClick={() => setSuccessMessage(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>
            <p className="text-[#00458B] mb-6 text-base sm:text-lg">{successMessage}</p>
            <div className="flex justify-center">
              <div className="bg-[#EDF0F3] w-[76px] h-[76px] rounded-[38px] flex justify-center items-center">
                <img src={Check} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
