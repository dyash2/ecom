import { useEffect, useState } from "react";

const PromoDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("promoSeen");

    if (!seen) {
      setOpen(true);
      localStorage.setItem("promoSeen", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-80 p-5 rounded-xl relative">
        <button
          className="absolute top-3 right-3 text-red-500"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-3">Special Offer 🎉</h2>
        <p className="text-gray-600 mb-4">
          Get 20% off on your first order
        </p>

        <button
          className="w-full bg-pink-500 text-white py-2 rounded-full"
          onClick={() => setOpen(false)}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PromoDialog;
