"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Scan, ShieldCheck, Wallet, ArrowRight } from "lucide-react";

export default function PaymentQR() {
  return (
    <section id="payment" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 blur-[80px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Secure Transactions</span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-10 uppercase">
              Simplified <br /> <span className="text-brand-blue">Payments</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              We've integrated modern payment solutions to make your tax consulting experience seamless. Scan any major UPI app to complete your transactions securely.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">100% Secure</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Encrypted end-to-center payment processing via authorized UPI gateways.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0">
                  <Wallet size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Instant Confirmation</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Receive immediate acknowledgment of your payment for your records.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               {/* Just labels representing UPI providers since we're using a corporate theme */}
               <span className="text-xs font-black tracking-widest border border-slate-700 px-4 py-2">BHIM UPI</span>
               <span className="text-xs font-black tracking-widest border border-slate-700 px-4 py-2">GOOGLE PAY</span>
               <span className="text-xs font-black tracking-widest border border-slate-700 px-4 py-2">PHONEPE</span>
               <span className="text-xs font-black tracking-widest border border-slate-700 px-4 py-2">PAYTM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The Acrylic Stand Container */}
            <div className="relative z-20 border-[20px] border-slate-800 bg-slate-800 shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                <Image
                  src="/actual-payment-qr.jpeg"
                  alt="Payment QR Code"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
            
            {/* Decorative Label */}
            <div className="absolute -top-6 -right-6 bg-brand-blue p-8 z-30 hidden md:block">
              <div className="text-center">
                <Scan size={32} className="mx-auto mb-2" />
                <div className="text-xs font-black tracking-tighter uppercase whitespace-nowrap">SCAN TO PAY</div>
              </div>
            </div>

            {/* Glowing effect */}
            <div className="absolute -inset-4 bg-brand-blue/20 blur-[60px] z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
