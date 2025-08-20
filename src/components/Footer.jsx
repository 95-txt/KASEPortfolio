import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaWhatsapp,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center mt-5">
          {/* Contact */}
          <p className="text-lg font-medium">
            <a href="mailto:sinanlw95@gmail.com" className="hover:text-white">
              sinanlw95@gmail.com
            </a>
          </p>

          <div className="flex justify-center space-x-6 my-10">
            <a
              href="https://github.com/95-txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub size={50} />
            </a>
            <a
              href="https://linkedin.com/in/sinanmuhammed95"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              href="https://wa.me/7025938934?text=Hi,%20I'm%20from%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaWhatsapp size={50} />
            </a>
            <a
              href="https://behance.com/sinanmuhammed95"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white "
            >
              <FaBehance size={50} />
            </a>
            <a
              href="https://www.instagram.com/95.eps?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={50} />
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-10 text-sm">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="about" className="hover:text-white">
              About
            </a>
            <a href="projects" className="hover:text-white">
              Projects
            </a>
            <a href="contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <p className="text-sm text-gray-500">
            &#169; {new Date().getFullYear()} MUHAMMED SINAN. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
