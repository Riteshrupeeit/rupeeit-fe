import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="bg-black min-h-screen text-white flex justify-center px-6 py-12">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-yellow-400 mb-2">
                        Privacy Policy – Rupeeit
                    </h1>
                     <p className="text-gray-400 mt-3">
                        At Rupeeit, your privacy matters to us. This Privacy Policy explains
                        how we collect, use, and protect your information when you use our
                        app and website. By using Rupeeit, you agree to the terms outlined
                        here.
                    </p>
                </header>

                {/* Card */}
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                    {/* 1 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-300 mb-2">
                            We may collect the following information when you use our
                            services:
                        </p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>
                                Personal details (such as name, email, phone number) provided
                                during registration or support.
                            </li>
                            <li>
                                Payment information when you purchase courses or subscriptions
                                (processed securely by our payment partners – we do not store
                                card/bank details).
                            </li>
                            <li>
                                Usage data such as device type, app activity, crash reports, and
                                performance logs to improve your experience.
                            </li>
                        </ul>
                    </section>

                    {/* 2 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-gray-300 mb-2">We use your information to:</p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>Provide and improve our educational services.</li>
                            <li>Manage your account and process payments.</li>
                            <li>
                                Send you important notifications, updates, or support responses.
                            </li>
                            <li>
                                Maintain the security and proper functioning of our platform.
                            </li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            3. Data Sharing & Disclosure
                        </h2>
                        <p className="text-gray-300 mb-2">
                            We do not sell, rent, or share your personal data with anyone.
                        </p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>
                                Your data is used only within Rupeeit for providing and
                                improving our services.
                            </li>
                            <li>
                                The only exception is when required by law (e.g., valid legal
                                requests from authorities).
                            </li>
                        </ul>
                    </section>

                    {/* 4 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            4. Data Retention & Deletion
                        </h2>
                        <p className="text-gray-300">
                            We keep your data only as long as necessary to provide our
                            services or as required by law. You can request account deletion
                            and data removal anytime by contacting{" "}
                            <span className="text-yellow-400 font-medium">
                                support@rupeeit.in
                            </span>
                            .
                        </p>
                    </section>

                    {/* 5 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            5. Security of Your Data
                        </h2>
                        <p className="text-gray-300">
                            We use industry-standard security measures to protect your data,
                            including encryption and secure servers. However, no system is
                            100% secure, and we cannot guarantee absolute protection.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            6. Children’s Privacy
                        </h2>
                        <p className="text-gray-300">
                            Rupeeit is open to learners of all ages, but we do not knowingly
                            collect personal data from children without parental consent where
                            required by law. If you believe a child’s data has been shared
                            with us, please contact us for deletion.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            7. Your Rights
                        </h2>
                        <ul className="list-disc ml-6 text-gray-300 space-y-1">
                            <li>Access the personal data we hold about you.</li>
                            <li>Request corrections or deletion of your data.</li>
                            <li>Withdraw consent for communications.</li>
                        </ul>
                        <p className="text-gray-300 mt-2">
                            For any privacy-related request, please email us at{" "}
                            <span className="text-yellow-400 font-medium">
                                support@rupeeit.in
                            </span>
                            .
                        </p>
                    </section>

                    {/* 8 */}
                    <section>
                        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                            8. Changes to This Policy
                        </h2>
                        <p className="text-gray-300">
                            We may update this Privacy Policy from time to time. Any updates
                            will be posted in the app/website, and continued use means you
                            accept the updated version.
                        </p>
                    </section>
                </div>

                {/* Buttons */}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
