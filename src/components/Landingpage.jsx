import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
const Landingpage = () => {
  return (
    <div data-scroll  data-scroll-speed="-.8" className="w-full h-screen  pt-1  ">
      <div className="textstructure mt-36 px-20 ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ease:[0.16, 1, 0.3, 1],duration:1}}
                    className="w-[9vw] h-[7vw] relative top-[0.8vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-center bg-cover rounded-md"
                  >
                    {" "}
                  </motion.div>
                )}
                <h1 className='flex items-center uppercase text-[9vw] h-full leading-[7.5vw] font-["FoundersGrotesk, Roboto, sans-serif"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-light leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-600 font-light rounded-full cursor-pointer text-md uppercase">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-600">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
