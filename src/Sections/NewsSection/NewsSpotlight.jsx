import React from "react";
import { NewsData } from "../HomeSection/NewsData";
import NewsMainSection from "./NewsMainSection";

const NewsSpotlight = () => {
  const firstThreeNews = NewsData.slice(0, 3);
  const nextFourNews = NewsData.slice(3, 7);

  return (
    <>
      {/* Spotlight Section */}
      <div className="px-4 sm:px-6 md:px-8 min-h-screen w-full font-[Light] bg-[#FFFEF7]">
        <div className="py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Spotlight</h1>
        </div>

        <div className="py-5 w-full flex flex-col lg:flex-row gap-8 lg:gap-6 lg:h-[75vh]">
          {firstThreeNews.map((news, id) => (
            <div
              key={id}
              className="w-full h-full lg:w-[32%] flex flex-col justify-between gap-4"
            >
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[50vh] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={news.img}
                  alt={news.title}
                />
              </div>

              <div className="overflow-hidden h-max py-1 w-full">
                <h1 className="text-xl">{news.title}</h1>
              </div>

              <div className="overflow-hidden h-[20vh] w-full">
                <p className="text-sm sm:text-base leading-relaxed">
                  {news.desc}
                </p>
              </div>

              <div className="overflow-hidden h-[3vh] w-full cursor-pointer">
                READ ARTICLE
              </div>
            </div>
          ))}
        </div>
      </div>
      <NewsMainSection />
      {/* Cards 4–7 Section */}
      <div className="min-h-screen w-full bg-[#FFFEF7] ">
        <div className=" py-10 px-4 md:px-8 h-full w-full flex flex-wrap flex-col lg:flex-row gap-8 lg:gap-6 overflow-hidden">
          {nextFourNews.map((news, id) => (
            <div
              key={id}
              className="w-full h-[70vh] font-[Light] lg:w-[32%] flex flex-col gap-4 mb-5"
            >
              {/* Image */}
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[50vh] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={news.img}
                  alt={news.title}
                />
              </div>

              {/* Title */}
              <div className="overflow-hidden h-max py-1 w-full">
                <h1 className="text-xl sm:text-xl">
                  {news.title}
                </h1>
              </div>

              {/* Description */}
              <div className="overflow-hidden h-[20vh] w-full">
                <p className="text-sm sm:text-base leading-relaxed">
                  {news.desc}
                </p>
              </div>

              {/* Read Article */}
              <div className="overflow-hidden h-[3vh] w-full cursor-pointer">
                READ ARTICLE
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default NewsSpotlight;