import { useTranslation } from 'react-i18next';
import { homeSkills } from '../data/skills';
import SkillIcon from './SkillIcon';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up" duration={800}>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight text-center mb-16">
            {t('skills.title')}
          </h2>
        </ScrollReveal>
        <StaggerContainer
          stagger={100}
          direction="up"
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {homeSkills.map((name) => (
            <div key={name} className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center transform group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
                <SkillIcon name={name} className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs font-bold text-slate-600 mt-4 group-hover:text-blue-600 tracking-wider transition-colors duration-300 uppercase">
                {name}
              </span>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
