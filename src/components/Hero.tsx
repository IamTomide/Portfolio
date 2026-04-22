import { motion } from 'framer-motion';
import { Mail ,ArrowRight, Code2, Download } from 'lucide-react';
import Github from '../assets/icons/github.svg?react';
import LinkedIn from '../assets/icons/linkedIn.svg?react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/IamTomide', label: 'GitHub' },
  { icon: LinkedIn, href: 'https://www.linkedin.com/in/olaleye-oluwatomide-a75529238/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:paulinaebunoluwa@gmail.com', label: 'Email' },
];

const Hero = () => {
    const handleSmoothScroll =(e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return ( 
        <section id="home" className='min-h-screen flex relative items-center pt-20 justify-center overflow-hidden'>
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                animate={{
                    x: ['-100%', '200%'],
                    y: ['-50%', '100%']
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 8,
                    ease: 'linear'
                }}
                className="absolute top-1/4 left-0 w-0.5 h-32 bg-linear-to-b from-transparent via-primary to-transparent opacity-80"
                style={{
                    boxShadow: '0 0 20px 4px rgba(94,154,215,0.8)'
                }}
                />
                <motion.div
                animate={{
                    x: ['-100%', '200%'],
                    y: ['60%', '-40%']
                }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 10,
                    ease: 'linear',
                    delay: 4
                }}
                className="absolute top-1/2 left-0 w-0.5 h-24 bg-linear-to-b from-transparent via-primary/70 to-transparent opacity-60"
                style={{
                    boxShadow: '0 0 15px 3px rgba(94,154,215,0.6)'
                }}
                />
            </div>

            <div className="max-w-350 px-4 mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.3}}
                className='space-y-6'
                >
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.4, delay: 0.7}}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#193D6F] border border-[#4F5355] text-[#e8eaed]"
                    >
                        <Code2 className="w-4 h-4 text-primary" strokeWidth={2} />
                        <span className='font-semibold'>Hi, I am Oluwatomide</span>
                    </motion.div>
                    
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#e8eaed] font-bold">
                        Frontend Developer
                        <span className="block text-primary mt-2 text-normal md:text-2xl lg:text-3xl font-semibold">
                            with FullStack Experience
                        </span>
                        </h1>
                        
                        <p className="text-[#e8ae8e5] text-normal max-w-lg leading-relaxed">
                        I turn designs into optimal, polished web experiences.
                        Specializing in React, Javascript, and modern web technologies, 
                        with enough full-stack range to bring a complete product to life..
                        </p>
                    </div>  

                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#D75E5E] hover:bg-[#e86f6f] text-white rounded-lg transition-all shadow-[0_0_20px_rgba(215,94,94,0.4)] hover:shadow-[0_0_30px_rgba(215,94,94,0.6)] font-bold"
                        >
                            <Download size={18} strokeWidth={2.5} />
                        Download Resume
                        </motion.a>
                        
                        <motion.a
                        href="#projects"
                        onClick={(e) => handleSmoothScroll(e, '#projects')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#193D6F] hover:bg-[#1f4a85] border border-[#4F5355] hover:border-[#D75E5E] rounded-lg transition-all shadow-sm font-semibold text-[#e8eaed]"
                        >
                            View Projects
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </motion.a>
                    </div>

                    <div className="flex gap-4 pt-6">
                        {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="w-12 h-12 flex items-center justify-center bg-[#193D6F] hover:bg-[#4A3E5C] border border-[#4F5355] hover:border-[#D75E5E] rounded-lg transition-all shadow-sm group"
                            aria-label={social.label}
                        >
                            <social.icon size={20} strokeWidth={2} className="text-[#b5b8bb] group-hover:text-[#D75E5E] transition-colors" />
                        </motion.a>
                        ))}
                        </div>
                </motion.div>

                <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
            {/* Central focal point */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Core glow */}
              <div className="w-24 h-24 rounded-full bg-[#D75E5E]/20 blur-2xl"></div>
              <div className="absolute w-16 h-16 rounded-full bg-[#D75E5E]/40 blur-lg"></div>
              <div className="absolute w-12 h-12 rounded-full bg-[#D75E5E] shadow-[0_0_30px_rgba(215,94,94,0.8)]"></div>
              
              {/* Orbiting rings */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 border border-dashed border-[#4F5355]/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-72 h-72 border border-dashed border-[#4F5355]/20 rounded-full"
              />
            </motion.div>

            {/* Constellation nodes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {/* Nodes with subtle red glow */}
              {[
                { top: '15%', left: '25%', size: 'w-2 h-2', delay: 0 },
                { top: '30%', right: '20%', size: 'w-2.5 h-2.5', delay: 0.5 },
                { bottom: '35%', left: '15%', size: 'w-2 h-2', delay: 1 },
                { bottom: '20%', right: '25%', size: 'w-2.5 h-2.5', delay: 1.5 },
                { top: '45%', left: '8%', size: 'w-1.5 h-1.5', delay: 2 },
                { top: '40%', right: '10%', size: 'w-1.5 h-1.5', delay: 2.5 }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: node.delay,
                    ease: "easeInOut"
                  }}
                  className={`absolute ${node.size} bg-[#D75E5E] rounded-full`}
                  style={{
                    top: node.top,
                    left: node.left,
                    right: node.right,
                    bottom: node.bottom,
                    boxShadow: `0 0 10px 2px rgba(215,94,94,0.6)`
                  }}
                />
              ))}
            </motion.div>

            {/* Floating code blocks */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-3, 3, -3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-16 right-12 bg-[#4A3E5C] border border-[#4F5355] rounded-lg p-3 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#D75E5E]"></div>
                <div className="w-2 h-2 rounded-full bg-[#4F5355]"></div>
                <div className="w-2 h-2 rounded-full bg-[#4F5355]"></div>
              </div>
              <div className="space-y-1 font-mono text-xs text-[#b5b8bb]">
                <div className="text-[#D75E5E]">const</div>
                <div className="text-[#e8eaed]">build</div>
                <div className="text-[#4F5355]">= true</div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [3, -3, 3]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-20 left-8 bg-[#4A3E5C] border border-[#4F5355] rounded-lg p-3 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#D75E5E]"></div>
                <div className="w-2 h-2 rounded-full bg-[#4F5355]"></div>
                <div className="w-2 h-2 rounded-full bg-[#4F5355]"></div>
              </div>
              <div className="space-y-1 font-mono text-xs text-[#b5b8bb]">
                <div className="text-[#D75E5E]">&lt;Code</div>
                <div className="text-[#e8eaed] ml-2">art</div>
                <div className="text-[#4F5355]">/&gt;</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#4F5355] rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-[#D75E5E] rounded-full shadow-[0_0_8px_rgba(215,94,94,0.8)]"></div>
        </motion.div>
      </motion.div>

        </section>
     );
}
 
export default Hero;