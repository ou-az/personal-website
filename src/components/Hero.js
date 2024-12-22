import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" data-testid="hero-section" className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover">
        <div className="absolute bg-blue-500/10 w-full h-full"></div>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
                Transform Your Business with AI Integration
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Optimize your business processes and maximize profits with our cutting-edge AI solutions. 
                We help companies leverage artificial intelligence to streamline operations, reduce costs, 
                and drive growth.
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white font-bold px-6 py-4 rounded-lg text-sm hover:bg-blue-700 transition-colors mr-4"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="bg-white text-blue-600 font-bold px-6 py-4 rounded-lg text-sm border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
