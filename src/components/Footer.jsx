import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-white">Let's <span className="text-neon-cyan">Connect</span></h2>
                <div className="flex justify-center gap-8 mb-8">
                    {SOCIAL_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-cosmic-purple/20 hover:border-cosmic-purple hover:scale-110 hover:shadow-[0_0_15px_rgba(157,78,221,0.5)] transition-all duration-300 text-white group"
                            aria-label={link.label}
                        >
                            <link.icon size={24} className="group-hover:text-white transition-colors" />
                        </a>
                    ))}
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Ediz Arkın Kobak. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
