"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";
import { waapi } from "animejs";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import GiggleButton from "../GiggleButton/GiggleButton";
import { navItems } from "../constants/Functions";
import Socials from "../Socials/Socials";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        !target.closest(".circle-nav")
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

    if (sidebarOpen) {
      el.style.display = "block";
      waapi.animate(el, {
        opacity: [0, 1],
        translateX: ["-100%", "0%"],
        duration: 700,
        ease: "inOut(2)",
      });
    } else {
      waapi.animate(el, {
        opacity: [1, 0],
        translateX: ["0%", "-100%"],
        duration: 700,
        ease: "inOut(2)",
        onComplete: () => (el.style.display = "none"),
      });
    }
  }, [sidebarOpen]);

  const handleNavigate = (path: string) => {
    setSidebarOpen(false);
    router.push(path);
  };

  return (
    <>
    <div onClick={() => setSidebarOpen(prev => !prev)} className={`circle-nav ${styles.aboutButton} ${styles.circleNav}`}>

      <GiggleButton
        text=""
        overlayname=""
        isIcon
        icon={sidebarOpen ? faX : faBars}
        isIconAnimated
        name="circleNav"
        name2=""
        onClick={{
          event: "none",
          data: "",
        }}
      />
    </div>

      <AnimatePresence>
         {sidebarOpen && (
          <motion.div 
            ref={sidebarRef}
            className={styles.navbar}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className={styles.navContent}>
              <motion.h2 
                className={styles.navTitle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Navigation
              </motion.h2>

              <motion.div 
                className={styles.navDivider}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25 }}
              />

              <nav className={styles.navLinks}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className={`${styles.navLink} ${
                        pathname === item.path ? styles.active : ''
                      }`}
                    >
                      <span className={styles.linkText}>{item.label}</span>
                      {pathname === item.path && (
                        <motion.span
                          className={styles.activeIndicator}
                          layoutId="activeIndicator"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                className={styles.socialLinks}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {/* Add your social links here */}
          <motion.div className={styles.sidebarSocialContainer}>
            <Socials isHeader={true} />
          </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


// import React, { useEffect, useRef, useState } from 'react';
// import { faX, faBars } from '@fortawesome/free-solid-svg-icons';
// import { usePathname, useRouter } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from './Navbar.module.css';
// import GiggleButton from '../GiggleButton/GiggleButton';

// const Navbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const navbarRef = useRef<HTMLDivElement>(null);

//   // Navigation items
//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   // Toggle menu
//   const toggleMenu = () => {
//     setIsOpen(prev => !prev);
//   };

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         navbarRef.current &&
//         !navbarRef.current.contains(event.target as Node) &&
//         !(event.target as HTMLElement).closest(`.${styles.giggleButtonWrapper}`)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Lock body scroll when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [isOpen]);

//   // Navigation handler
//   const handleNavigate = (path: string) => {
//     setIsOpen(false);
//     router.push(path);
//   };

//   return (
//     <>
//       {/* GiggleButton for Menu Toggle */}
//       <div className={styles.giggleButtonWrapper} onClick={()=> toggleMenu()}>
//         <GiggleButton
//           text=""
//           overlayname=""
//           isIcon
//           icon={isOpen ? faX : faBars}
//           isIconAnimated
//           name="circleNav"
//           onClick={{
//             event: "none",
//             data: "",
//           }}
//         />
//       </div>

//       {/* Navigation Panel with AnimatePresence */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             ref={navbarRef}
//             className={styles.navbar}
//             initial={{ x: '-100%', opacity: 0 }}
//             animate={{ x: '0%', opacity: 1 }}
//             exit={{ x: '-100%', opacity: 0 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//           >
//             <div className={styles.navContent}>
//               <motion.h2 
//                 className={styles.navTitle}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Navigation
//               </motion.h2>

//               <motion.div 
//                 className={styles.navDivider}
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ delay: 0.25 }}
//               />

//               <nav className={styles.navLinks}>
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.path}
//                     initial={{ opacity: 0, x: -30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                   >
//                     <button
//                       onClick={() => handleNavigate(item.path)}
//                       className={`${styles.navLink} ${
//                         pathname === item.path ? styles.active : ''
//                       }`}
//                     >
//                       <span className={styles.linkText}>{item.label}</span>
//                       {pathname === item.path && (
//                         <motion.span
//                           className={styles.activeIndicator}
//                           layoutId="activeIndicator"
//                           transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//                         />
//                       )}
//                     </button>
//                   </motion.div>
//                 ))}
//               </nav>

//               <motion.div 
//                 className={styles.socialLinks}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//               >
//                 {/* Add your social links here */}
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
