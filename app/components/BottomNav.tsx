"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Briefcase, MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");
  const [showFab, setShowFab] = useState(true);

  useEffect(() => {
    const sections = ["home", "services", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id || "home");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveTab("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTabClass = (id: string) => {
    const base = "flex flex-col items-center justify-center px-6 transition-all duration-500 relative ";
    return activeTab === id
      ? base + "text-white"
      : base + "text-muted-foreground";
  };

  return (
    <>
      {/* Floating Call Action Button (FAB) */}
      <AnimatePresence>
        {showFab && (
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            href="tel:8918567688"
            className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-brand-blue text-white flex items-center justify-center shadow-2xl md:hidden"
            style={{ borderRadius: '0px' }} // Sharp design as requested
          >
            <Phone size={24} className="animate-pulse" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Centered 3-Tab Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm h-16 bg-card/90 backdrop-blur-xl border border-border md:hidden overflow-hidden">
        <div className="relative grid h-full grid-cols-3">

          {/* Animated Background Indicator */}
          <motion.div
            className="absolute top-0 bottom-0 bg-brand-blue z-0"
            initial={false}
            animate={{
              x: activeTab === "home" ? "0%" : activeTab === "services" ? "100%" : "200%",
              width: "33.33%"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          <Link
            href="#home"
            onClick={() => setActiveTab("home")}
            className={getTabClass("home")}
          >
            <Home className="w-5 h-5 mb-0.5 relative z-10" />
            <span className="text-[9px] uppercase font-black relative z-10">Home</span>
          </Link>

          <Link
            href="#services"
            onClick={() => setActiveTab("services")}
            className={getTabClass("services")}
          >
            <Briefcase className="w-5 h-5 mb-0.5 relative z-10" />
            <span className="text-[9px] uppercase font-black relative z-10">Services</span>
          </Link>

          <Link
            href="#contact"
            onClick={() => setActiveTab("contact")}
            className={getTabClass("contact")}
          >
            <MessageSquare className="w-5 h-5 mb-0.5 relative z-10" />
            <span className="text-[9px] uppercase font-black relative z-10">Consult</span>
          </Link>

        </div>
      </div>
    </>
  );
}
