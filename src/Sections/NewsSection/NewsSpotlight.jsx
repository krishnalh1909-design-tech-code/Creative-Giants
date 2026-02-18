import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NewsData } from "../HomeSection/NewsData";
import NewsMainSection from "./NewsMainSection";
import gsap from "gsap";
import { splitTextIntoLines } from "../../Utils/splitTextsIntoLines";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewsSpotlight = () => {
  const firstThreeNews = NewsData.slice(0, 3);
  const nextFourNews = NewsData.slice(3, 7);

  const titlesRef = useRef([]);
  const descRef = useRef([]);

  titlesRef.current = [];
  descRef.current = [];

  const addTitleRef = (el) => {
    if (el && !titlesRef.current.includes(el)) {
      titlesRef.current.push(el);
    }
  };

  const addDescRef = (el) => {
    if (el && !descRef.current.includes(el)) {
      descRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        // Animate Titles
        titlesRef.current.forEach((title) => {
          title.innerHTML = title.textContent;

          const lines = splitTextIntoLines(title, 3);

          gsap.from(lines, {
            yPercent: 100,
            duration: 1,
            ease: "power4.out",
            stagger: 1.2,
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
            },
          });
        });

        // Animate Descriptions
        descRef.current.forEach((desc) => {
          desc.innerHTML = desc.textContent;

          const lines = splitTextIntoLines(desc, 0);

          gsap.from(lines, {
            yPercent: 100,
            duration: 1,
            ease: "power4.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: desc,
              start: "top 85%",
            },
          });
        });

        ScrollTrigger.refresh();
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Spotlight Section */}
      <div className="px-4 sm:px-6 md:px-8 min-h-screen w-full font-[Light] bg-[#FFFEF7]">
        <div className="py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Spotlight</h1>
        </div>

        <div className="py-5 w-full flex flex-col lg:flex-row gap-8 lg:gap-6 lg:h-[75vh]">
          {firstThreeNews.map((news) => (
            <Link
              key={news.id}
              to={`/news/${news.id}`}
              className="w-full h-full lg:w-[32%] flex flex-col justify-between gap-4"
            >
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[50vh] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={news.img}
                  alt={news.title}
                />
              </div>

              <div className="overflow-hidden py-1 w-full">
                <h1 ref={addTitleRef} className="text-xl">{news.title}</h1>
              </div>

              <div className="overflow-hidden h-[20vh] w-full">
                <p 
                 ref={addDescRef}
                className="text-sm sm:text-base leading-relaxed">
                  {news.desc}
                </p>
              </div>

              <div className="cursor-pointer">
                READ ARTICLE
              </div>
            </Link>
          ))}
        </div>
      </div>

      <NewsMainSection />

      {/* Cards 4–7 Section */}
      <div className="min-h-screen w-full bg-[#FFFEF7]">
        <div className="py-10 px-4 md:px-8 w-full flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-6">
          {nextFourNews.map((news) => (
            <Link
              key={news.id}
              to={`/news/${news.id}`}
              className="w-full lg:w-[32%] font-[Light] flex flex-col gap-4 mb-5"
            >
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[50vh] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={news.img}
                  alt={news.title}
                />
              </div>

              <div className="overflow-hidden py-1 w-full">
                <h1  ref={addTitleRef} className="text-xl">
                  {news.title}
                </h1>
              </div>

              <div className="overflow-hidden h-[20vh] w-full">
                <p  ref={addDescRef} className="text-sm sm:text-base leading-relaxed">
                  {news.desc}
                </p>
              </div>

              <div className="cursor-pointer">
                READ ARTICLE
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsSpotlight;