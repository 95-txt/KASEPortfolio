import { motion, useAnimation } from "framer-motion";
import pic1 from "/assets/images/pic1.JPG";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HomeAbout() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        // Animate first div
        await controls.start({
          clipPath: "inset(0 0 0 0%)",
          transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        });

        // Animate second div
        await controls2.start({
          clipPath: "inset(0 0% 0 0)",
          transition: { duration: 0.8, ease: "easeOut" },
        });
      };

      sequence();
    }
  }, [inView, controls, controls2]);

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Column - Big Number */}
      <div className="relative ">
        <p className="absolute -bottom-50 -left-30 text-[40vw] md:text-[40vw] text-gray-200">
          <span ref={ref}>
            {inView ? <CountUp end={95} duration={5} /> : 0}
          </span>
        </p>
      </div>

      {/* Right Column - 3 Rows */}
      <div className="flex flex-col justify-center space-y-8 pr-50 mb-30">
        {/* Row 1 - Image */}
        <motion.div
          initial={{ clipPath: "inset( 0 0 0 100%)" }}
          animate={controls}
        >
          <img
            src={pic1}
            alt="Profile"
            className="w-full max-h-48 object-cover"
          />
        </motion.div>

        {/* Row 2 - Text */}
        <motion.div
          initial={{ clipPath: "inset( 0 100% 0 0 )" }}
          animate={controls2}
        >
          <p className="text-justify text-base md:text-lg leading-relaxed text-gray-800">
            Computer Science graduate who loves bringing ideas to life through
            both code and design. I enjoy creating digital experiences that are
            not just functional, but also intuitive and visually engaging,
            blending my technical skills with a creative touch.
          </p>
        </motion.div>

        {/* Row 3 - Link */}
        <div className=" text-right">
          <a
            href="about"
            className=" inline-block text-2xl mt-20 tracking-wider font-semibold hover:underline"
          >
            MORE ABOUT ME →
          </a>
        </div>
      </div>
    </div>
  );
}
