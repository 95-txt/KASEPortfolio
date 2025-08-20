import { motion, useScroll, useTransform } from "framer-motion";
import { ReactTyped } from "react-typed";
import HomeAbout from "../components/HomeAbout";
import HomeProjects from "../components/HomeProjects";
import Footer from "../components/Footer";
import HomeBrands from "../components/HomeBrands";

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <>
      <div className=" min-h-screen flex flex-col justify-between items-center">
        {/* Top Section */}
        <motion.div
          className="w-full px-8 pt-8 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl md:text-6xl">Hi, I’m</p>
        </motion.div>

        {/* Middle Section */}
        <motion.div className="text-center" style={{ opacity }}>
          <ReactTyped
            strings={["Creative Developer &amp; Designer"]}
            typeSpeed={40}
            startDelay={1400}
            showCursor={false}
            loop={false}
            className="text-lg md:text-2xl italic text-gray-700"
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mb-16 md:mb-12 w-full text-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-5xl md:text-8xl tracking-wide">
            <motion.div className="inline" style={{ opacity }}>
              MUHAMMED{" "}
            </motion.div>
            <span className="sinan-scroll inline-block text-[28vw] md:text-[18vw]">
              SINAN
            </span>
          </div>
        </motion.div>
      </div>
      <HomeAbout />
      <HomeProjects />
      <HomeBrands />
      <Footer />
    </>
  );
}
