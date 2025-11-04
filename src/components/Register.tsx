import { useState } from "react";

const Register = () => {
    const [activeModal, setActiveModal] = useState<'waitlist' | 'register' | null>(null)
        const [successMessage, setSuccessMessage] = useState<string | null>(null)
    
        const handleSubmit = (type: 'waitlist' | 'register') => {
            setActiveModal(null)
            setSuccessMessage(
            type === 'waitlist'
                ? "You’ve successfully joined the waitlist"
                : "You’ve successfully registered"
            )
            // Auto-close success message after 3 seconds
            setTimeout(() => setSuccessMessage(null), 3000)
        }
  return (
    <>
        <div className="pt-[60px] text-center font-[Inter]">
            <h2 className="text-[rgb(217,108,72)] font-semibold text-2xl px-10 md:px-0 md:text-[32px]">Register and get 6 months PRO plan for free!!!</h2>
            <p className="text-[16px] mb-4 font-garet px-10 mt-2">For a limited time, creatives can get access to all professional features of Seamsline for 6 months</p>
            <button onClick={() => setActiveModal('register')} className="w-[141px] h-10 bg-[#00458B] text-[#FFFFFF] rounded-xl hover:bg-[#FFFFFF] hover:text-[#00458B] hover:border hover:border-[#00458B]">Register Now!</button>
        </div>
        {activeModal === 'register' && (
        <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] p-8 rounded-xl relative shadow-lg">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-center text-[#00458B] font-semibold mb-6">
              Register your Seamsline account
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit('register')
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
                  placeholder="Adunni ABidoun"
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
      {successMessage && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white w-[380px] p-10 rounded-2xl relative shadow-lg text-center">
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
    </>
  )
}

export default Register