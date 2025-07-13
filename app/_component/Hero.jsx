import { Button } from '../../components/ui/button';
import React from 'react';

function Hero() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          
          <div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-[#1976D2] sm:text-4xl leading-snug">
                Your Health, <span className="text-[#4CAF50]">Just a Click Away</span>
              </h2>

              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                Search, compare, and book appointments with top doctors anytime, anywhere.
                Access quality healthcare from the comfort of your home.
              </p>

              <Button className="mt-6 bg-[#1976D2] hover:bg-[#1565C0] text-white px-6 py-2 text-md rounded-lg">
                Explore Now
              </Button>
            </div>
          </div>

          
          <div className="flex justify-center">
            <img
              src="/assets/imag/hero.png"
              className="rounded-xl shadow-lg w-full max-w-md"
              alt="Doctor Consultation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
