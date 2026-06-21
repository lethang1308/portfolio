import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Calendar, Send, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API form submission
    console.log("Submitting message:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactDetails = [
    {
      icon: <Mail className="text-blue-600" size={18} />,
      label: "Email",
      value: "duy.hoang.dev@gmail.com",
      href: "mailto:duy.hoang.dev@gmail.com"
    },
    {
      icon: <MapPin className="text-blue-600" size={18} />,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam"
    },
    {
      icon: <Phone className="text-blue-600" size={18} />,
      label: "Phone",
      value: "+84 123 456 789",
      href: "tel:+84123456789"
    },
    {
      icon: <Calendar className="text-blue-600" size={18} />,
      label: "Availability",
      value: "Open for new opportunities"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hoangduy-dev",
      display: "github.com/hoangduy-dev",
      color: "hover:border-slate-800 hover:text-slate-800",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-800" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/hoangduy",
      display: "leetcode.com/hoangduy",
      color: "hover:border-orange-500 hover:text-orange-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500" fill="currentColor">
          <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.37c-.466-.451-.466-1.174 0-1.625l2.69-2.606c.466-.451 1.211-.451 1.677 0l4.51 4.37c.466.45.466 1.174 0 1.625zM12.39 9.878l4.51-4.37c.466-.451 1.211-.451 1.677 0l2.69 2.606c.466.452.466 1.174 0 1.626l-4.51 4.37c-.466.451-1.211.451-1.677 0l-2.69-2.607c-.466-.451-.466-1.174 0-1.625z M2.635 12.012l6.237-6.046c.466-.451 1.211-.451 1.677 0s.466 1.174 0 1.625L4.312 13.637c-.466.451-1.211.451-1.677 0s-.466-1.174 0-1.625z M19.467 13.637l-4.51-4.37c-.466-.452-.466-1.174 0-1.626.466-.451 1.211-.451 1.677 0l4.51 4.37c.466.451.466 1.174 0 1.625l-1.677 1.626v.001z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/hoangduy-dev",
      display: "linkedin.com/in/hoangduy-dev",
      color: "hover:border-blue-700 hover:text-blue-700",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0a66c2]" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/hoangduy",
      display: "stackoverflow.com/users/hoangduy",
      color: "hover:border-orange-600 hover:text-orange-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#f48024]" fill="currentColor">
          <path d="M18.986 21.865v-6.404h2.26v8.666H2.754v-8.666h2.26v6.404h13.972zM7.184 16.54h9.112v-2.26H7.184v2.26zm.577-4.522l8.86 2.127.525-2.2-8.86-2.127-.525 2.2zm1.62-4.148l7.986 4.39.992-1.808-7.986-4.39-.992 1.808zm2.936-3.332l6.47 6.438 1.6-1.587-6.47-6.438-1.6 1.587zM16.592 0l-4.335 7.915 2 1.096L18.592 1.1 16.592 0z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://twitter.com/hoangduy_dev",
      display: "twitter.com/hoangduy_dev",
      color: "hover:border-slate-900 hover:text-slate-900",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-900" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:duy.hoang.dev@gmail.com",
      display: "duy.hoang.dev@gmail.com",
      color: "hover:border-red-500 hover:text-red-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between font-sans">
      
      {/* Header Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100 py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="border-[2px] border-slate-900 px-3 py-1 font-display font-extrabold text-lg tracking-wider text-slate-900">
            HD
          </Link>
          <div className="flex items-center space-x-1 text-xs font-bold tracking-widest text-slate-600 uppercase">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-blue-600">Contact</span>
          </div>
        </div>
      </header>

      {/* Main Grid Wrapper */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex-1 w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Let's Connect (4/12 Cols) */}
          <ScrollReveal direction="left" duration={800} className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded">
                CONTACT
              </span>
              <h1 className="font-display font-extrabold text-4xl text-slate-900 tracking-tight mt-3">
                Let's Connect<span className="text-blue-600">.</span>
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Have a project in mind or want to say hi? Feel free to reach out to me.
              </p>
            </div>

            {/* Key details list */}
            <div className="space-y-4 pt-4">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    {detail.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{detail.label}</span>
                    {detail.href ? (
                      <a href={detail.href} className="text-slate-700 text-xs font-semibold hover:text-blue-600 transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-slate-700 text-xs font-semibold">{detail.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Center Column: Form Panel (5/12 Cols) */}
          <ScrollReveal direction="up" delay={100} duration={800} className="lg:col-span-5 bg-white border border-slate-100/80 rounded-3xl p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="h-[300px] flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
                  ✓
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 text-xs max-w-xs leading-relaxed">
                  Thank you for reaching out. Hoang Duy will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      className="w-full bg-slate-50/50 border border-slate-100 focus:border-blue-600 focus:bg-white px-4 py-3 rounded-2xl text-xs font-semibold text-slate-800 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Email</label>
                    <input 
                      required
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email" 
                      className="w-full bg-slate-50/50 border border-slate-100 focus:border-blue-600 focus:bg-white px-4 py-3 rounded-2xl text-xs font-semibold text-slate-800 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                  <input 
                    required
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject" 
                    className="w-full bg-slate-50/50 border border-slate-100 focus:border-blue-600 focus:bg-white px-4 py-3 rounded-2xl text-xs font-semibold text-slate-800 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    required
                    rows="5"
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message..." 
                    className="w-full bg-slate-50/50 border border-slate-100 focus:border-blue-600 focus:bg-white px-4 py-3 rounded-2xl text-xs font-semibold text-slate-800 outline-none transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl text-xs tracking-wider uppercase transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send size={12} />
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Right Column: Connect Grid (3/12 Cols) */}
          <ScrollReveal direction="right" duration={800} className="lg:col-span-3 space-y-6">
            <div className="space-y-1">
              <h2 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                Connect with me
              </h2>
              <p className="text-slate-500 text-xs leading-normal">
                Let's stay in touch on these platforms.
              </p>
            </div>

            {/* Stagger grid of social cards */}
            <StaggerContainer stagger={60} direction="up" className="grid grid-cols-1 gap-3">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center space-x-3 bg-white border border-slate-100 rounded-2xl p-3 shadow-sm transition-all duration-300 ${link.color} hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex flex-col select-none overflow-hidden">
                    <span className="text-[10px] font-bold text-slate-900">{link.name}</span>
                    <span className="text-[9px] text-slate-400 font-semibold truncate max-w-[140px]">{link.display}</span>
                  </div>
                </a>
              ))}
            </StaggerContainer>
          </ScrollReveal>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
