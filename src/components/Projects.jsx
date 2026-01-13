import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
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
                                    initial={{ height: "4.5em" }}
                                    animate={{ height: hoveredIndex === index ? "auto" : "4.5em" }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <p className="text-gray-400 mb-4 text-sm">
                                        {project.description}
                                    </p>
                                    {/* Fade overlay - visible only when NOT hovered */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#13131f] via-[#13131f]/80 to-transparent pointer-events-none transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
                                    ></div>
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

export default Projects;
