"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "GST Compliance",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const waMessage = 
      `🏛️ *JK & G TAX ASSOCIATES - NEW INQUIRY* %0A` +
      `------------------------------------------%0A%0A` +
      `👤 *CLIENT NAME:* ${formData.name}%0A` +
      `📧 *EMAIL ID:* ${formData.email}%0A` +
      `📞 *PHONE NO:* ${formData.phone}%0A` +
      `💼 *SERVICE:* ${formData.service}%0A%0A` +
      `💬 *INQUIRY MESSAGE:* %0A` +
      `${formData.message}%0A%0A` +
      `------------------------------------------%0A` +
      `📅 _Submitted on: ${new Date().toLocaleDateString('en-IN')}_`;

    const waNumber = "918918567688"; // Country code + number
    window.open(`https://wa.me/${waNumber}?text=${waMessage}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Get In Touch</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-none">
              Direct <br /> <span className="text-brand-blue">Consultation</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-12">
              Fill out the form to send a direct message to our specialized consultants via WhatsApp for immediate response.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted border border-border flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Call Representative</p>
                  <p className="text-xl font-bold tracking-tight text-foreground">+91 8918567688</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted border border-border flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Email Inquiry</p>
                  <p className="text-xl font-bold tracking-tight text-foreground">priyamoffice19@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 lg:p-12 premium-card shadow-2xl shadow-brand-blue/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-muted border border-border pl-12 pr-4 py-4 sharp-input focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full bg-muted border border-border pl-12 pr-4 py-4 sharp-input focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-muted border border-border pl-12 pr-4 py-4 sharp-input focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Required Service</label>
                <select
                  name="service"
                  className="w-full bg-muted border border-border px-4 py-4 sharp-input focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all appearance-none"
                  onChange={handleChange}
                >
                  <option>GST Compliance</option>
                  <option>Income Tax (ITR)</option>
                  <option>Business Registration</option>
                  <option>Legal Documentation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-muted-foreground" size={18} />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your requirements..."
                    className="w-full bg-muted border border-border pl-12 pr-4 py-4 sharp-input focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-brand-blue text-white font-black sharp-button hover:bg-opacity-95 shadow-xl shadow-brand-blue/20 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                Send Message via WhatsApp <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
