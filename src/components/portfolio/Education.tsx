import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-text-gradient">
            {t('education.title')}
          </h2>
          <div className="w-20 h-1 theme-gradient mx-auto rounded-full" />
        </div>

        {/* Education Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border theme-glow hover:theme-border transition-colors">
            <CardContent className="p-8">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full theme-gradient mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>

              {/* Degree */}
              <h3 className="text-2xl font-bold text-center text-foreground mb-2">
                {t('education.degree')}
              </h3>

              {/* University */}
              <p className="text-xl text-center text-foreground/80 mb-2">
                {t('education.university')}
              </p>

              {/* Faculty */}
              <p className="text-center text-muted-foreground mb-6">
                {t('education.faculty')}
              </p>

              {/* Details */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {/* Period */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>{t('education.period')}</span>
                </div>

                {/* Grade */}
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[hsl(var(--theme-accent))]" />
                  <span className="theme-text-gradient font-semibold">
                    {t('education.grade')}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
