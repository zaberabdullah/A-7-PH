"use client";

import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import FriendCard from "./components/FriendCard";

export default function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Banner></Banner>

      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-[#1a3a32]">Your Friends</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </main>
  );
}
