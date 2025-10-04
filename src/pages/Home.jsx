import { motion, useScroll, useTransform } from "framer-motion";
import HomeAbout from "../components/HomeAbout";
import HomeProjects from "../components/HomeProjects";
import Footer from "../components/Footer";
import HomeBrands from "../components/HomeBrands";
import Line from "../components/Line";

export default function Home() {
  return (
    <>
      {/* bg-[url('assets/images/homeV.png')] md:bg-[url('assets/images/homeH.png')] bg-cover bg-center */}
      <div className="h-140 sm:h-200 flex flex-col justify-between">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="px-8 md:px-12 text-left text-3xl md:text-6xl"
        >
          Hi, I’m
        </motion.div>

        <div className="text-center text-3xl md:text-8xl">
          <div className="-mb-2 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
              className="sm:inline tracking-widest "
            >
              MUHAMMED{" "}
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="h-fit inline-block text-[28vw] md:text-[14vw] leading-none"
            >
              SINAN
            </motion.div>
          </div>
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="text-sm md:text-2xl italic text-gray-700"
          >
            Creative Developer &amp; Designer
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="mt-6 md:mt-0 text-sm md:text-lg border p-2 px-4 rounded-3xl"
          >
            Contact
          </motion.button>
        </div>
      </div>
      <HomeAbout />
      <Line />
      <HomeProjects />
      <Line />
      <HomeBrands />
      <Footer />
    </>
  );
}
