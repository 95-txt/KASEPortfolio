import { motion, useTransform, useScroll } from "framer-motion";
import Brain from "/assets/images/brain.png";
import eeeleague from "/assets/images/eeeleague.jpg";
import { useState, useEffect, useRef } from "react";
// import { ReactTyped } from "react-typed";

function HomeProjects() {
  const [projects, setProjects] = useState([]);
  const items = ["Project One", "Project Two", "Project Three", "Project Four"];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"], // Adjust these offsets for desired trigger points
  });

  // Maps scroll progress (0 to 1) to a clip-path from 0% to 100%
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ]
  );

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="px-10 md:px-20 lg:px-50">
        <motion.div className="text-[6rem] text-right py-15">
          Projects
        </motion.div>
        <motion.div ref={ref} style={{ clipPath }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius
          laboriosam distinctio molestias, cupiditate deserunt dicta non labore
          corrupti repudiandae, soluta tempora aspernatur doloremque, maxime
          laborum necessitatibus minus voluptate ducimus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sunt ea inventore iusto, iure sit
          facilis vitae cumque veniam. Vel, impedit? Sit nesciunt ipsa optio
          ullam esse officia nulla ab quibusdam.
        </motion.div>

        <div className="flex flex-wrap gap-5">
          <motion.div
            className="group flex-35 hover:-translate-y-2 duration-300 "
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <a href="projects">
              <img
                className="aspect-square object-cover"
                src={Brain}
                alt="brain"
              />
              <p className="absolute group-hover:-translate-y-20 text-7xl text-white duration-300">
                Code
              </p>
            </a>
          </motion.div>
          <motion.div
            className="group flex-35 hover:-translate-y-2 duration-300 "
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <a href="projects">
              <img
                className="aspect-square object-cover"
                src={eeeleague}
                alt="eeeleague"
              />
              <p className="absolute group-hover:-translate-y-20 text-7xl text-white duration-300">
                Design
              </p>
            </a>
          </motion.div>
          <motion.div
            className="flex-30 text-right content-end -mb-2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="projects"
              className="text-2xl tracking-wider font-semibold hover:underline "
            >
              SEE MORE PROJECTS →
            </a>
          </motion.div>
        </div>
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
                  <p className="text-2xl">{project.name}</p>
                  <p>{project.tools}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          {/* <ul className="flex-35 border-t-1 border-t-gray-400">
            {items.map((item, i) => (
              <motion.li
                className="border-b-1 border-b-gray-400 p-4 hover:translate-x-2 duration-300"
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="text-2xl">{item}</p>
                <p>Details</p>
              </motion.li>
            ))}
          </ul> */}
          {/* <div className="flex-30"></div> */}
        </div>
      </div>
    </>
  );
}

export default HomeProjects;
