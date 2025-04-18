import React from "react";
import { Link } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// 👇 Centralized JSON-style nav link config
const navLinks = {
  left: [
    { label: "Home", to: "/" },
    { label: "Destinations", to: "/destinations" },
    { label: "Deals", to: "/deals" },
    { label: "Experiences", to: "/experiences" },
    { label: "Contacts", to: "/contacts" },
  ],
  right: [
    { label: "Track Order", to: "/track-order" },
    { label: "Cart", to: "/cart" },
  ],
};

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold">
            Logo
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.left.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          {navLinks.right.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login">
            <Button variant="outline" className={"bg-[#4432a0] text-white"}>
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="mt-6 space-y-4 text-sm font-medium">
                {navLinks.left.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr />
                {navLinks.right.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/login">
                  <Button className="w-full mt-2" variant="outline">
                    Login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
