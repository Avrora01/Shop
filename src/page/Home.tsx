import { Search } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black">
 


      {/* MAIN */}
      <main className="px-10 py-14 grid grid-cols-4 gap-10">
        {/* LEFT SIDEBAR */}
        <aside className="col-span-1 text-sm font-medium space-y-6">
          <p>MEN</p>
          <p>WOMEN</p>
          <p>KIDS</p>
                             
          <div className="relative mt-4">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-600" />

            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm bg-white"
            />
          </div>
        </aside>

        {/* CONTENT */}
        <section className="col-span-3">
          <h1 className="text-5xl font-black">
            NEW <br /> COLLECTION
          </h1>

          <p className="mt-4 text-sm text-gray-700">Summer 2024</p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded">
            Go To Shop →
          </button>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="bg-white h-[350px]"></div>
            <div className="bg-white h-[350px]"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
