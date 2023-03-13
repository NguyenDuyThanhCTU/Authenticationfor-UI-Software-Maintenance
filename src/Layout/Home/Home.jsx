import logo from "../../Assets/imgs/logo.jpg";
import bg from "../../Assets/imgs/1.jpg";
import { Link } from "react-router-dom";
import React from "react";

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col relative ">
      <div class="flex h-[75%] ">
        <div class="flex-[1] relative">
          <div class="rounded-3xl h-80 w-80 absolute max-w-[20%] top-8 left-8">
            <img className="rounded-3xl" src={logo} />
          </div>

          <div class="box-border absolute m-auto top-80 left-48 ">
            <h3 className="text-8xl font-bold font-sans">The 80's icafe</h3>
            <p className="text-2xl">
              Take a cup and forget about everything for a few minutes
            </p>
            <button className="bg-[#442EBA] border-none py-6 px-8 text-white hover:bg-slate-500">
              Come with us
            </button>
          </div>
        </div>
        <div class="bg-[#77BA9B] basis-[50%] flex flex-col">
          <nav className="text-white">
            <ul className="flex justify-end">
              <button className="opacity-75 text-3xl p-8" type="none">
                Home
              </button>
              <Link to="/Login">
                <button
                  className="opacity-75 text-3xl p-8 hover:text-red-500 "
                  type="submit"
                >
                  Log In
                </button>
              </Link>
            </ul>
          </nav>
          <img className="w-full" src={bg} />
        </div>
      </div>

      <footer class="bg-[#77BA9B] flex-[1] text-white bg-cover flex">
        <div className="basis-[50%] py-4 px-40">
          <h3 className="my-4 mx-0 font-bold font-sans">
            Remember your perfect moments
          </h3>
          <p className="text-5xl font-sans  tracking-wider">
            6/46 Mac Thien Tich Streets, Ninh Kieu District, CanTho city
          </p>
        </div>
        <div class="flex-[1] items-center justify-center flex-col py-20 px-0">
          <div class="flex">
            <div className="bg-white justify-center flex">
              <input
                className="w-96 pl-2 text-black outline-none"
                placeholder="Enter your favorite drink..."
              />
            </div>

            <button className="bg-[#442EBA] border-none py-6 px-8 text-white">
              Search
            </button>
          </div>
          <p class="mt-4 text-white text-3xl">we don't spam. Pinky promise!</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
