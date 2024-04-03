import React, { useState } from "react";

const Featured = () => {
  const [showFYDE, setShowFYDE] = useState(false);
  const [showVISE, setShowVISE] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20  border-zinc-700 border-b-[1px] pb-20">
        <h1 className='text-8xl font-["NeueMontreal, Roboto, sans-serif"] tracking-tighter'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 mt-10 ">
          <div
            className="cardcontainer relative w-1/2 rounded-xl h-[75vh]"
            onMouseEnter={() => setShowFYDE(true)}
            onMouseLeave={() => setShowFYDE(false)}
          >
            <h1
              className={`absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tighter z-[9] text-8xl font-mono ${
                showFYDE ? "block" : "hidden"
              }`}
            >
              FYDE
            </h1>
            <div className="card bg-yellow-600 rounded-xl h-full w-full overflow-hidden">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="cardcontainer relative w-1/2 h-[75vh]"
            onMouseEnter={() => setShowVISE(true)}
            onMouseLeave={() => setShowVISE(false)}
          >
            <h1
              className={`absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tighter z-[9] text-8xl font-mono ${
                showVISE ? "block" : "hidden"
              }`}
            >
              VISE
            </h1>
            <div className="card bg-yellow-600 rounded-xl h-full w-full overflow-hidden">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
