'use client';
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <h1 className="text-center font-bold md:text-5xl text-3xl mt-10 text-black">How it Works</h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">

        <Card title="Join the Community" number="1" description="Become part of our vibrant community of learners and mentors passionate about coding and technology. Whether you're just starting or an experienced developer, join us to collaborate, share knowledge, and grow together.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-[10px]"
          />
        </Card>
        <Card title="Explore Learning Resources" number="2" description="Access a wealth of resources including coding challenges, tutorials, and open-source projects designed to enhance your skills. Dive into diverse topics and stay updated with the latest industry trends.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black rounded-[10px]"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the fade effect */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 rounded-[10px]" />
        </Card>
        <Card title="Engage and Collaborate" number="3" description="Engage in discussions, collaborate on projects, and participate in virtual events and workshops. Connect with like-minded individuals, share your expertise, and build meaningful connections that foster career growth.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-[10px]"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  number,
  description,
  children,
}: {
  title: string;
  number: string;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] bg-gray-800 text-white rounded-[10px]"
    >
      <div className="absolute h-10 w-10 top-3 left-3 flex items-center justify-center text-xl font-bold text-white">{number}</div>

      <div className="relative z-20 text-center">
        <h2 className="text-white text-xl font-bold mt-4">{title}</h2>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full mt-4"
            >
              <p className="text-white font-semibold">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-full w-full absolute inset-0 z-10 bg-black bg-opacity-80 flex flex-col items-center justify-center rounded-[10px]"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default CanvasRevealEffectDemo;
