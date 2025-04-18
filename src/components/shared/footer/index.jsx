import React from "react";
import { Facebook, Instagram, Twitter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Subscribe Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">
            Subscribe to get the latest News About Us
          </h2>
          <div className="flex w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white placeholder:text-gray-400 border-none rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-l-none"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-2">Menu</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contacts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Toure Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-2">Contacts</h4>
            <ul className="space-y-1">
              <li>+1 (123) 456-7890</li>
              <li>+1 (987) 654-3210</li>
              <li>info@example.com</li>
              <li>support@example.com</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-2">Address</h4>
            <p>
              789 Inner Lane, <br />
              Holy Park, California, USA
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Social Icons */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 flex justify-start gap-6">
          {[Facebook, Twitter, Instagram].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="bg-gray-700 hover:bg-white p-3 rounded-full text-white hover:text-black flex items-center justify-center"
              aria-label={Icon.name}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
