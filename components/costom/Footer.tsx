"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-gray-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <Image
            src="/logo.png"
            height={150}
            width={150}
            alt='Logo'
            className='rounded-2xl block dark:hidden'
          />
          <Image
            src="/logo-dark.png"
            height={150}
            width={150}
            alt='Logo'
            className='rounded-2xl hidden object-contain dark:block'
          />

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center: Navigation Links */}
        {/* <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
          <Link href="#about" className="hover:text-teal-600 dark:hover:text-teal-300 transition">
            About
          </Link>
          <Link href="#services" className="hover:text-teal-600 dark:hover:text-teal-300 transition">
            Services
          </Link>
          <Link href="#contact" className="hover:text-teal-600 dark:hover:text-teal-300 transition">
            Contact
          </Link>
        </div> */}

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:hello@smartdatax.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
