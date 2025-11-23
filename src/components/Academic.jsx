import React from 'react';
import { PUBLICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Academic = () => {
    return (
        <section id="publications" className="py-20 relative z-10">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    Academic & <span className="text-cosmic-purple">Publications</span>
                </motion.h2>
                <div className="space-y-6">
                    {PUBLICATIONS.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cosmic-purple/30 transition-all duration-300"
                        >
                            <div className="p-3 rounded-full bg-cosmic-purple/20 text-cosmic-purple shrink-0">
                                <FileText size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-1">{pub.title}</h3>
                                <p className="text-gray-400 text-sm">{pub.venue} • <span className="text-neon-cyan">{pub.date}</span></p>
                            </div>
                            <a
                                href={pub.link}
                                className="px-4 py-2 text-sm rounded-lg border border-white/10 hover:bg-white/10 hover:text-neon-cyan transition-colors whitespace-nowrap"
                            >
                                Read Paper
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academic;
