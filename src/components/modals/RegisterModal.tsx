import React from "react";

interface RegisterModalProps {
  onClose: () => void;
  onSubmit: (formData: { email: string; fullname: string; password: string }) => Promise<void>;
  loading?: boolean;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose, onSubmit, loading }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    await onSubmit({
      email: formData.get("email") as string,
      fullname: formData.get("fullname") as string,
      password: formData.get("password") as string,
    });
  };

  return (
    <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-[526px] p-6 sm:px-6 sm:py-5 rounded-xl relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-center font-semibold mb-6 text-[12px]">
          Register your Seamsline account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 font-semibold mb-1 text-left">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Example@gmail.com"
              required
              className="w-full border border-[#576675] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 font-semibold mb-1 text-left">
              Full Name
            </label>
            <input
              name="fullname"
              type="text"
              placeholder="Adunni Abiodun"
              required
              className="w-full border border-[#576675] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 font-semibold mb-1 text-left">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="********"
              required
              className="w-full border border-[#576675] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B]"
            />
          </div>
          <button
            type="submit"
            className="max-w-32 bg-[#00458B] text-white py-2 rounded-lg font-medium hover:bg-[#003a76] transition"
          >
            {loading ? "Submitting..." : "Register Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
