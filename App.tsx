import React, { useRef, useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Smartphone, 
  Zap, 
  Search, 
  Target, 
  Menu, 
  X,
  ChevronDown,
  Globe,
  Gauge,
  MousePointerClick,
  ShieldCheck,
  Star,
  AlertCircle
} from 'lucide-react';

// --- Components ---

// 1. Navigation / Header
const Header = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center transform rotate-3">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Pixel<span className="text-brand-400">Perfect</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#problems" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Why Audit?</a>
          <a href="#process" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">What's Included</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Results</a>
          <button 
            onClick={onCtaClick}
            className="bg-white text-slate-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-brand-50 transition-colors"
          >
            Get Free Audit
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-4 flex flex-col space-y-4 shadow-xl">
          <a href="#problems" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white block py-2">Why Audit?</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white block py-2">What's Included</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white block py-2">Results</a>
          <button 
            onClick={() => { onCtaClick(); setMobileMenuOpen(false); }}
            className="bg-brand-500 text-white w-full py-3 rounded-lg font-bold"
          >
            Get Free Audit
          </button>
        </div>
      )}
    </nav>
  );
};

// 2. Hero Section
const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
          <span className="text-slate-300 text-sm font-medium">Taking new audit requests for Oct 2023</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
          Your Website Should Be Your <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Best Salesperson.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 animate-fade-in-up [animation-delay:200ms]">
          Stop losing leads to bad design. Get a comprehensive, expert audit of your site’s performance, UX, and conversion strategy—<span className="text-white font-semibold">completely free.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up [animation-delay:300ms]">
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group"
          >
            Get My Free Website Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
             onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
             className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-semibold text-lg transition-all"
          >
            View Success Stories
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-500 animate-fade-in-up [animation-delay:400ms]">
          <CheckCircle2 className="w-4 h-4 inline-block text-brand-500 mr-1" /> No credit card required 
          <span className="mx-3">•</span>
          <CheckCircle2 className="w-4 h-4 inline-block text-brand-500 mr-1" /> Results in 24 hours
        </p>
      </div>
    </section>
  );
};

// 3. Trust Banner
const TrustBanner = () => {
  const brands = [
    { name: "TechFlow", initial: "T" },
    { name: "GrowthBox", initial: "G" },
    { name: "ApexMedia", initial: "A" },
    { name: "SourceCode", initial: "S" },
    { name: "Velox", initial: "V" }
  ];

  return (
    <section className="py-10 border-y border-slate-800/50 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-wider mb-6">
          Trusted by fast-growing companies to improve conversions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <div key={i} className="flex items-center space-x-2">
               <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center font-bold text-slate-300">
                 {brand.initial}
               </div>
               <span className="font-bold text-xl text-slate-400">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Problem / Solution
const ProblemSolution = () => {
  return (
    <section id="problems" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Is Your Website Leaking Revenue?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Most business websites are beautiful digital brochures that fail to do the one thing they need to do: <span className="text-brand-400 font-semibold">Convert visitors into customers.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="space-y-6">
            <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <X className="w-6 h-6 mr-2" /> The Common Problems
              </h3>
              <ul className="space-y-4">
                {[
                  "Visitors bounce within 5 seconds",
                  "Pages load too slowly on mobile devices",
                  "Call-to-actions are hidden or confusing",
                  "Design looks outdated compared to competitors",
                  "Google Analytics shows traffic but no leads"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Side (Visual Transition) */}
          <div className="relative">
             <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:block z-10 bg-slate-900 p-2 rounded-full border border-slate-700">
                <ArrowRight className="text-slate-400" />
             </div>
            <div className="bg-brand-500/5 border border-brand-500/20 p-6 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-xl font-bold text-brand-400 mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2" /> The Optimized Solution
              </h3>
              <ul className="space-y-4">
                {[
                  "Instant value proposition that hooks visitors",
                  "Lightning-fast mobile experiences",
                  "Strategic user flows that drive action",
                  "Modern, authority-building aesthetics",
                  "Data-driven layout decisions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-200">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Assessment Details (Value Stack)
const AssessmentDetails = () => {
  const cards = [
    {
      icon: <Target className="w-8 h-8 text-brand-400" />,
      title: "UX & Conversion Review",
      desc: "We analyze your user journey to find exactly where prospects are dropping off."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand-400" />,
      title: "Mobile Responsiveness",
      desc: "Detailed check of how your site performs on iPhone, Android, and tablets."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-400" />,
      title: "Performance & Speed",
      desc: "Core Web Vitals assessment to ensure speed isn't killing your SEO rankings."
    },
    {
      icon: <Search className="w-8 h-8 text-brand-400" />,
      title: "SEO Foundation Check",
      desc: "Review of headers, meta tags, and structure to help you rank higher."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-semibold tracking-wider text-sm uppercase">What You Get</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Inside Your Free 5-Point Audit</h2>
          <p className="text-slate-400">No automated generic reports. You get a manual review by a senior designer.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/50 transition-colors group">
              <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Lead Capture Form
const AuditForm = ({ formRef }: { formRef: React.RefObject<HTMLDivElement> }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mvzgjyjn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section ref={formRef} className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-brand-500/30 p-12 rounded-3xl shadow-2xl">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Request Received!</h2>
            <p className="text-slate-300 text-lg mb-8">
              We've started analyzing your website. Look out for an email from <strong>audit@pixelperfect.com</strong> within the next 24 hours.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-brand-400 hover:text-brand-300 font-medium"
            >
              Submit another website
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={formRef} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative gradient behind form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Form Context/Left Side */}
          <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-10 md:w-2/5 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Fix Your Website</h3>
              <p className="text-brand-100 mb-6">
                Fill out the details to get your comprehensive video review and PDF report delivered to your inbox.
              </p>
              <ul className="space-y-3 text-sm text-brand-50">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Confidential review
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4" /> Expert analysis
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Actionable steps
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <div className="flex items-center gap-3 opacity-80">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-brand-600"></div>
                  ))}
                </div>
                <div className="text-xs font-medium">
                  Join 500+ founders <br /> who upgraded their site
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields/Right Side */}
          <div className="p-10 md:w-3/5 bg-slate-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <input 
                  required 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                <input 
                  required 
                  type="email" 
                  id="email"
                  name="email" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-300 mb-1">Website URL</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                  <input 
                    required 
                    type="url" 
                    id="website" 
                    name="website"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="https://www.yourcompany.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-slate-300 mb-1">Biggest Challenge?</label>
                <div className="relative">
                  <select 
                    id="challenge"
                    name="challenge"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent appearance-none transition-all"
                  >
                    <option>Low conversion rate</option>
                    <option>Design looks outdated</option>
                    <option>Mobile issues</option>
                    <option>High bounce rate</option>
                    <option>Just launching</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 w-5 h-5 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg flex items-center gap-2 text-red-300 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 rounded-lg shadow-lg shadow-brand-500/20 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {status === 'submitting' ? 'Analyzing...' : 'Get My Free Assessment'}
              </button>
              
              <p className="text-center text-xs text-slate-500 mt-4">
                No spam. No obligation. 100% free.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Testimonials
const Testimonials = () => {
  const reviews = [
    {
      quote: "The audit opened my eyes to 3 critical issues costing us about $5k/month. We fixed them and saw immediate results.",
      author: "Sarah Jenkins",
      role: "Founder, EcomStyle",
      metric: "+42% Conversion Rate"
    },
    {
      quote: "I thought my site was fine until I saw the mobile breakdown. The redesign suggestion was spot on. Professional and sharp.",
      author: "Marcus Chen",
      role: "CEO, Chen Realty",
      metric: "2x Leads in 30 Days"
    },
    {
      quote: "Honest, direct, and incredibly valuable. Most agencies charge $500 for this level of insight. Highly recommended.",
      author: "Elena Rodriguez",
      role: "Marketing Director, SaaSPulse",
      metric: "Reduced Bounce Rate by 25%"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Results Speak for Themselves</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 italic mb-6">"{review.quote}"</p>
              </div>
              <div>
                <div className="bg-brand-900/30 border border-brand-900/50 rounded px-3 py-1 inline-block mb-4">
                  <span className="text-brand-400 text-sm font-semibold">{review.metric}</span>
                </div>
                <div>
                  <div className="font-bold text-white">{review.author}</div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. Sticky Mobile CTA
const StickyMobileCTA = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-800 p-4 md:hidden z-50 animate-fade-in-up">
      <button 
        onClick={onCtaClick}
        className="w-full bg-brand-500 text-white font-bold py-3 rounded-lg shadow-lg"
      >
        Get Free Assessment
      </button>
    </div>
  );
};

// 9. Footer
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="text-brand-500 w-6 h-6" />
              <span className="font-bold text-xl text-white">PixelPerfect</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We turn underperforming websites into high-converting sales assets. Based in San Francisco, serving the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400">Web Design</a></li>
              <li><a href="#" className="hover:text-brand-400">Conversion Audit</a></li>
              <li><a href="#" className="hover:text-brand-400">Speed Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-400">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-4">Contact</h4>
             <p className="text-sm text-slate-400 mb-2">hello@pixelperfect.com</p>
             <div className="flex space-x-4 mt-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-brand-500 transition-colors cursor-pointer text-white">in</div>
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-brand-500 transition-colors cursor-pointer text-white">tw</div>
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-brand-500 transition-colors cursor-pointer text-white">ig</div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>© 2023 PixelPerfect Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


// --- Main App ---

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Header onCtaClick={scrollToForm} />
      <main>
        <Hero onCtaClick={scrollToForm} />
        <TrustBanner />
        <ProblemSolution />
        <AssessmentDetails />
        <Testimonials />
        
        {/* Final CTA Section before form to maximize reinforcement */}
        <section className="py-20 text-center bg-slate-900">
           <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
               Every day your website underperforms, <br />
               <span className="text-red-400">you lose opportunities.</span>
             </h2>
             <p className="text-xl text-slate-400 mb-8">
               Let's fix that. No cost, no obligation, just expert advice.
             </p>
             <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
           </div>
        </section>

        <AuditForm formRef={formRef} />
      </main>
      <Footer />
      <StickyMobileCTA onCtaClick={scrollToForm} />
    </div>
  );
}

export default App;