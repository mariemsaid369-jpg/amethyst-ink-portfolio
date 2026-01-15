import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      labelKey: 'contact.email',
      value: 'MariemSaid369@gmail.com',
      icon: Mail,
      href: 'mailto:MariemSaid369@gmail.com',
    },
    {
      labelKey: 'contact.phone',
      value: '+201098818760',
      icon: Phone,
      href: 'tel:+201098818760',
    },
    {
      labelKey: 'contact.location',
      valueKey: 'contact.locationValue',
      icon: MapPin,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-text-gradient">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 theme-gradient mx-auto rounded-full" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const displayValue = info.valueKey ? t(info.valueKey) : info.value;

            const content = (
              <Card
                className={`bg-card border-border hover:theme-border transition-all duration-300 hover:theme-glow ${
                  info.href ? 'cursor-pointer' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full theme-gradient mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(info.labelKey)}
                  </h3>
                  <p className="text-muted-foreground break-all">
                    {displayValue}
                  </p>
                </CardContent>
              </Card>
            );

            if (info.href) {
              return (
                <a key={index} href={info.href} className="block">
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-muted-foreground text-sm">
          <p>© 2025 Mariem Said Mohamed. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
