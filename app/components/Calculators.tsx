"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calculator, Percent, Landmark, ReceiptText } from "lucide-react";

const CALC_SERVICES = [
  {
    title: "Income Tax Calculator",
    icon: <Calculator className="w-8 h-8" />,
    desc: "Calculate your taxable income and tax liability accurately for the current financial year."
  },
  {
    title: "GST Calculator",
    icon: <Percent className="w-8 h-8" />,
    desc: "Quickly determine the GST amount for your goods and services with specialized rates."
  },
  {
    title: "EMI Calculator",
    icon: <Landmark className="w-8 h-8" />,
    desc: "Plan your loans effectively by calculating monthly installments and interest schedules."
  },
  {
    title: "TDS Calculator",
    icon: <ReceiptText className="w-8 h-8" />,
    desc: "Ensure accurate Tax Deducted at Source calculations for vendors and employees."
  }
];

export default function Calculators() {
  return (
    <section id="calculators" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            Smart Tools
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-8"
          >
            Financial <span className="text-brand-blue">Calculators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Access our suite of professional financial tools designed for precision and efficiency in tax planning.
          </motion.p>
        </div>

        <div className="relative group mb-24 overflow-hidden border-[1px] border-border shadow-2xl">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/calculators-banner.png"
              alt="Financial Calculators Banner"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex items-center p-12 lg:p-24">
              <div className="max-w-lg text-white">
                <h3 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">Precision in Every Calculation</h3>
                <p className="text-lg text-white/80 font-medium mb-8">Developed by authorized experts to ensure your financial planning is 100% compliant with the latest regulations.</p>
                <button className="px-10 py-5 bg-brand-blue text-white font-black sharp-button hover:bg-opacity-95 transition-all">
                  EXPLORE TOOLS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CALC_SERVICES.map((calc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 border border-border hover:border-brand-blue transition-all group"
            >
              <div className="w-16 h-16 bg-slate-50 border border-border flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                {calc.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">{calc.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {calc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
