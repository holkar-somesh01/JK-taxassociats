"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  ShieldCheck,
  Scale,
  LineChart,
  Wallet,
  Layout,
  ClipboardCheck,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "GST Compliance",
    desc: "End-to-end GST management including Registration, Monthly Return Filing, and Expert Notice Reply.",
    icon: ShieldCheck,
    tag: "Priority"
  },
  {
    title: "Income Tax (ITR)",
    desc: "Precision-driven tax return filing for Individuals (Salaried/Professional) and Business entities.",
    icon: FileText,
    tag: "Essential"
  },
  {
    title: "Business Licenses & Registration",
    desc: "Dedicated support for all essential business licenses and statutory registrations.",
    features: ["FSSAI License", "MSME / UDYAM", "Trade License", "ISO Certification", "Trademark", "IEC License"],
    icon: Briefcase,
    tag: "Growth"
  },
  {
    title: "Financial Accounting",
    desc: "Maintained Book-keeping, PAN/TAN services, and comprehensive Financial Statement preparation.",
    icon: LineChart,
    tag: "Management"
  },
  {
    title: "Legal Drafting",
    desc: "Professional drafting of Legal and Business Documents, Partnerships, and Legal Consultations.",
    icon: Scale,
    tag: "Legal"
  },
  {
    title: "Audit Services",
    desc: "Professional auditing to ensure statutory compliance and financial integrity.",
    features: ["Tax Audit", "GST Audit", "Internal Audit", "Statutory Compliance"],
    icon: ClipboardCheck,
    tag: "Audit"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background text-foreground transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-[10px]">Full Spectrum Services</span>
            <h2 className="text-5xl lg:text-7xl font-black mt-6 tracking-tighter leading-none">
              Strategic Solutions
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pb-2"
          >
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed border-l-4 border-brand-blue pl-8">
              We provide high-integrity consultancy services backed by government-certified expertise and years of industrial experience.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="premium-card p-12 flex flex-col h-full border-r border-b border-border group"
            >
              <div className="mb-10 flex justify-between items-start">
                <div className="w-16 h-16 bg-muted border border-border flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                  <s.icon size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-3 py-1 border border-border">
                  {s.tag}
                </span>
              </div>

              <h3 className="text-2xl font-black mb-6 tracking-tight transition-colors group-hover:text-brand-blue text-foreground">
                {s.title}
              </h3>

              <div className="flex-grow mb-10">
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>
                {s.features && (
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {s.features.map((f, fi) => (
                      <li key={fi} className="text-[10px] font-black text-foreground flex items-center gap-2 uppercase tracking-tight">
                        <span className="w-2 h-[2px] bg-brand-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex items-center gap-3 text-brand-blue font-black text-xs uppercase tracking-[0.2em] group/btn cursor-pointer">
                Learn More
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
