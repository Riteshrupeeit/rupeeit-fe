import React from "react";

const Terms = () => {
    return (
        <div className="bg-black min-h-screen text-white flex justify-center px-2 md:px-6 py-12">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-yellow-400 mb-2">
                        Rupeeit – Terms & Conditions
                    </h1>
                    <p className="text-gray-400">
                        Welcome to Rupeeit! Please read these terms carefully before using
                        our platform.
                    </p>
                </header>

                {/* Card Container */}
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-3 md:p-8 shadow-lg backdrop-blur-sm">
                    {/* 1 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            1. Purpose of Rupeeit
                        </h2>
                        <p className="text-gray-300">
                            Rupeeit is an educational platform that provides finance-related
                            learning content. All content is for education and awareness only.
                            It must not be treated as investment advice, financial
                            recommendation, or a guarantee of results. Before making any
                            financial or investment decision, learners are encouraged to seek
                            advice from licensed professionals.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            2. Fair Use of Content
                        </h2>
                        <p className="text-gray-300 mb-2">
                            All videos, courses, and materials on Rupeeit are the intellectual
                            property of Rupeeit or its partners. Learners may watch and learn
                            from the content but may not:
                        </p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>Copy, download, or record content.</li>
                            <li>Share or upload Rupeeit content to other platforms.</li>
                            <li>Redistribute paid content in any form.</li>
                        </ul>
                        <p className="text-gray-300 mt-2">
                            Any attempt to pirate, misuse, or resell content may result in
                            account suspension and legal action.
                        </p>
                    </section>

                    {/* 3 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            3. User Accounts
                        </h2>
                        <p className="text-gray-300">
                            Learners must provide accurate details during registration.
                            Sharing your account or login credentials with others is not
                            allowed. You are responsible for keeping your account secure.
                        </p>
                    </section>

                    {/* 4 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            4. Payments & Subscriptions
                        </h2>
                        <p className="text-gray-300">
                            Rupeeit offers subscription plans, paid courses, and premium
                            learning material. Payments are processed securely through
                            authorized payment gateways. Prices may change over time, but
                            learners will always be notified before renewal.
                        </p>
                    </section>

                    {/* 5 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            5. Refund Policy (Summary)
                        </h2>
                        <p className="text-gray-300 mb-2">
                            Learners can request a refund within 7 days of purchase if less
                            than 20% of the course or subscription content has been used.
                            Refunds are not available for:
                        </p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>One-time events, live sessions, or workshops.</li>
                            <li>Free trials or promotional content.</li>
                        </ul>
                        <p className="text-gray-300 mt-2">
                            Approved refunds are processed within 7–10 business days back to
                            the original payment method.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            6. Termination of Access
                        </h2>
                        <p className="text-gray-300 mb-2">
                            We may suspend or terminate accounts if:
                        </p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>Content is pirated, copied, or shared outside Rupeeit.</li>
                            <li>Misuse or fraud is detected.</li>
                            <li>The Terms & Conditions are violated.</li>
                        </ul>
                        <p className="text-gray-300 mt-2">
                            No refunds will be issued if access is terminated due to
                            violations.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            7. Limitation of Liability
                        </h2>
                        <p className="text-gray-300">
                            Rupeeit provides finance-related education but does not guarantee
                            financial returns. Users are responsible for decisions made using
                            the knowledge gained. Rupeeit is not liable for any direct or
                            indirect losses from using the platform.
                        </p>
                    </section>

                    {/* 8 */}
                    <section>
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            8. Updates to Terms
                        </h2>
                        <p className="text-gray-300">
                            We may update these Terms & Conditions when required. Learners
                            will be notified of major updates, and continued use of Rupeeit
                            means acceptance of the latest version.
                        </p>
                    </section>
                </div>


            </div>
        </div>
    );
};

export default Terms;
