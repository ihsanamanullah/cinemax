"use client";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Brand Info */}
          <div>
          <Link href="/" className="flex text-9xl items-center space-x-2">
          <Image src="/logo.png" alt="CineMax Logo" width={120} height={120} />
          <span className="text-2xl font-bold"></span>
        </Link>
            <p className="mt-3 text-gray-400">
              Watch Anything You Want
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/event" className="hover:text-gray-400">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} CINEMAX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
