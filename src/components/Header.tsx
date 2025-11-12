import { useState } from "react";
import Logo from "../assets/images/logo.png";
// import Check from "../assets/icon/check.png";
import { joinWaitlist, registerEarly } from "../api/loader"; 
import WaitlistModal from "./modals/WaitlistModal";
import RegisterModal from "./modals/RegisterModal";
import SuccessModal from "./modals/SuccessModal";

const Header = () => {
  const [activeModal, setActiveModal] = useState<"waitlist" | "register" | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 optional loading state

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


  return (
    <>
      {/* === Header === */}
      <div className="bg-[#00458B] fixed top-0 left-0 w-full z-50">
        <header className="flex max-w-[1440px] mx-auto justify-between bg-[#00458B] items-center py-4 px-6 sm:px-12 md:px-20 lg:px-[100px] text-white ">
          <img src={Logo} alt="Seamsline Logo" className="w-[130px] sm:w-[150px] md:w-[180px]" />
          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => setActiveModal("waitlist")}
              className="w-[127px] h-10 bg-[#D96C48] text-white rounded-xl hover:bg-white hover:text-[#D96C48] hover:border hover:border-[#D96C48] transition"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => setActiveModal("register")}
              className="w-[127px] h-10 bg-[#D96C48] text-white rounded-xl hover:bg-white hover:text-[#D96C48] hover:border hover:border-[#D96C48] transition"
            >
              Register Now
            </button>
          </div>
          {/* Hamburger Icon (Mobile only) */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none z-60 relative appearance-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#003a76] flex flex-col items-center gap-3 py-6 z-50 md:hidden">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setActiveModal("waitlist");
                }}
                className="w-[80%] h-10 bg-[#D96C48] text-white rounded-xl hover:bg-white hover:text-[#D96C48] hover:border hover:border-[#D96C48] transition"
              >
                Join Waitlist
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setActiveModal("register");
                }}
                className="w-[80%] h-10 bg-[#D96C48] text-white rounded-xl hover:bg-white hover:text-[#D96C48] hover:border hover:border-[#D96C48] transition"
              >
                Register Now
              </button>
            </div>
          )}
        </header>
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

    </>
  );
};

export default Header;
