"use client"
import Navbar from "@/components/navbar";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="max-w-full bg-gradient-to-br from-slate-900 via-slate-600 to-slate-800">
        <div className="bg-[url(/img/topography.svg)] relative -z-0
        before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-transparent before:to-slate-900">
          <div className="z-10 flex flex-col items-center justify-center min-h-screen">
            <h1 data-aos="fade-down" data-aos-duration="1000" className="text-4xl md:text-6xl font-bold text-gray-100">Sup Buah Soeltan</h1>
            <h2 data-aos="fade-left" data-aos-duration="1000" className="text-xl md:text-2xl font-bold text-gray-300 my-6">Food are the most precious thing.</h2>

            <a data-aos="fade-up" data-aos-duration="1000" href="#" className="group px-6 py-2 rounded-md bg-gradient-to-tl from-primary to-secondary text-gray-300 hover:text-white hover:shadow-md shadow-secondary duration-200">
              See Our Menu
              <FaArrowRight className="inline-block ml-2 group-hover:rotate-90 duration-200" size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-full bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="py-8 px-4 md:px-20 min-h-screen justify-center items-center grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center" data-aos="fade-right" data-aos-duration="1000">
            <Image src={'/img/supbuah_vector.webp'} className="" alt="sup buah" width={400} height={400} />
          </div>
          <div className="text-center md:text-left">
            <h2 data-aos="fade-down" data-aos-duration="1000" className="text-xl font-bold text-secondary">About</h2>
            <h1 data-aos="fade-left" data-aos-duration="1000" className="text-4xl text-gray-100 font-bold mb-4">We speak the good food language</h1>
            <p data-aos="fade-left" data-aos-duration="1000" className="text-gray-300 mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptas similique veniam, eius natus reiciendis accusantium doloremque laborum commodi culpa excepturi deserunt, eos modi autem perspiciatis, vel nulla iusto minima!
            </p>
            <a data-aos="fade-up" data-aos-duration="1000" href="#" className="group px-6 py-2 rounded-md bg-gradient-to-tl from-primary to-secondary text-gray-300 hover:text-white hover:shadow-md shadow-secondary duration-200">
              See Our Menu
              <FaArrowRight className="inline-block ml-2 group-hover:rotate-90 duration-200" size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="min-h-screen"></div>
    </div>
  );
}
