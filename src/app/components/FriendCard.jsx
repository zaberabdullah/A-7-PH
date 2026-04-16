import Image from "next/image";
import Link from "next/link";

const FriendCard = ({friend}) => {
  const statusColors = {
    Overdue: "bg-red-500 text-white",
    "Almost Due": "bg-orange-400 text-white",
    "On-Track": "bg-[#1a3a32] text-white",
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center cursor-pointer group h-full flex flex-col items-center">
        <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-gray-50 group-hover:scale-105 transition-transform duration-300">
          <Image src={friend.image} alt={friend.name} fill className="object-cover" sizes="80px" />
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-1">{friend.name}</h3>
        <p className="text-xs text-gray-400 mb-4 font-medium">{friend.lastContact}</p>

        <div className="mt-auto flex flex-col gap-2 w-full items-center">
          <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-extrabold rounded-full">{friend.category}</span>
          <span className={`px-4 py-1.5 text-[10px] font-bold rounded-full shadow-sm w-fit ${
              statusColors[friend.status] || "bg-gray-100 text-gray-600"
            }`} >{friend.status}</span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
