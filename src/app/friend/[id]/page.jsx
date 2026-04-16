"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiVideo } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { RiArchiveLine, RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  const handleInteraction = (type) => {
    const newEntry = {
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      title: `${type} with ${friend.name}`,
    };

    setTimeline([newEntry, ...timeline]);

    toast.success(`${type} entry recorded!`, {});
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 flex justify-center items-start">
      <ToastContainer></ToastContainer>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 flex flex-col gap-4">
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
            <p className="text-gray-400 text-sm italic mt-3 px-4">{friend.bio}</p>
            <p className="text-gray-400 text-[10px] mt-2">Preferred: email</p>
          </div>

          <div className="rounded-xl shadow-sm gap-3 flex flex-col">
            <button className="p-4 border bg-white border-gray-200 flex items-center justify-center gap-1 text-black hover:bg-gray-50 font-medium transition-all">
              <span className="text-lg">
                <RiNotificationSnoozeLine />
              </span>{" "}
              Snooze 2 Weeks
            </button>
            <button className="p-4 bg-white border border-gray-200 flex items-center justify-center gap-1 text-black hover:bg-gray-50 font-medium  transition-all">
              <span className="text-lg">
                <RiArchiveLine />
              </span>{" "}
              Archive
            </button>
            <button className="p-4 bg-white flex border border-gray-200 items-center justify-center gap-1 text-red-500 hover:bg-red-50 font-medium  transition-all">
              <span className="text-lg">
                <RiDeleteBinLine />
              </span>{" "}
              Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-4xl font-bold text-[#244D3F]">62</p>
              <p className="text-[#64748B] mt-2 font-semibold">Days Since Contact</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-4xl font-bold text-[#244D3F]">30</p>
              <p className="text-[#64748B] mt-2 font-semibold">Goal (Days)</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-2xl font-bold text-[#244D3F]">Feb 27, 2026</p>
              <p className=" text-[#64748B] mt-2 font-semibold">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
            <button className="absolute right-8 top-8 px-4 py-1 bg-gray-50 border border-gray-200 font-medium text-[14px] text-[#1F2937] rounded hover:bg-gray-50 transition-all">
              Edit
            </button>
            <h3 className="text-lg font-bold text-[#244D3F] mb-4">Relationship Goal</h3>
            <p className="text-slate-500">
              Connect every <span className="text-slate-900 font-bold">30 days</span>
            </p>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#244D3F] mb-5">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleInteraction("Call")}
                  className="bg-[#f8fafc] p-10 rounded-2xl flex flex-col items-center hover:bg-slate-100 transition-all group"
                >
                  <span className="text-2xl mb-2 text-black">
                    <TbPhoneCall />
                  </span>
                  <span className="text-xl text-[#1F2937]">Call</span>
                </button>
                <button
                  onClick={() => handleInteraction("Text")}
                  className="bg-[#f8fafc] p-10 rounded-2xl flex flex-col items-center hover:bg-slate-100 transition-all group"
                >
                  <span className="text-2xl mb-2 text-black">
                    <MdOutlineTextsms />
                  </span>
                  <span className="text-xl text-[#1F2937]">Text</span>
                </button>
                <button
                  onClick={() => handleInteraction("Video")}
                  className="bg-[#f8fafc] p-10 rounded-2xl flex flex-col items-center hover:bg-slate-100 transition-all group"
                >
                  <span className="text-2xl mb-2 text-black">
                    <FiVideo />
                  </span>
                  <span className="text-xl text-[#1F2937]">Video</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Interaction Timeline</h3>
              <div className="space-y-3">
                {timeline.length === 0 ? (
                  <div className="text-center py-10 border-2 border-dashed border-slate-500 rounded-xl">
                    <p className="text-black">No interactions logged today.</p>
                  </div>
                ) : (
                  timeline.map((entry, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-slate-50 border-l-4 border-emerald-600 rounded-r-lg shadow-sm"
                    >
                      <span className="font-medium text-black">{entry.title}</span>
                      <span className=" text-black">{entry.date}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
