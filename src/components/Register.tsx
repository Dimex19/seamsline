import { useState } from "react";
// import Check from "../assets/icon/check.png";
// import WaitlistModal from "./modals/WaitlistModal";
import RegisterModal from "./modals/RegisterModal";
import SuccessModal from "./modals/SuccessModal";
import { joinWaitlist, registerEarly } from "../api/loader"; 
import toast from "react-hot-toast";

const Register = () => {
    const [activeModal, setActiveModal] = useState<'waitlist' | 'register' | null>(null)
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    
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
        <div className="pt-[60px] text-center font-[Inter]">
            <h2 className="text-[rgb(217,108,72)] font-semibold text-2xl px-10 md:px-0 md:text-[32px]">Register and get 6 months PRO plan for free!!!</h2>
            <p className="text-[16px] mb-4 font-garet px-10 mt-2">For a limited time, creatives can get access to all professional features of Seamsline for 6 months</p>
            <button onClick={() => setActiveModal('register')} className="w-[141px] h-10 bg-[#00458B] text-[#FFFFFF] rounded-xl">Register Now!</button>
        </div>
        {/* === Modals === */}
      {/* {activeModal === "waitlist" && (
        <WaitlistModal
          onClose={() => setActiveModal(null)}
          onSubmit={(data) => handleSubmit("waitlist", data)}
          loading={loading}
        />
      )} */}
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
  )
}

export default Register