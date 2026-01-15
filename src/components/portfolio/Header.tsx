import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Moon, Sun, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.education', href: '#education' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold theme-text-gradient">
            {language === 'ar' ? 'م.س.م' : 'M.S.M'}
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 border-border hover:bg-accent"
            >
              <Languages className="h-4 w-4" />
              <span className="text-xs font-medium">
                {language === 'en' ? 'AR' : 'EN'}
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="gap-2 border-border hover:bg-accent"
            >
              {theme === 'black' ? (
                <>
                  <Moon className="h-4 w-4" />
                  <span className="text-xs font-medium hidden sm:inline">
                    {t('theme.purple')}
                  </span>
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  <span className="text-xs font-medium hidden sm:inline">
                    {t('theme.black')}
                  </span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
