import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import { ChevronRight, ShieldCheck, Clock, Award, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-500">
      <Hero />
      
      {/* Why Choose Us & Office Section */}
      <section id="about" className="py-32 bg-muted border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 border-[16px] border-card bg-card shadow-none">
                 <div className="relative aspect-video lg:aspect-[16/10] overflow-hidden grayscale-[30%] hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src="/office-wide.jpg.jpeg" 
                      alt="JK & G TAX ASSOCIATES Office"
                      fill
                      className="object-cover"
                    />
                 </div>
              </div>
              
              {/* Decorative floating stats box */}
              <div className="absolute -bottom-10 -right-10 bg-background border-2 border-brand-blue p-8 z-20 hidden md:block">
                 <div className="text-4xl font-black text-brand-blue leading-none mb-2">5+</div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Years of Excellence</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Foundation</span>
              <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">
                Authorized & <br /> <span className="text-brand-blue">Transparent</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                At JK & G Tax Associates, we combine traditional professional integrity with modern efficiency. Our Arambagh office is equipped to handle the most complex taxation challenges.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Govt. Approved", desc: "Registered Practitioner status ensuring absolute legal compliance." },
                  { title: "Timely Filings", desc: "Advanced tracking systems to eliminate late-fee risks entirely." },
                  { title: "Accurate Advice", desc: "Expert assessment for both Individual and Corporate portfolios." },
                  { title: "Affordable", desc: "Structured fee model with 100% transparency for every client." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-2">
                       <CheckCircle size={18} className="text-brand-blue" />
                       <h4 className="font-bold text-lg tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Services />

      {/* Corporate Standards Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="border-[2px] border-border p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px]"></div>
               <div className="max-w-xl relative z-10">
                  <h3 className="text-3xl lg:text-5xl font-black tracking-tighter leading-tight mb-8">
                    Committed to <br /> <span className="text-brand-blue">Professional Standards</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
                    {[
                      "Satisfied Business Clients",
                      "Hooghly & Regional Expertise",
                      "MSME Dedicated Support",
                      "Legal Document Drafting"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-brand-blue"></div>
                        <span className="font-bold text-lg">{text}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="shrink-0 relative z-10">
                  <button className="px-12 py-6 bg-brand-blue text-white font-black sharp-button hover:bg-opacity-95 shadow-xl shadow-brand-blue/20 transition-all">
                    START FILING NOW
                  </button>
               </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rotate-45"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter uppercase whitespace-normal lg:whitespace-nowrap">Streamline Your Taxes Today</h2>
          <p className="text-white/80 mb-14 text-2xl leading-relaxed max-w-2xl mx-auto">
            Get expert authorized consultation for your business portfolios from the leading team in the region.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a 
              href="tel:8918567688" 
              className="px-14 py-6 bg-white text-brand-blue font-black sharp-button hover:bg-opacity-95 transition-all text-center text-lg"
            >
              CALL 8918567688
            </a>
            <a 
              href="mailto:priyamoffice19@gmail.com" 
              className="px-14 py-6 border-2 border-white text-white font-black sharp-button hover:bg-white/10 transition-all text-center text-lg uppercase tracking-widest"
            >
              EMAIL US
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
