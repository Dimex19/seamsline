import React, { useState } from "react";

interface RegisterModalProps {
  onClose: () => void;
  onSubmit: (formData: { email: string; fullname: string; password: string }) => Promise<void>;
  loading?: boolean;
}

type Errors = {
  email?: string;
  fullname?: string;
  password?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose, onSubmit, loading }) => {
  const [values, setValues] = useState({ email: "", fullname: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});

  const validate = (fields = values): Errors => {
    const e: Errors = {};
    const email = (fields.email ?? "").trim();
    const fullname = (fields.fullname ?? "").trim();
    const password = fields.password ?? "";

    if (!email) e.email = "Email is required.";
    else if (!emailRegex.test(email)) e.email = "Enter a valid email address.";

    if (!fullname) e.fullname = "Full name is required.";
    else if (fullname.length < 2) e.fullname = "Full name must be at least 2 characters.";

    if (!password) e.password = "Password is required.";
    else if (password.trim().length < 8) e.password = "Password must be at least 8 characters.";

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
    const trimmed = { email: values.email.trim(), fullname: values.fullname.trim(), password: values.password };
    const validationErrors = validate(trimmed);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    await onSubmit(trimmed);
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div>
            <label className="block text-sm text-gray-600 font-semibold mb-1 text-left">
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
            <label className="block text-sm text-gray-600 font-semibold mb-1 text-left">
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
          <div>
            <label className="block text-sm text-gray-600 font-semibold mb-1 text-left">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="********"
              required
              value={values.password}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00458B] ${
                errors.password ? "border-red-500" : "border-[#576675]"
              }`}
            />
            {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="max-w-32 bg-[#00458B] text-white py-2 rounded-lg font-medium hover:bg-[#003a76] transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Register Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;