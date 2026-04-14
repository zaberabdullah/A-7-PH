import { Plus } from "lucide-react";

const Banner = () => {
  return (
    <section className="bg-white pt-20 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#244D3F] mb-6">Friends to keep close in your life</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button
          className="bg-[#244D3F] text-white px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 mx-auto mb-20 transition-all 
  duration-200 
  ease-in-out
  
  hover:bg-[#244b41] 
  hover:shadow-xl 
  hover:-translate-y-0.5
  
  active:scale-95 
  active:bg-[#244D3F]"
        >
          <Plus size={22} /> Add a Friend
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-xl text-center">
            <h3 className="text-3xl font-black text-[#244D3F]">10</h3>
            <p className="text-[18px] text-[#64748B]">Total Friends</p>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-xl text-center">
            <h3 className="text-3xl font-black text-[#244D3F]">3</h3>
            <p className="text-[18px] text-[#64748B]">On Track</p>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-xl text-center">
            <h3 className="text-3xl font-black text-[#244D3F]">6</h3>
            <p className="text-[18px] text-[#64748B]">Need Attention</p>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-xl text-center">
            <h3 className="text-3xl font-black text-[#244D3F]">12</h3>
            <p className="text-[18px] text-[#64748B]">Interactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
