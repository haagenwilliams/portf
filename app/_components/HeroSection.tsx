import { ChevronRight, Linkedin } from "lucide-react";
import Image from "next/image";
import ShinyButton from "./ui/ShinyButton";
import { AnimatedTooltip } from "./ui/Tooltip";
import { tooltipItems } from "../_lib/constants";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerate";

const HeroSection = () => {
  return (
    <>
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <p className="uppercase font-bold text-sm tracking-widest">
            From Charleston, SC
          </p>
          <TextGenerateEffect
            words="Computer Science Student @ Clemson University"
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide"
          />
          <p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
            Hi, I&apos;m Haagen, I create applications to make my everyday life easier. I am constantly learning and applying my knowledge where ever I can.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
            </ShinyButton>
            <Link
              href="https://www.linkedin.com/in/haagen-williams-b0a5b4293/"
              target="_blank"
              className="flex items-center gap-2.5 group"
            >
              <Linkedin className="text-primary" />
              <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                LinkedIn Profile
              </span>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center mb-16 w-full mt-12">
            <div className="relative group">
              <Image
                src="/imgs/avatars/haagen.jpeg"
                width={300}
                height={300}
                alt="Profile"
                priority
                quality={100}
                className="object-cover !m-0 !p-0 object-top rounded-full h-72 w-72 border-[3px] group-hover:scale-105 group-hover:z-30 border-white dark:border-dark-200 relative transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
