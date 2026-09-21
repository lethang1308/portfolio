import { Building2, Code2, Database, GitBranch, MapPin, MonitorCog, Server, Sparkles, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './animations/ScrollReveal';
import SkillIcon from './SkillIcon';

const skillGroups = [
  { key: 'backend', icon: Server },
  { key: 'database', icon: Database },
  { key: 'frontend', icon: MonitorCog },
  { key: 'tools', icon: Wrench },
  { key: 'ai', icon: Sparkles },
];

const skillLogoNames = {
  PHP: 'PHP',
  Laravel: 'Laravel',
  MySQL: 'MySQL',
  PostgreSQL: 'PostgreSQL',
  Redis: 'Redis',
  ReactJS: 'React',
  'Vue.js': 'Vue.js',
  'Angular / Ionic': 'Ionic',
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  HTML: 'HTML',
  CSS: 'CSS',
  'Tailwind CSS': 'Tailwind CSS',
  Bootstrap: 'Bootstrap',
  Blade: 'Laravel',
  Git: 'Git',
  GitHub: 'GitHub',
  'Linux Server': 'Linux',
  Nginx: 'Nginx',
  Postman: 'Postman',
};

export default function ExperienceSkills() {
  const { t } = useTranslation();
  const responsibilities = t('about.workExperience.responsibilities', { returnObjects: true });

  return (
    <section id="skills" className="py-20 md:py-28 bg-transparent border-t border-slate-100/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.03fr_0.97fr] gap-14 lg:gap-20 items-start">
          <ScrollReveal direction="up" duration={700}>
            <p className="text-xs font-bold tracking-wider text-blue-600 uppercase">{t('about.workExperience.eyebrow')}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">{t('about.workExperience.title')}</h2>
            <div className="mt-9 grid grid-cols-[76px_1fr] gap-4 md:grid-cols-[86px_1fr] md:gap-6">
              <div className="pt-1 text-right text-xs font-bold leading-5 text-slate-500">
                <span className="block">{t('about.workExperience.periodStart')}</span>
                <span className="block">{t('about.workExperience.periodEnd')}</span>
              </div>
              <article className="relative border-l border-blue-100 pl-6 md:pl-8">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-[3px] border-white bg-blue-600 shadow-sm" />
                <div className="rounded-2xl border border-slate-100 bg-white/90 p-5 md:p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Building2 size={19} strokeWidth={2} /></div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h3 className="font-display font-bold text-base text-slate-900">{t('about.workExperience.company')}</h3>
                        <span className="hidden sm:inline text-slate-300">•</span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} />{t('about.workExperience.location')}</span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <p className="text-sm font-bold text-blue-600">{t('about.workExperience.role')}</p>
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">{t('about.workExperience.type')}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {Array.isArray(responsibilities) && responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2 text-xs leading-relaxed text-slate-600 md:text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" /><span>{responsibility}</span></li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} duration={700}>
            <div className="flex items-center gap-2 text-blue-600"><Code2 size={17} strokeWidth={2} /><p className="text-xs font-bold tracking-wider uppercase">{t('about.professionalSkills.eyebrow')}</p></div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">{t('about.professionalSkills.title')}</h2>
            <div className="mt-9 space-y-6">
              {skillGroups.map(({ key, icon: Icon }) => {
                const skills = t(`about.professionalSkills.groups.${key}.items`, { returnObjects: true });
                const isAi = key === 'ai';
                return <div key={key}>
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-700"><Icon size={16} className={isAi ? 'text-violet-600' : 'text-blue-600'} strokeWidth={2} /><span>{t(`about.professionalSkills.groups.${key}.label`)}</span></div>
                  <div className="flex flex-wrap gap-2">{Array.isArray(skills) && skills.map((skill) => <span key={skill} className={`inline-flex items-center gap-1.5 rounded-lg border bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${isAi ? 'border-violet-100 hover:border-violet-300 hover:text-violet-700' : 'border-slate-100 hover:border-blue-100 hover:text-blue-700'}`}>{skillLogoNames[skill] && <SkillIcon name={skillLogoNames[skill]} className="h-4 w-4" />}{skill}</span>)}</div>
                </div>;
              })}
              {/* <div className="flex items-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500"><GitBranch size={15} className="text-blue-600" /><span>{t('about.professionalSkills.footnote')}</span></div> */}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
