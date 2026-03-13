"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, ArrowRight, UserCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] lg:min-h-[95vh] flex items-start md:pt-18 pt-12 pb-16 overflow-hidden bg-background text-foreground transition-colors duration-500">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-muted/30 hidden lg:block skew-x-[-6deg] translate-x-20 border-l border-border"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-40 right-[15%] w-64 h-64 md:w-96 md:h-96 bg-brand-blue/5 blur-[80px] md:blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent text-accent-foreground border border-brand-blue/20 text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] mb-6 md:mb-10 shadow-sm">
              <ShieldCheck size={14} className="text-brand-blue" /> Authorized GST Practitioner
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] uppercase break-words">
              Expert <br />
              <span className="text-brand-blue">Taxation</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join 500+ businesses who trust <span className="text-foreground">JK & G Tax Associates</span> for precise filing, legal drafting, and strategic compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-12 py-5 md:py-6 bg-brand-blue text-white font-black sharp-button hover:bg-opacity-95 flex items-center justify-center gap-4 group transition-all shadow-xl shadow-brand-blue/20"
              >
                BOOK CONSULTATION <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <Link href="#services" className="px-8 md:px-12 py-5 md:py-6 border-2 border-border text-foreground font-black sharp-button hover:bg-muted flex items-center justify-center transition-all">
                OUR EXPERTISE
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 md:gap-12">
              {[
                { label: "Active Clients", value: "500+" },
                { label: "Tax Audits", value: "2K+" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-black text-brand-blue tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="relative z-20 group max-w-md mx-auto lg:max-w-none">
              <div className="border-[12px] md:border-[20px] border-card bg-card overflow-hidden transition-all duration-700">
                <div className="relative aspect-[3/4] sm:aspect-[3.5/5] overflow-hidden">
                  <Image
                    src="/priyam-ghosh.jpg.jpeg"
                    alt="Mr. Priyam Ghosh Portrait"
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-brand-blue p-6 md:p-10 text-white border border-white/10 shadow-2xl w-auto"
              >
                <div className="space-y-3 md:space-y-4">
                  <UserCheck size={32} className="md:w-10 md:h-10 mb-1" />
                  <div>
                    <div className="text-xl md:text-2xl font-black tracking-tighter leading-none mb-1">Mr. Priyam Ghosh</div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Director & Lead Consultant</p>
                  </div>
                  <div className="pt-3 md:pt-4 border-t border-white/20">
                    <div className="text-[10px] font-bold leading-none mb-1 opacity-70">Enrolment No.</div>
                    <div className="text-sm md:text-lg font-black tracking-tight tracking-wider uppercase">192500007045GPP</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
