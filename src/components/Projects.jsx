import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    Featured <span className="text-neon-cyan">Projects</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            layout
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ layout: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 } }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-colors duration-300 group relative z-0 hover:z-10"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>

                                <div className="relative overflow-hidden">
                                    <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                        {project.description}
                                    </p>
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="text-gray-400 text-sm absolute top-0 left-0 bg-[#0a0a1f] w-full h-full overflow-y-auto"
                                            >
                                                {project.description}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Alternative approach: Just animating height of container if we want to expand the card itself */}
                                {/* Let's try the layout prop approach again but with AnimatePresence for the text specifically if the user wants "opening downwards" */}

                            </div>

                            {/* Re-implementing the "Expand Card" logic properly */}
                            <div className="px-6 pb-6">
                                <motion.div layout>
                                    <p className={`text-gray-400 mb-4 text-sm ${hoveredIndex === index ? '' : 'line-clamp-3'}`}>
                                        {project.description}
                                    </p>
                                </motion.div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-cosmic-purple/10 text-cosmic-purple border border-cosmic-purple/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.githubLink} className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Github size={20} /></a>
                                    <a href={project.demoLink} className="text-gray-400 hover:text-neon-cyan hover:scale-110 transition-all"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Correcting the implementation to be cleaner and match the "smooth downward" request
const ProjectsFinal = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    Featured <span className="text-neon-cyan">Projects</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            layout
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-colors duration-300 group relative z-0 hover:z-10"
                        >
                            <div className="h-48 overflow-hidden relative shrink-0">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>

                                <motion.div
                                    layout
                                    className="relative overflow-hidden"
                                    initial={{ height: "4.5em" }} // approx 3 lines
                                    animate={{ height: hoveredIndex === index ? "auto" : "4.5em" }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <p className="text-gray-400 mb-4 text-sm">
                                        {project.description}
                                    </p>
                                </motion.div>

                                <div className="flex flex-wrap gap-2 mb-6 mt-4">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-cosmic-purple/10 text-cosmic-purple border border-cosmic-purple/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto">
                                    <a href={project.githubLink} className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Github size={20} /></a>
                                    <a href={project.demoLink} className="text-gray-400 hover:text-neon-cyan hover:scale-110 transition-all"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsFinal;
