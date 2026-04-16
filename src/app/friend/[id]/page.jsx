"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <div className="p-20 text-center">Finding your friend...</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 flex justify-center items-start">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* --- LEFT SIDEBAR (Col 4) --- */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
            <img
              src={friend.image || "https://i.pravatar.cc/150"}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4 grayscale"
              alt={friend.name}
            />
            <h1 className="text-xl font-bold text-slate-800">{friend.name}</h1>
            <div className="flex gap-2 justify-center my-3">
              <span className="bg-[#ff4d4d] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                Overdue
              </span>
              <span className="bg-[#e2f7ed] text-[#2ecc71] text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                Family
              </span>
            </div>
            <p className="text-gray-400 text-sm italic mt-3 px-4">"{friend.bio}"</p>
            <p className="text-gray-400 text-[10px] mt-2 italic">Preferred: email</p>
          </div>

          {/* Action List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
            <button className="p-4 border-b border-gray-50 flex items-center justify-center gap-3 text-slate-600 hover:bg-gray-50 font-medium text-sm transition-all">
              <span className="text-lg">🔔</span> Snooze 2 Weeks
            </button>
            <button className="p-4 border-b border-gray-50 flex items-center justify-center gap-3 text-slate-600 hover:bg-gray-50 font-medium text-sm transition-all">
              <span className="text-lg">📁</span> Archive
            </button>
            <button className="p-4 flex items-center justify-center gap-3 text-red-500 hover:bg-red-50 font-medium text-sm transition-all">
              <span className="text-lg">🗑️</span> Delete
            </button>
          </div>
        </div>

        {/* --- RIGHT CONTENT (Col 8) --- */}
        <div className="md:col-span-8 flex flex-col gap-6">
          {/* Top 3 Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-4xl font-bold text-slate-700">62</p>
              <p className="text-[11px] text-slate-400 mt-2 uppercase tracking-wide font-semibold">
                Days Since Contact
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-4xl font-bold text-slate-700">30</p>
              <p className="text-[11px] text-slate-400 mt-2 uppercase tracking-wide font-semibold">Goal (Days)</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-2xl font-bold text-emerald-900">Feb 27, 2026</p>
              <p className="text-[11px] text-slate-400 mt-2 uppercase tracking-wide font-semibold">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
            <button className="absolute right-8 top-8 px-4 py-1 bg-gray-50 border border-gray-200 text-slate-400 text-xs rounded hover:bg-gray-100 font-bold transition-all">
              Edit
            </button>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Relationship Goal</h3>
            <p className="text-slate-500">
              Connect every <span className="text-slate-900 font-bold">30 days</span>
            </p>
          </div>

          {/* Quick Check-In (Call, Text, Video) */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-slate-800 mb-5">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <a
                href={`tel:${friend.phone}`}
                className="bg-[#f8fafc] p-5 rounded-xl flex flex-col items-center justify-center hover:bg-slate-100 transition-all group"
              >
                <span className="text-2xl mb-2 grayscale group-hover:grayscale-0">📞</span>
                <span className="text-sm font-semibold text-slate-600">Call</span>
              </a>
              <a
                href={`mailto:${friend.email}`}
                className="bg-[#f8fafc] p-5 rounded-xl flex flex-col items-center justify-center hover:bg-slate-100 transition-all group"
              >
                <span className="text-2xl mb-2 grayscale group-hover:grayscale-0">💬</span>
                <span className="text-sm font-semibold text-slate-600">Text</span>
              </a>
              <a
                href="https://meet.google.com"
                target="_blank"
                className="bg-[#f8fafc] p-5 rounded-xl flex flex-col items-center justify-center hover:bg-slate-100 transition-all group"
              >
                <span className="text-2xl mb-2 grayscale group-hover:grayscale-0">📹</span>
                <span className="text-sm font-semibold text-slate-600">Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
