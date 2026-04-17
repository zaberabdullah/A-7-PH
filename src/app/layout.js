import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper — Keep Your Friendships Alive",
  description: "Manage and nurture your meaningful connections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.className} antialiased bg-[#f9fafb] text-slate-900`}>
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <footer className="bg-[#244D3F] text-white py-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">KeenKeeper</h2>

            <p className="text-white text-[16px] mx-auto mb-10 font-medium">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter
              most.
            </p>

            <div className="mb-10">
              <p className="text-lg font-medium mb-4">Social Links</p>
              <div className="flex justify-center gap-5">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a3a32] hover:scale-110 transition-transform"
                >
                  <TbBrandInstagramFilled size={22} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a3a32] hover:scale-110 transition-transform"
                >
                  <FaFacebookSquare size={22} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a3a32] hover:scale-110 transition-transform"
                >
                  <FaXTwitter size={22} />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-300 font-medium">
              <p>© 2026 KeenKeeper. All rights reserved.</p>

              <div className="flex gap-10">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
