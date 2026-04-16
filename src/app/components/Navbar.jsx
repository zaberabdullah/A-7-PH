"use client";
import Link from "next/link";
import { BarChart3, Clock, Home } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18}></Home> },
    { name: "Timeline", href: "/timeline", icon: <Clock size={18}></Clock> },
    { name: "Stats", href: "/stats", icon: <BarChart3 size={18}></BarChart3> },
  ];
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-tight text-[#244D3F]">
        <span className="font-extrabold">Keen</span>Keeper
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {navLinks.map((link) => {
          const isActive = pathName === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive ? "bg-[#244D3F] text-white shadow-md" : "text-gray-500 hover:text-[#244D3F] hover:bg-gray-50"
              }`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
