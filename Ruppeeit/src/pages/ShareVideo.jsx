import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShareVideo() {
    const { video_id } = useParams();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const res = await fetch(`https://backend.rupeeit.in/videos/${video_id}`);
                if (!res.ok) throw new Error("Video not found");
                const data = await res.json();
                setVideo(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchVideo();
    }, [video_id]);

    if (loading)
        return (
            <p className="text-center mt-10 text-lg text-yellow-400">Loading video...</p>
        );

    if (error)
        return (
            <p className="text-center mt-10 text-red-500">
                ❌ {error}
            </p>
        );

    return (
        <div className="flex flex-col items-center   min-h-screen bg-black text-yellow-400 p-6 relative">
             <video
                src={video?.file_url}
                controls
                className="w-full max-w-2xl rounded-xl shadow-lg mb-6    h-[500px]"
                onEnded={() => setShowPopup(true)}  
            />

             <a
                href="https://play.google.com/store/apps/details?id=com.rupeeit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition"
            >
                📲 Download app
            </a>

             {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-gray-900 border-2 border-yellow-500 text-yellow-400 rounded-2xl p-6 w-80 text-center shadow-2xl">
                        <h2 className="text-xl font-bold mb-3">🎬 Video Finished!</h2>
                        <p className="mb-5">
                            To see more videos like this, <br /> download our app 📲
                        </p>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.rupeeit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition"
                        >
                            Go to Play Store
                        </a>

                        <button
                            onClick={() => setShowPopup(false)}
                            className="block mt-4 text-sm text-gray-400 hover:text-yellow-400 transition"
                        >
                            ✖ Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
