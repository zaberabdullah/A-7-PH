"use client";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaCommentAlt, FaVideo, FaHandshake } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Timeline() {
  const [allLogs, setAllLogs] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const logs = [];

    keys.forEach((key) => {
      if (key.startsWith("timeline_")) {
        const savedData = JSON.parse(localStorage.getItem(key));
        logs.push(...savedData);
      }
    });

    const sortedLogs = logs.sort((a, b) => new Date(b.date) - new Date(a.date));
    setAllLogs(sortedLogs);
  }, []);

  const filteredLogs = allLogs.filter((log) => {
    if (filter === "All") return true;
    return log.title.toLowerCase().includes(filter.toLowerCase());
  });

  const clearTimeline = () => {
    if (window.confirm("Are you sure you want to clear all history?")) {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith("timeline_")) {
          localStorage.removeItem(key);
        }
      });

      setAllLogs([]);
      toast.error("All history cleared!");
    }
  };

  const getIcon = (title) => {
    const style = "text-3xl text-black";
    if (title.includes("Call")) return <FaPhoneAlt className={style} />;
    if (title.includes("Text")) return <FaCommentAlt className={style} />;
    if (title.includes("Video")) return <FaVideo className={style} />;
    return <FaHandshake className="text-4xl text-yellow-600" />;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black text-[#1F2937] mb-8">Timeline</h1>

        <div className="mb-8">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="p-3 bg-white border border-gray-200 rounded-lg text-slate-500 text-sm outline-none w-64 shadow-sm"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          {filteredLogs.length === 0 ? (
            <div className="bg-white p-10 rounded-xl border border-dashed border-gray-200 text-center">
              <p className="text-black">No interactions found.</p>
            </div>
          ) : (
            filteredLogs.map((log, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-6 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 flex items-center justify-center">{getIcon(log.title)}</div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-medium text-slate-700">
                    {log.title.split(" with ")[0]}{" "}
                    <span className="text-slate-400 font-medium">with {log.title.split(" with ")[1]}</span>
                  </h3>
                  <p className="text-sm text-black font-semibold mt-1">{log.date}</p>
                </div>
              </div>
            ))
          )}

          <div className="flex bg-white border border-gray-200 rounded-xl justify-center p-2 w-full items-center mb-8">
            {allLogs.length > 0 && (
              <button
                onClick={clearTimeline}
                className="text-[16px] font-medium text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
              >
                <RiDeleteBinLine /> Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
