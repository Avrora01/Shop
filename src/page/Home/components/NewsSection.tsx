// components/NewsSection.tsx
import type { News } from "@/types/cardType";

interface NewsSectionProps {
  newsData: News[];
}

const NewsSection = ({ newsData }: NewsSectionProps) => {
  return (
    <div className="min-h-[1100px] bg-[#F8F8F8]">
      <div className="pt-[4%]">
        <h1 className="text-[34px] font-bold uppercase ml-[15%]">новости</h1>
        <p className="text-[#1C1C1C] text-[14px] uppercase font-extralight text-lg ml-[15%]">
          события в мире туризма
        </p>
      </div>

      <div className="px-4 md:px-10 lg:px-72 mt-[2%]">
        {/* Первая строка */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Карточка 1 - 50% */}
          <div className="w-full md:w-[50%] relative rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
            <img
              src={newsData[0]?.img}
              alt={newsData[0]?.title}
              className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 h-full w-[50%] flex items-center p-6">
              <h3 className="text-3xl font-semibold uppercase text-white">
                {newsData[0]?.title}
              </h3>
            </div>
          </div>

          {/* Карточка 2 - 25% */}
          <div className="w-full md:w-[25%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
            <img
              src={newsData[1]?.img}
              alt={newsData[1]?.title}
              className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 h-full flex items-end p-6">
              <h3 className="text-lg font-bold uppercase text-white">
                {newsData[1]?.title}
              </h3>
            </div>
          </div>

          {/* Карточка 3 - 25% */}
          <div className="w-full md:w-[25%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
            <img
              src={newsData[2]?.img}
              alt={newsData[2]?.title}
              className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 h-full flex items-end p-6">
              <h3 className="text-lg font-bold uppercase text-white">
                {newsData[2]?.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Вторая строка */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Карточка 4 - 25% */}
          <div className="w-full md:w-[25%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
            <img
              src={newsData[3]?.img}
              alt={newsData[3]?.title}
              className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 h-full flex items-end p-6">
              <h3 className="text-lg font-bold uppercase text-white">
                {newsData[3]?.title}
              </h3>
            </div>
          </div>

          {/* Карточка 5 - 50% */}
          <div className="w-full md:w-[50%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
            <img
              src={newsData[4]?.img}
              alt={newsData[4]?.title}
              className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 h-full w-[50%] flex items-center p-6">
              <h3 className="text-2xl font-bold uppercase text-white">
                {newsData[4]?.title}
              </h3>
            </div>
          </div>

          {/* Карточка 6 - 25% */}
          <div className="w-full md:w-[25%] relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[350px]">
            <img
              src={newsData[5]?.img}
              alt={newsData[5]?.title}
              className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 h-full flex items-end p-6">
              <h3 className="font-bold uppercase text-white">
                {newsData[5]?.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;