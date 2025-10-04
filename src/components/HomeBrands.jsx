import { motion } from "framer-motion";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCplusplus,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaFigma, FaJava, FaJsSquare, FaNodeJs } from "react-icons/fa";
import Line from "./Line";

function HomeBrands() {
  const tools = [
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobepremierepro,
    SiAdobeaftereffects,
    FaFigma,
    FaJsSquare,

    SiMongodb,
    SiExpress,
    SiReact,
    FaNodeJs,

    SiTailwindcss,
    SiFramer,
    SiCplusplus,
    FaJava,
    SiPython,
  ];
  const brands = [
    "/assets/logos/roohilogo.svg",
    "/assets/logos/accumedlogo.svg",
    "/assets/logos/rahalogo.png",
    "/assets/logos/roobaroologo.png",
    "/assets/logos/cclogo.png",
    "/assets/logos/icebaelogo.svg",
    "/assets/logos/C23logo.svg",
    "/assets/logos/ibizzlogo.svg",
    "/assets/logos/frlogo.png",
    "/assets/logos/gdsclogo.png",
    "/assets/logos/h24logo.png",
    "/assets/logos/deeplogo.png",
    "/assets/logos/igclogo.png",
    "/assets/logos/cslogo.png",
    // "/assets/logos/tmlogo.png",
    "/assets/logos/ieeelogo.svg",
  ];
  return (
    <>
      <div className="sm:px-8 lg:px-50">
        <motion.div
          className="text-[6rem] pb-15"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          Brands
        </motion.div>
        <div className="pb-20 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 items-center">
          {brands.map((brand, i) => (
            <motion.div
              className="px-20 py-15"
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
            >
              <img
                className="hover:drop-shadow-lg hover:scale-105 duration-300"
                src={brand}
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Line />
      <div className="sm:px-8 lg:px-50">
        <motion.div
          className="text-[4rem] mt-15 pb-5 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tools
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 items-center text-gray-400 mb-20">
          {tools.map((Icon, i) => {
            return (
              <motion.div
                className="px-20 py-15"
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className=" hover:scale-110 duration-300">
                  <Icon size={100} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomeBrands;
