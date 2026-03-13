"use client";

import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 overflow-hidden shadow-xl">
                <Image
                  src="/logo.png"
                  alt="JK & G Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                JK & G <span className="text-blue-500">TAX</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Established in 2019, JK & G TAX ASSOCIATES is a trusted tax consultancy firm located in Arambagh, Hooghly. We provide professional services for the modern business.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-8 h-8 flex items-center justify-center border border-slate-700 hover:bg-brand-blue hover:text-white transition-colors">
                <Linkedin size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center border border-slate-700 hover:bg-brand-blue hover:text-white transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center border border-slate-700 hover:bg-brand-blue hover:text-white transition-colors">
                <Twitter size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Tax Services</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">GST Compliance</Link></li>
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Mr. Ghosh</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-500 mt-1" size={20} />
                  <div className="text-sm">
                    <p className="font-bold text-white mb-1">Office Location</p>
                    <p>Satitola, Arambagh, Hooghly,</p>
                    <p>West Bengal - 712601</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-500 mt-1" size={20} />
                  <div className="text-sm">
                    <p className="font-bold text-white mb-1">Call / WhatsApp</p>
                    <p>8918567688</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-500 mt-1" size={20} />
                  <div className="text-sm">
                    <p className="font-bold text-white mb-1">Email Address</p>
                    <p>priyamoffice19@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-blue-500 mt-1" size={20} />
                  <div className="text-sm">
                    <p className="font-bold text-white mb-1">Enrolment No.</p>
                    <p>192500007045GPP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} JK & G TAX ASSOCIATES. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
