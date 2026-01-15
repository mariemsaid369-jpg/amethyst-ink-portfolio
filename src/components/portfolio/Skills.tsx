import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import {
  Languages,
  FileText,
  Presentation,
  BarChart3,
  Clock,
  Lightbulb,
} from 'lucide-react';

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    { key: 'skills.english', icon: Languages },
    { key: 'skills.technical', icon: FileText },
    { key: 'skills.presentation', icon: Presentation },
    { key: 'skills.analytical', icon: BarChart3 },
    { key: 'skills.time', icon: Clock },
    { key: 'skills.critical', icon: Lightbulb },
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-text-gradient">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 theme-gradient mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:theme-border transition-all duration-300 hover:theme-glow group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full theme-gradient mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t(skill.key)}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
