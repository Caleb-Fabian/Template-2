"use client";

import {
  GeneralSettingsIcon,
  GTArrowIcon,
  ShieldIcon,
  HelpIcon,
} from "@/assets/icons";
import cloudSync from "@/assets/images/dashboard-images/cloud sync.png";
import Image from "next/image";
import CEO from "@/assets/gif/ceo-gif.gif";
import Interactions from "@/assets/gif/interaction.webp";
import CustomerService from "@/assets/gif/customer-service.gif";
import "aos/dist/aos.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useState } from "react";

// Utility component for reusability
const AnimatedSection = ({
  children,
  direction = "up",
  duration = 0.8,
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // triggers when 20% of element is visible
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Direction-based offset
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 50 };
      case "down":
        return { y: -50 };
      case "left":
        return { x: -50 };
      case "right":
        return { x: 50 };
      default:
        return { y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...getOffset() },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-b from-white via-gray-300 to-white">
      {/* HERO SECTION */}
      <section
        className="relative flex items-center py-10 mb-20 h-[50vh] md:h-[100vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${CEO.src})` }}
      >
        <div className="absolute inset-0 flex flex-col md:flex-row md:items-center md:justify-center md:px-20 bg-black/30">
          <div
            className="md:hidden pr-[20px] w-fit right-0 top-0 absolute"
            onClick={() => setIsOpen(true)}
          >
            <GeneralSettingsIcon />
          </div>

          <AnimatedSection>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                />

                {/* Modal content */}
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="bg-white text-gray-900 rounded-xl shadow-xl max-w-lg w-full p-6 relative">
                    {/* Close button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
                    >
                      ✕
                    </button>

                    <div className="w-fit gap-[10px] flex  flex-col  pr-[50px]">
                      <a href="" className="flex flex-row">
                        Who We Are <HelpIcon />
                      </a>
                      ||
                      <a href="" className="flex flex-row">
                        What We Do <HelpIcon />
                      </a>
                      ||
                      <a href="" className="flex flex-row">
                        Industries <HelpIcon />
                      </a>
                      ||
                      <a href="" className="flex flex-row">
                        Resources <HelpIcon />
                      </a>
                      ||
                      <a href="" className="flex flex-row">
                        Careers <HelpIcon />
                      </a>
                      ||
                      <a href="" className="flex flex-row">
                        Press <HelpIcon />
                      </a>
                      ||
                      <a href="" className="flex flex-row">
                        Contact <HelpIcon />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatedSection>

          <div className="w-fit right-0 top-0 absolute gap-[10px] hidden md:flex flex-col md:flex-row pr-[50px]">
            <a href="">Who We Are</a>
            ||
            <a href="">What We Do</a>
            ||
            <a href="">Industries</a>
            ||
            <a href="">Resources</a>
            ||
            <a href="">Careers</a>
            ||
            <a href="">Press</a>
            ||
            <a href="">Contact</a>
          </div>
          <div className="w-[10%] md:hidden">
            <Image src={cloudSync} alt="Secure" />
          </div>

          <AnimatedSection direction="left" duration={1}>
            <div className="flex flex-col">
              <h3 className="text-black font-bold text-[30px] md:text-[40px] lg:text-[75px]">
                Company Name
              </h3>
              <h2 className="text-black text-[10px] md:text-[20px] my-2">
                Company subtitle or tagline that gives the company meaning...
              </h2>
              <button className="relative inline-flex w-fit items-center justify-center p-[2px] overflow-hidden rounded-lg bg-gradient-to-r from-[#82A67D] via-gray-300 to-[#82A67D] hover:from-green-300 hover:via-white hover:to-green-300 transition-all duration-1000">
                <span className="text-white bg-black text-[10px] md:text-[20px] px-8 py-3 rounded-md">
                  Let&apos;s get started
                </span>
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" duration={1}>
            <div className="hidden md:flex">
              <Image src={cloudSync} alt="Secure" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex flex-col md:flex-row w-full justify-center items-center gap-10 md:px-24 mb-20">
        <AnimatedSection direction="right" duration={0.9}>
          <div
            className="flex py-5 mx-5 h-[40vh] w-[80vw] md:w-[300px] bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${Interactions.src})` }}
          ></div>
        </AnimatedSection>

        <AnimatedSection direction="left" duration={1.1}>
          <div className="text-[#82A67D] font-bold max-w-[600px] flex flex-col gap-4 px-[15px]">
            <h2 className="text-[30px] md:text-[35px] leading-tight">
              Transform your IT systems to fully support your business growth
              strategy
            </h2>
            <h3 className="font-semibold">
              Organizations spend between 3% and 8% of top-line revenue on
              Information Technology.
            </h3>
            <p className="font-light text-[#82A67D]">
              Our mission is to help businesses transition spend from
              investments that are merely supporting their business to
              investments that deliver a cohesive system for acquiring new
              clients, better retaining existing ones, and driving profitability
              year over year.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* SECTION 3 */}
      <section className="flex flex-col md:flex-row-reverse w-full justify-center items-center gap-10 md:px-24 mb-20">
        <AnimatedSection direction="up" duration={0.8}>
          <div
            className="flex py-5 mx-5 h-[40vh] w-[80vw] md:w-[300px] bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${CustomerService.src})` }}
          ></div>
        </AnimatedSection>
        <AnimatedSection direction="down" duration={1.1}>
          <div className="text-gray-500 font-bold max-w-[600px] flex flex-col gap-4 px-[15px]">
            <h2 className="text-[30px] md:text-[35px] leading-tight">
              What We Do
            </h2>

            <p className="font-light text-gray-600">
              As an AWS Premier Tier Services Partner with AWS Competencies in
              Generative AI, Migrations, DevOps, and Networking , we specialize
              in AWS cloud migrations, Managed Services, Generative AI,
              Application Modernization, and Cloud Operations. Our Managed
              Services offering aligns with your business needs and provides a
              true consumption-based delivery model for IT services.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <button className="w-fit px-[20px] py-[20px] text-sm rounded-[50px] border border-gradient-to-r from-blue-500 via-green-400 to-yellow-400 text-black">
        Start now
      </button>
    </div>
  );
}
