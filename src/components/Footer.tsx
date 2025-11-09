import Logo from "../assets/images/logo.png";
import Scissors from "../assets/icon/scissors.png";
import Linkedin from "../assets/icon/linkedin.png";
import Instagram from "../assets/icon/instagram.png";
import Facebook from "../assets/icon/facebook.png";
import Twitter from "../assets/icon/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#00458B]">
      <footer className=" max-w-[1440px] mx-auto font-[Inter] text-white px-6 md:px-12 lg:px-[100px] py-8">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={Logo} alt="Logo" className="w-[120px] md:w-40" />
        </div>
        {/* Divider */}
        <div className="flex my-6">
          <img src={Scissors} alt="divider" className="w-full" />
        </div>
        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
          {/* Left Section */}
          <div className="md:w-[480px]">
            <p className="mb-3 text-sm md:text-base font-garet font-light">
              The all-in-one workspace for modern fashion creatives built to bring
              structure to your creativity.
            </p>
            <div className="flex gap-3 mt-4">
              <img src={Linkedin} alt="Linkedin" className="w-5 md:w-6" />
              <img src={Instagram} alt="Instagram" className="w-5 md:w-6" />
              <img src={Facebook} alt="Facebook" className="w-5 md:w-6" />
              <img src={Twitter} alt="Twitter" className="w-5 md:w-6" />
            </div>
          </div>
          {/* Right Section (Links) */}
          <div className="flex flex-col gap-2 text-base md:text-lg font-semibold">
            <p className="cursor-pointer hover:underline">Terms</p>
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Help Center</p>
          </div>
        </div>
        {/* Newsletter */}
        <div className="mt-8">
          <p className="text-lg md:text-xl font-semibold mb-2">Newsletter!</p>
          <div className="flex flex-col sm:flex-row w-full max-w-[500px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white text-black px-3 py-2 w-full rounded-t-md sm:rounded-tr-none sm:rounded-bl-md outline-none"
            />
            <button className="bg-[#D96C48] py-2 sm:px-4 text-white rounded-b-md sm:rounded-bl-none sm:rounded-tr-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        {/* Footer Note */}
        <p className="text-center text-sm md:text-base mt-6">
          © 2025 Seamsline. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
