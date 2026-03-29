import useClientOnboardingForm from "../customHooks/useClientOnboardingForm";

export default function WaitlistForm({ fromslow, setFromslow }) {
    // Custom hook mathi only popup related states use kariye che
    const {
        show,
        handleClose,
        showSuccess,
        setShowSuccess,
    } = useClientOnboardingForm(fromslow, setFromslow);

    return (
        <>
            {/* ================= IMAGE POPUP MODAL ================= */}
            {fromslow && (
                <div
                    // Full screen dark overlay
                    className={`fixed inset-0 z-[4545465655454] flex items-center justify-center 
                    bg-black/70 backdrop-blur-sm px-4 ${show ? "block" : "hidden"}`}
                    onClick={handleClose} // Bahar click karta popup close
                >
                    <div
                        // Popup container
                        className={`relative w-full max-w-sm sm:max-w-md bg-white 
                        rounded-2xl p-4 shadow-2xl transition-transform transform 
                        ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                        onClick={(e) => e.stopPropagation()} // Andar click par close na thay
                    >
                        {/* ❌ Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
                        >
                            &times;
                        </button>

                        {/* 📱 Image Only */}
                        <img
                            src="./img/downlod.jpeg"   // 👉 aa jagyae tamari image no path aapo
                            alt="Download app QR"
                            className="  rounded-xl h-[550px] w-[400px] object-center"
                        />
                    </div>
                </div>
            )}

            {/* ================= SUCCESS POPUP (OPTIONAL) ================= */}
            {showSuccess && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div
                        className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            ✅ Thanks for showing interest!
                        </h2>

                        <button
                            onClick={() => setShowSuccess(false)}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
