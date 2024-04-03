import React from "react";

const Card = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Image" />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-yellow-300 text-yellow-300 rounded-full border-[1px]">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh]  w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Image" />
          <button className=" uppercase absolute left-4 bottom-10 px-5 py-1  border-zinc-100 text-zinc-100 rounded-full border-[1px]">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Image" />
          <button className=" uppercase absolute left-4 bottom-10 px-5 py-1 border-zinc-100 text-zinc-100 rounded-full border-[1px]">
           business bootcamp 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
