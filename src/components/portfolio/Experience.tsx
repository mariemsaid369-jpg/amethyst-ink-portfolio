import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      titleKey: 'experience.job1.title',
      companyKey: 'experience.job1.company',
      periodKey: 'experience.job1.period',
      descriptionKey: 'experience.job1.description',
    },
    {
      titleKey: 'experience.job2.title',
      companyKey: 'experience.job2.company',
      periodKey: 'experience.job2.period',
      descriptionKey: 'experience.job2.description',
    },
    {
      titleKey: 'experience.job3.title',
      companyKey: 'experience.job3.company',
      periodKey: 'experience.job3.period',
      descriptionKey: 'experience.job3.description',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-text-gradient">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 theme-gradient mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute top-0 bottom-0 w-0.5 bg-border ${
                language === 'ar' ? 'right-6 md:right-1/2' : 'left-6 md:left-1/2'
              }`}
            />

            {/* Experience Cards */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  language === 'ar'
                    ? 'pr-16 md:pr-0 md:odd:pl-8 md:even:pr-8 md:odd:ml-auto md:even:mr-auto'
                    : 'pl-16 md:pl-0 md:odd:pr-8 md:even:pl-8 md:odd:mr-auto md:even:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-4 w-4 h-4 rounded-full theme-gradient theme-glow ${
                    language === 'ar'
                      ? 'right-4 md:right-auto md:left-0 md:-translate-x-1/2'
                      : 'left-4 md:left-auto md:right-0 md:translate-x-1/2'
                  }`}
                />

                <Card className="bg-card border-border hover:theme-border transition-colors theme-glow">
                  <CardContent className="p-6">
                    {/* Company & Period */}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{t(exp.companyKey)}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t(exp.titleKey)}
                    </h3>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{t(exp.periodKey)}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {t(exp.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
