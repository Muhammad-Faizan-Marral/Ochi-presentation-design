import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-2xl">
      <h1 className="frq text-[4vw] leading-[4vw] ">
        Ochi is a strategic partner for fast-growing teach businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-20">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approch:</h1>
          <button className="uppercase flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 ">
            Read more
            <div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] rounded-3xl bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg)] ">
          
        </div>

      </div>
    </div>
  );
};

export default About;
