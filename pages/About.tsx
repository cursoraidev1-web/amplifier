
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* About Hero */}
      <section className="px-4 py-20 lg:py-32 bg-deep-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h4 className="text-secondary font-black tracking-widest uppercase mb-4">About the Company</h4>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">Clarity. Accuracy.<br /><span className="text-primary">Strategic Guidance.</span></h1>
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            The Amplifier Business Hub is a registration and advisory firm established to provide structured, compliant, and reliable support for individuals and small businesses in Nigeria.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
             <div className="size-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
               <span className="material-symbols-outlined text-4xl">account_balance</span>
             </div>
             <h2 className="text-4xl lg:text-5xl font-black text-deep-navy mb-6">Our Core Philosophy</h2>
             <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium">
               Our work is built on clarity and regulatory accuracy. We help our clients move from ideas to legally recognized businesses while positioning them for sustainable growth. 
             </p>
             <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
               Beyond registration, we provide ongoing education that equips business owners to operate confidently within professional standards. We believe a strong foundation is non-negotiable for scalability.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-bg-light rounded-2xl border-l-4 border-primary">
                  <h4 className="text-primary font-black text-2xl mb-1">Nationwide</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase">Serving all 36 States</p>
                </div>
                <div className="p-5 bg-bg-light rounded-2xl border-l-4 border-secondary">
                  <h4 className="text-secondary font-black text-2xl mb-1">Timely</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase">Strict Deadlines</p>
                </div>
             </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-primary p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <span className="material-symbols-outlined text-8xl absolute -top-10 -right-4 opacity-10">format_quote</span>
              <h3 className="text-2xl font-bold mb-8 relative z-10 italic">"We are committed to helping businesses build strong, compliant foundations that support growth and scalability from the very first day."</h3>
              <div className="flex items-center gap-4 relative z-10">
                <div className="size-14 rounded-2xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/40">
                  <span className="material-symbols-outlined text-white">campaign</span>
                </div>
                <div>
                   <p className="font-black text-xl">The Amplifier Team</p>
                   <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Compliance Leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nature of Business */}
      <section className="px-4 py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-deep-navy mb-4">Why Businesses Trust Us</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[32px] border border-slate-200 hover:shadow-xl transition-all">
              <div className="size-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                 <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h4 className="font-black text-xl mb-3 text-deep-navy uppercase tracking-tight">Support Cycle</h4>
              <p className="text-slate-500 font-medium leading-relaxed">Continuous guidance before, during, and significantly after the registration process is completed.</p>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-slate-200 hover:shadow-xl transition-all">
              <div className="size-12 bg-secondary/5 text-secondary rounded-xl flex items-center justify-center mb-6">
                 <span className="material-symbols-outlined">verified</span>
              </div>
              <h4 className="font-black text-xl mb-3 text-deep-navy uppercase tracking-tight">Regulatory Accuracy</h4>
              <p className="text-slate-500 font-medium leading-relaxed">Our processes are vetted against the latest Nigerian corporate laws and trademark requirements.</p>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-slate-200 hover:shadow-xl transition-all">
              <div className="size-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                 <span className="material-symbols-outlined">public</span>
              </div>
              <h4 className="font-black text-xl mb-3 text-deep-navy uppercase tracking-tight">Market Scaling</h4>
              <p className="text-slate-500 font-medium leading-relaxed">We don't just register; we position you for Export Licenses and Trademark protection for global reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section - Now with global ID */}
      <section id="contact" className="px-4 py-24 bg-primary text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
           <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Build your foundation with <span className="text-secondary">The Amplifier.</span></h2>
           <p className="text-xl text-white/80 mb-12 font-medium">Join thousands of businesses who transitioned from ideas to legally recognized entities with us.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left max-w-4xl mx-auto border-t border-white/10 pt-12">
             <div>
               <h4 className="text-secondary font-bold mb-3">Call Us</h4>
               <p className="text-lg">09067243214</p>
             </div>
             <div>
               <h4 className="text-secondary font-bold mb-3">Email Us</h4>
               <p className="text-lg break-all">oluwatobilobasamson8@gmail.com</p>
             </div>
             <div>
               <h4 className="text-secondary font-bold mb-3">Location</h4>
               <p className="text-lg">Ogun State, Nigeria</p>
             </div>
           </div>

           <button 
            onClick={() => window.open('https://wa.me/2349067243214', '_blank')}
            className="bg-secondary hover:bg-orange-700 text-white font-black py-5 px-14 rounded-full transition-all hover:scale-105 shadow-2xl shadow-black/20 text-lg flex items-center gap-3 mx-auto"
           >
             Message Us on WhatsApp
             <span className="material-symbols-outlined">arrow_forward</span>
           </button>
        </div>
      </section>
    </div>
  );
};

export default About;
