import { motion } from "framer-motion";

function HomeBrands() {
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
    <div className="px-50">
      <motion.div
        className="text-[6rem] mt-15 pb-5"
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
            viewport={{ once: true, margin: "50px" }}
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
  );
}

export default HomeBrands;
