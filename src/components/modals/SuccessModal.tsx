import React from "react";
import Check from "../../assets/icon/check.png";

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#003a76]/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-[449px] flex flex-col justify-center h-[345px] p-8 sm:p-10 rounded-2xl relative shadow-lg text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 text-xl font-bold"
        >
          ×
        </button>
        <p className="text-[#00458B] mb-6 text-base sm:text-lg">{message}</p>
        <div className="flex justify-center">
          <div className="bg-[#EDF0F3] w-[76px] h-[76px] rounded-[38px] flex justify-center items-center">
            <img src={Check} alt="success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
