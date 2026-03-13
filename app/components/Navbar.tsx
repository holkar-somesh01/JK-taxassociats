"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 border-b border-border backdrop-blur-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 overflow-hidden shadow-xl">
                <Image
                  src="/logo.png"
                  alt="JK & G Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-foreground leading-none">
                  JK & G <span className="text-brand-blue">TAX</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-muted-foreground mt-1">
                  Associates
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <Link href="#services" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-brand-blue transition-colors">Services</Link>
            <Link href="#about" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-brand-blue transition-colors">About</Link>
            <Link href="#contact" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-brand-blue transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden xl:flex flex-col items-end text-sm">
              <span className="flex items-center gap-2 font-black text-brand-blue tracking-tighter">
                <Phone size={16} /> 8918567688
              </span>
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Call for Consultation</span>
            </div>
            <ThemeToggle />
            <Link
              href="tel:8918567688"
              className="hidden md:block px-8 py-3 bg-brand-blue text-white text-[10px] font-black uppercase tracking-[0.2em] sharp-button hover:bg-opacity-90 shadow-lg shadow-brand-blue/20 transition-all"
            >
              CALL NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
