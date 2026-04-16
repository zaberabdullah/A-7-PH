"use client"; 

import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiEmotionLine, RiHome4Line, RiArrowGoBackLine } from "react-icons/ri";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full relative">
        <div className="absolute inset-0 bg-emerald-200 rounded-full blur-[100px] opacity-20 -z-10"></div>

        <div className="flex justify-center mb-6">
          <div className="bg-white p-5 rounded-3xl shadow-lg border border-gray-50">
            <RiEmotionLine className="text-6xl text-emerald-500 animate-bounce" />
          </div>
        </div>

        <h1 className="text-9xl font-black text-slate-200 absolute top-[-50px] left-1/2 -translate-x-1/2 -z-20 opacity-50">
          404
        </h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Hariye gele naki bondhu?</h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The page you are looking for doesn't exist. Let's get you back to your dashboard!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1a3a32] text-white rounded-2xl font-bold shadow-lg hover:bg-emerald-900 transition-all active:scale-95"
          >
            <RiHome4Line className="text-xl" />
            Home
          </Link>

          <button
            onClick={() => router.back()} 
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-600 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all"
          >
            <RiArrowGoBackLine className="text-xl" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
