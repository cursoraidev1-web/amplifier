
import React from 'react';
// Import Link component from react-router-dom
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      title: "CAC Registration",
      desc: "Full support for Business Names and Limited Liability Companies, ensuring legal compliance from day one.",
      icon: "app_registration"
    },
    {
      title: "Trademark Protection",
      desc: "Secure your brand identity and intellectual property with our streamlined trademark processing.",
      icon: "verified_user"
    },
    {
      title: "Export Licensing",
      desc: "Scale your reach globally. We handle the complex documentation for your export license processing.",
      icon: "local_shipping"
    },
    {
      title: "Business Advisory",
      desc: "From structuring to ongoing compliance, get expert guidance to build a scalable enterprise.",
      icon: "lightbulb"
    },
    {
      title: "Business Education",
      desc: "Empowerment programs and webinars designed to equip business owners for growth.",
      icon: "school"
    },
    {
      title: "Compliance Audit",
      desc: "Ensure your existing business structure meets current Nigerian regulatory standards.",
      icon: "task_alt"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-28 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-black mb-6 border border-primary/10">
              <span className="material-symbols-outlined text-base">verified</span>
              Structured. Compliant. Reliable.
            </div>
            <h1 className="text-deep-navy text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
              Amplify Your <span className="text-primary italic">Business</span> Potential.
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl font-medium max-w-xl mb-10 leading-relaxed">
              Nigeria's premier business registration and advisory hub. We transform your ideas into legally recognized growth engines.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => window.open('https://wa.me/2349067243214', '_blank')}
                className="w-full sm:w-auto bg-secondary hover:bg-orange-700 text-white text-base font-black py-4 px-10 rounded-full transition-all hover:scale-105 shadow-xl shadow-orange-500/30"
              >
                Start Registration
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-primary/10 hover:bg-primary/20 text-primary text-base font-black py-4 px-10 rounded-full transition-all"
              >
                Our Services
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2">
               <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                alt="Business Discussion" 
                className="w-full h-[500px] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-2xl border-l-4 border-secondary">
                  <p className="text-primary font-black text-xs uppercase mb-1">Live in Nigeria</p>
                  <p className="text-deep-navy font-bold text-lg leading-tight">Empowering entrepreneurs across all 36 states.</p>
               </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 size-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-24 bg-bg-light scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-deep-navy text-4xl lg:text-5xl font-black mb-4 tracking-tight">Nature of Services</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              We deliver professional business support services with strict attention to regulatory accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300">
                <div className="size-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary transition-all">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-deep-navy text-xl font-black mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Section */}
      <section id="advisory" className="px-4 py-24 bg-deep-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Beyond Paperwork.<br /><span className="text-secondary italic underline underline-offset-8 decoration-white/20">Sustainable Growth.</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <div>
                  <h4 className="text-xl font-black mb-1">Clarity & Accuracy</h4>
                  <p className="text-slate-300 font-medium">No hidden fees, no regulatory grey areas. Just straight paths to compliance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-3xl">trending_up</span>
                </div>
                <div>
                  <h4 className="text-xl font-black mb-1">Scalability Focus</h4>
                  <p className="text-slate-300 font-medium">We position your business for investors and local expansion from day one.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <div>
                  <h4 className="text-xl font-black mb-1">Continuous Education</h4>
                  <p className="text-slate-300 font-medium">Exclusive access to empowerment programs and compliance webinars.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-black mb-6">Expert Advisory</h3>
              <p className="text-slate-300 mb-8 font-medium">Operating with strict attention to regulatory timelines across Nigeria.</p>
              <button 
                onClick={() => window.open('https://wa.me/2349067243214', '_blank')}
                className="w-full bg-secondary hover:bg-orange-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                Chat with an Advisor
                <span className="material-symbols-outlined">chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section id="contact" className="px-4 py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <img src="logo.png" alt="Logo" className="h-10 w-auto" />
              </Link>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">Providing structured, compliant, and reliable support for individuals and small businesses in Nigeria.</p>
              <div className="flex gap-4">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/profile.php?id=100083856664885&mibextid=ZbWKwL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="size-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
                >
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>

                {/* TikTok */}
                <a 
                  href="https://vm.tiktok.com/ZSHKvfhsVW1dY-9xhTF/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="size-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  <i className="fa-brands fa-tiktok text-lg"></i>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/2349067243214" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="size-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-deep-navy font-black mb-6">Support Services</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">CAC Registration</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trademark Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Export Licensing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Business Structuring</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-deep-navy font-black mb-6">Direct Contact</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary font-bold">call</span>
                  <span className="hover:text-primary cursor-pointer">09067243214</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary font-bold">mail</span>
                  <span className="hover:text-primary cursor-pointer break-all">oluwatobilobasamson8@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary font-bold">location_on</span>
                  Ogun State, Nigeria
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-deep-navy font-black mb-6">Our Promise</h4>
              <p className="text-slate-500 font-medium mb-4">Support before, during, and after business registration. Nationwide delivery.</p>
              <div className="p-4 bg-primary/5 border-l-4 border-secondary rounded-r-xl">
                 <p className="text-primary text-xs font-black uppercase mb-1">Accuracy Status</p>
                 <p className="text-deep-navy text-sm font-bold flex items-center gap-2">
                   100% Compliant
                   <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                 </p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-bold">
            <p>© 2026 Amplifier Business Hub. Registered & Regulated.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
