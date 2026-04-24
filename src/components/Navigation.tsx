import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks =[
    { name: "Home", href: "#home" },
    { name: "About", href: "#About" },
    { name: "Experience", href: "#Experience" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Contact", href: "#Contact" },
]

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
        }
    };

    return ( 
        <>
            <motion.nav 
            initial={{ y: -100 }} 
            animate={{ y: 0 }} 
            className={`fixed top-0 left-0 right-0 z-60 transition-all duration-400 ease-[steps(4,start)] ${isScrolled ? 'py-3 backdrop-blur-lg bg-[#20323E]/85 shadow-2xl' : 'py-5 bg-transparent'}`}
        >
            <div className="flex justify-between items-center h-10 max-w-350 mx-auto px-2">
                <a href="#home"
                className="text-xl font-bold tracking-tight"
                >
                    <span className="text-primary">&lt;</span>Oluwatomide <span className="text-primary">/&gt;</span>
                </a>
                <div className='hidden lg:flex items-center gap-6'>
                    {navLinks.map((link) => (
                        <a 
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="font-medium hover:text-primary transition-colors duration-200 px-4 py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-[#b5b8bb] hover:text-[#7EC8C8] transition-colors"
                >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </motion.nav>

        <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#1E314B] lg:hidden"
            />
        
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 z-50 lg:hidden pointer-events-none flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center h-1/2 w-xs gap-8 pointer-events-auto">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1}}
                    className="text-2xl text-[#e8eaed] hover:text-[#7EC8C8] transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
        </>
     );
}
 
export default Navigation;