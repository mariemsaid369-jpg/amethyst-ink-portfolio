import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
