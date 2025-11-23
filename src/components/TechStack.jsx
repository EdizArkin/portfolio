import React from 'react';
import { TECH_STACK } from '../constants';
import { motion } from 'framer-motion';

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-20 relative z-10">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-12 text-white"
                >
                    Tech <span className="text-neon-cyan">Stack</span>
                </motion.h2>

                <div className="flex flex-col gap-4">
                    {TECH_STACK.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-cyan/20 transition-colors duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 md:w-64 shrink-0">
                                <div className="p-2 rounded-lg bg-cosmic-purple/10 text-cosmic-purple">
                                    <category.icon size={20} />
                                </div>
                                <h3 className="text-lg font-semibold text-white whitespace-nowrap">{category.category}</h3>
                            </div>

                            {/* Divider for desktop */}
                            <div className="hidden md:block w-px h-8 bg-white/10"></div>

                            {/* Skills List */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 flex-1">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="relative group">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 border border-white/5 hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300 cursor-default">
                                            <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
