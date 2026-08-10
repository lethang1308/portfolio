import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const VietnamFlag = ({ className = "w-6 h-4" }) => (
  <svg viewBox="0 0 30 20" className={`inline-block rounded-xs shadow-xs shrink-0 object-cover ${className}`}>
    <rect width="30" height="20" fill="#da251d" />
    <polygon
      fill="#ffff00"
      points="15,4 16.47,8.53 21.24,8.53 17.38,11.34 18.85,15.87 15,13.06 11.15,15.87 12.62,11.34 8.76,8.53 13.53,8.53"
    />
  </svg>
);

const UKFlag = ({ className = "w-6 h-4" }) => (
  <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs shrink-0 object-cover ${className}`}>
    <clipPath id="uk-clip-path">
      <rect width="60" height="30" />
    </clipPath>
    <g clipPath="url(#uk-clip-path)">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export default function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const currentLang = i18n.language && i18n.language.startsWith('vi') ? 'vi' : 'en';

  const languages = [
    {
      code: 'vi',
      label: 'VN',
      fullLabel: 'Tiếng Việt',
      flag: <VietnamFlag />
    },
    {
      code: 'en',
      label: 'UK',
      fullLabel: 'English',
      flag: <UKFlag />
    }
  ];

  const activeLanguage = languages.find(l => l.code === currentLang) || languages[1];

  const handleSelectLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative inline-block text-left select-none ${className}`}>
      {/* Trigger Button - Matches user image UI with border, flag and country code */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 border border-slate-300 active:border-slate-400 px-2.5 py-1.5 rounded-lg shadow-2xs text-xs font-bold text-slate-800 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        aria-label="Select Language"
      >
        {activeLanguage.flag}
        <span className="tracking-wider uppercase text-slate-700 font-bold">{activeLanguage.label}</span>
        <ChevronDown size={12} className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelectLanguage(lang.code)}
              className={`w-full px-3 py-2 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                currentLang === lang.code
                  ? 'bg-blue-50 text-blue-700 font-bold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                {lang.flag}
                <span>{lang.fullLabel}</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
