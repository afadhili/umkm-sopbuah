"use client"
import Navbar from "@/components/navbar";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-600 to-slate-800">
        <div className="bg-[url(/img/topography.svg)] min-h-screen flex flex-col items-center justify-center">
          <h1 data-aos="fade-down" data-aos-duration="1000" className="text-4xl md:text-6xl font-bold text-gray-100">Sup Buah Soeltan</h1>
          <h2 data-aos="fade-left" data-aos-duration="1000" className="text-xl md:text-2xl font-bold text-gray-300 my-6">Food are the most precious thing.</h2>

          <a data-aos="fade-up" data-aos-duration="1000" href="#" className="group px-6 py-2 rounded-md bg-gradient-to-tl from-primary to-secondary text-gray-300 hover:text-white hover:shadow-md shadow-secondary duration-200">
            See Our Menu
            <FaArrowRight className="inline-block ml-2 group-hover:rotate-90 duration-200" size={18} />
          </a>
        </div>
      </div>

      <div className="min-h-screen"></div>
    </>
  );
}
