import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative z-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-400">
                        {HERO_CONTENT.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-cosmic-purple mb-6 font-light tracking-wide">
                        {HERO_CONTENT.role}
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {HERO_CONTENT.bio}
                    </p>
                    <a
                        href={HERO_CONTENT.resumeLink}
                        className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cosmic-purple to-purple-800 text-white font-semibold shadow-[0_0_15px_rgba(157,78,221,0.5)] hover:shadow-[0_0_25px_rgba(157,78,221,0.8)] hover:scale-105 transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cosmic-purple/30 shadow-[0_0_50px_rgba(157,78,221,0.3)]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-purple/20 to-transparent z-10"></div>
                        <img
                            src={HERO_CONTENT.image}
                            alt={HERO_CONTENT.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
