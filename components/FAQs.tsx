import React from 'react';

const FAQSection: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details
                        className="group border-s-4 border-green-500 bg-gray-50 dark:bg-gray-800 p-6 [&_summary::-webkit-details-marker]:hidden"
                        open
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                What coding languages do you teach?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white dark:bg-gray-700 p-1.5 text-gray-900 dark:text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                            We offer courses in various coding languages including Python, JavaScript, HTML, CSS, Java, C++, and more. Our curriculum is designed to cater to beginners as well as advanced learners.
                        </p>
                    </details>

                    <details
                        className="group border-s-4 border-green-500 bg-gray-50 dark:bg-gray-800 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                Do I need any prior coding experience to join?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white dark:bg-gray-700 p-1.5 text-gray-900 dark:text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                            No prior coding experience is required. Our courses are designed to start from the basics and gradually move to more advanced topics. We believe in a step-by-step approach to ensure you grasp each concept thoroughly.
                        </p>
                    </details>

                    <details
                        className="group border-s-4 border-green-500 bg-gray-50 dark:bg-gray-800 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                What kind of support will I get during the course?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white dark:bg-gray-700 p-1.5 text-gray-900 dark:text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                            You will have access to a range of support options, including mentorship from experienced developers, community forums, live coding sessions, and one-on-one tutoring sessions. Our goal is to help you succeed at every step of your learning journey.
                        </p>
                    </details>

                    <details
                        className="group border-s-4 border-green-500 bg-gray-50 dark:bg-gray-800 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                How long does it take to complete a course?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white dark:bg-gray-700 p-1.5 text-gray-900 dark:text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                            The duration of our courses varies depending on the complexity and depth of the topic. Introductory courses typically take a few weeks, while more comprehensive programs can take several months to complete. You can learn at your own pace and revisit the materials as needed.
                        </p>
                    </details>

                    <details
                        className="group border-s-4 border-green-500 bg-gray-50 dark:bg-gray-800 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                Will I receive a certificate upon completion?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white dark:bg-gray-700 p-1.5 text-gray-900 dark:text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                            Yes, upon successfully completing a course, you will receive a certificate of completion. This certificate can be a valuable addition to your resume and can help you showcase your skills to potential employers.
                        </p>
                    </details>

                    <details
                        className="group border-s-4 border-green-500 bg-gray-50 dark:bg-gray-800 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                How do I enroll in a course?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white dark:bg-gray-700 p-1.5 text-gray-900 dark:text-white sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                            Enrolling in a course is simple. Just visit our courses page, select the course you are interested in, and click the 'Enroll Now' button. Follow the prompts to complete the registration process. If you have any questions, our support team is here to help.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
