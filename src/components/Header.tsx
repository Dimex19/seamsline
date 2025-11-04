import { useState } from "react";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [activeModal, setActiveModal] = useState<"waitlist" | "register" | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* === Header === */}
      <header className="flex z-50 justify-between items-center py-4 px-6 sm:px-12 md:px-20 lg:px-[100px] bg-[#00458B] text-white fixed top-0 left-0 w-full">
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


      {/* === Waitlist Modal === */}
      {activeModal === "waitlist" && (
        <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 p-4">
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
                <label className="block text-sm text-gray-600 mb-1 text-left">Email</label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">Full Name</label>
                <input
                  type="text"
                  placeholder="Adunni Abiodun"
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
        <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 p-4">
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
                <label className="block text-sm text-gray-600 mb-1 text-left">Email</label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">Full Name</label>
                <input
                  type="text"
                  placeholder="Adunni Abiodun"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 text-left">Password</label>
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
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-[380px] p-8 sm:p-10 rounded-2xl relative shadow-lg text-center">
            <button
              onClick={() => setSuccessMessage(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>
            <p className="text-[#00458B] mb-6 text-base sm:text-lg">{successMessage}</p>
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

export default Header;
