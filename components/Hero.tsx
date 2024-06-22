'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import BackgroundImage from '@/public/bg-home.jpeg';

const HeroSection: React.FC = () => {
    const [activeSection, setActiveSection] = useState(1);

    const handleSectionChange = (sectionNumber: number) => {
        setActiveSection(sectionNumber);
        document.getElementById(`section-${sectionNumber}`)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative">
            <div className="flex h-screen">
                <div className="relative w-1/2 h-full">
                    <Image
                        src={BackgroundImage}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>
                <div className="relative w-1/2 h-full overflow-y-scroll">
                    <div className="sticky top-0 bg-white bg-opacity-75 p-8">
                        <h1 className="text-4xl font-extrabold sm:text-6xl leading-tight text-gray-900 dark:text-white">
                            Start your coding journey with
                            <strong className="block font-extrabold text-rose-600">ImpactTeam</strong>
                        </h1>
                        <p className="mt-4 max-w-lg text-lg sm:text-xl text-gray-700 dark:text-gray-300 sm:leading-relaxed">
                            We provide the resources, mentorship, and community support to help you learn and master coding.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-lg transition hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="p-8 space-y-8">
                        {[
                            {
                                number: 1,
                                title: "You'll beat procrastination",
                                description: "Having a partner waiting for you will help you to show up, consistently put in the work, and focus on your goals."
                            },
                            {
                                number: 2,
                                title: "You'll grow motivation to push you",
                                description: "Sharing the journey and exchanging knowledge with a like-minded peer can turn the most frustrating problems into exciting challenges."
                            },
                            {
                                number: 3,
                                title: "You'll keep track of your progress",
                                description: "Tracking your progress helps you stay focused and see how far you've come."
                            },
                            {
                                number: 4,
                                title: "You're not alone! We can do this!",
                                description: "Join a community of learners who are here to support you every step of the way."
                            }
                        ].map((section, index) => (
                            <div
                                key={index}
                                id={`section-${section.number}`}
                                className={`p-6 border-2 border-rose-600 rounded-lg transition-transform transform ${activeSection === section.number ? 'scale-105' : ''}`}
                                onClick={() => handleSectionChange(section.number)}
                                style={{ cursor: 'pointer', padding: '15px' }}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-4xl font-bold text-rose-600">{section.number}</div>
                                    <div>
                                        <p className="text-lg text-gray-900 font-semibold">{section.title}</p>
                                        <p className="text-gray-600">{section.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
