import { useLanguage } from '@/contexts/LanguageContext';
import { FolderOpen } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 theme-text-gradient">
          {t('projects.title')}
        </h2>
        
        <div className="flex flex-col items-center justify-center py-16 theme-border rounded-2xl bg-card/50">
          <FolderOpen className="w-16 h-16 text-muted-foreground mb-4" />
          <p className="text-muted-foreground text-lg">{t('projects.empty')}</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
