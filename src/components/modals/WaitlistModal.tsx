import React, {useState} from "react";

interface WaitlistModalProps {
  onClose: () => void;
  onSubmit: (formData: { email: string; fullname: string }) => Promise<void>;
  loading?: boolean;
}

type Errors = {
  email?: string;
  fullname?: string;
  password?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WaitlistModal: React.FC<WaitlistModalProps> = ({ onClose, onSubmit, loading }) => {
  const [values, setValues] = useState({ email: "", fullname: "" });
  const [errors, setErrors] = useState<Errors>({});

  const validate = (fields = values): Errors => {
    const e: Errors = {};
    const email = (fields.email ?? "").trim();
    const fullname = (fields.fullname ?? "").trim();

    if (!email) e.email = "Email is required.";
    else if (!emailRegex.test(email)) e.email = "Enter a valid email address.";

    if (!fullname) e.fullname = "Full name is required.";
    else if (fullname.length < 2) e.fullname = "Full name must be at least 2 characters.";

    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => {
      const next = { ...prev, [name]: value };
      // run validation for this field if there was an error already
      if (Object.keys(errors).length) {
        setErrors((_) => {
          const newErrors = validate(next);
          return newErrors;
        });
      }
      return next;
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = { email: values.email.trim(), fullname: values.fullname.trim() };
    const validationErrors = validate(trimmed);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    await onSubmit(trimmed);
  };

  return (
    <div className="fixed inset-0 bg-[#00458B]/50 flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-[526px] p-6 sm:px-6 sm:py-5 rounded-xl relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-center font-semibold mb-6 text-[12px]">
          Be the first to experience Seamsline
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1 text-left">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Example@gmail.com"
              required
              value={values.email}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B] ${
                errors.email ? "border-red-500" : "border-[#576675]"
              }`}
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1 text-left">
              Full Name
            </label>
            <input
              name="fullname"
              type="text"
              placeholder="Adunni Abiodun"
              required
              value={values.fullname}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B] ${
                errors.fullname ? "border-red-500" : "border-[#576675]"
              }`}
            />
            {errors.fullname && <p className="text-red-600 text-xs mt-1">{errors.fullname}</p>}
          </div>
          <button
            type="submit"
            className="max-w-30 bg-[#00458B] text-white py-2 rounded-lg font-medium hover:bg-[#003a76] transition"
          >
            {loading ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal;
