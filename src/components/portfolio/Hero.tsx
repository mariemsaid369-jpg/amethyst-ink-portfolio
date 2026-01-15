import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    // Create a simple text-based CV for download
    const cvContent = `
MARIEM SAID MOHAMED
Economics Graduate | Customer Service Professional

CONTACT
Email: MariemSaid369@gmail.com
Phone: +201098818760
Location: Miami, Alexandria, Egypt

OBJECTIVE
An ambitious economics graduate seeking to enhance skills and knowledge through practical experience in a dynamic organization.

EXPERIENCE
• Customer Service Representative - Octopus Outsourcing (2022-2025)
• Secretary - El Sanaa Company (2020-2021)
• Summer Training - Bank Misr (2022)

EDUCATION
Bachelor's Degree in Economics
Alexandria University - Faculty of Economics and Political Science
Grade: Very Good (2019-2023)

SKILLS
• English Proficiency
• Technical Writing
• Presentation Skills
• Analytical Skills
• Time Management
• Critical Thinking
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mariem_Said_Mohamed_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Greeting */}
        <p className="text-muted-foreground text-lg mb-4 animate-fade-in">
          {t('hero.greeting')}
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 theme-text-gradient">
          {t('hero.name')}
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-medium">
          {t('hero.title')}
        </p>

        {/* Description */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTA Button */}
        <Button
          onClick={handleDownloadCV}
          size="lg"
          className="theme-gradient text-primary-foreground hover:opacity-90 transition-opacity gap-2 px-8"
        >
          <Download className="h-5 w-5" />
          {t('hero.downloadCV')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--theme-accent)/0.05)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--theme-accent-glow)/0.05)] rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
