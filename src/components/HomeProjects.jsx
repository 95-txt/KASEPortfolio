import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
// import { ReactTyped } from "react-typed";

function HomeProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="px-8 md:px-20 lg:px-50">
        <div className="overflow-hidden ">
          <motion.p
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[6rem] text-right py-15 will-change-transform"
          >
            Projects
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="text-right content-end -mb-2"
        >
          <a
            href="projects"
            className="text-xl md:text-2xl tracking-wider font-semibold hover:underline "
          >
            SEE MORE PROJECTS →
          </a>
        </motion.div>

        <div className="flex flex-wrap gap-5 mt-50 pb-15">
          <ul className="flex-35 border-t-1 border-t-gray-400">
            {projects.map((project, i) => (
              <motion.li
                className="border-b-1 border-b-gray-400"
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 lg:px-10 hover:translate-x-2 hover:bg-gray-200/40 duration-300">
                  <p className="text-xl md:text-2xl">{project.name}</p>
                  <p className="text-xs md:text-base">{project.tools}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomeProjects;
