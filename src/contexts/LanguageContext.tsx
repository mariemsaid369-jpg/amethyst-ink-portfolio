import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Mariem Said Mohamed',
    'hero.title': 'Economics Graduate | Junior Data Analyst',
    
    // Projects
    'projects.title': 'Projects',
    'projects.empty': 'Projects coming soon...',
    'hero.description': 'An ambitious economics graduate seeking to enhance skills and knowledge through practical experience in a dynamic organization, aiming to contribute to the company\'s goals.',
    'hero.downloadCV': 'Download CV',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.job1.title': 'Customer Service Representative',
    'experience.job1.company': 'Octopus Outsourcing',
    'experience.job1.period': '2022 - 2025',
    'experience.job1.description': 'Providing excellent customer support and handling inquiries professionally.',
    
    'experience.job2.title': 'Secretary',
    'experience.job2.company': 'El Sanaa Company',
    'experience.job2.period': '2020 - 2021',
    'experience.job2.description': 'Managing administrative tasks, scheduling, and office coordination.',
    
    'experience.job3.title': 'Summer Training',
    'experience.job3.company': 'Bank Misr',
    'experience.job3.period': '2022',
    'experience.job3.description': 'Gained practical banking experience and customer service skills.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.english': 'English Proficiency',
    'skills.technical': 'Technical Writing',
    'skills.presentation': 'Presentation Skills',
    'skills.analytical': 'Analytical Skills',
    'skills.time': 'Time Management',
    'skills.critical': 'Critical Thinking',
    
    // Education
    'education.title': 'Education',
    'education.degree': 'Bachelor\'s Degree in Economics',
    'education.university': 'Alexandria University',
    'education.faculty': 'Faculty of Economics and Political Science (English Department)',
    'education.grade': 'Grade: Very Good',
    'education.period': '2019 - 2023',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.locationValue': 'Miami, Alexandria, Egypt',
    
    // Theme
    'theme.black': 'Black',
    'theme.purple': 'Purple',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.experience': 'الخبرات',
    'nav.skills': 'المهارات',
    'nav.education': 'التعليم',
    'nav.contact': 'تواصل',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'مريم سعيد محمد',
    'hero.title': 'خريجة اقتصاد | محللة بيانات مبتدئة',
    
    // Projects
    'projects.title': 'المشاريع',
    'projects.empty': 'المشاريع قريباً...',
    'hero.description': 'خريجة اقتصاد طموحة أسعى لتعزيز مهاراتي ومعرفتي من خلال الخبرة العملية في مؤسسة ديناميكية، وأهدف للمساهمة في تحقيق أهداف الشركة.',
    'hero.downloadCV': 'تحميل السيرة الذاتية',
    
    // Experience
    'experience.title': 'الخبرات العملية',
    'experience.job1.title': 'ممثل خدمة عملاء',
    'experience.job1.company': 'أوكتوبس للتعهيد',
    'experience.job1.period': '2022 - 2025',
    'experience.job1.description': 'تقديم دعم ممتاز للعملاء والتعامل مع الاستفسارات باحترافية.',
    
    'experience.job2.title': 'سكرتيرة',
    'experience.job2.company': 'شركة الصنعة',
    'experience.job2.period': '2020 - 2021',
    'experience.job2.description': 'إدارة المهام الإدارية والجدولة وتنسيق المكتب.',
    
    'experience.job3.title': 'تدريب صيفي',
    'experience.job3.company': 'بنك مصر',
    'experience.job3.period': '2022',
    'experience.job3.description': 'اكتسبت خبرة عملية في المجال المصرفي ومهارات خدمة العملاء.',
    
    // Skills
    'skills.title': 'المهارات',
    'skills.english': 'إتقان اللغة الإنجليزية',
    'skills.technical': 'الكتابة التقنية',
    'skills.presentation': 'مهارات العرض',
    'skills.analytical': 'المهارات التحليلية',
    'skills.time': 'إدارة الوقت',
    'skills.critical': 'التفكير النقدي',
    
    // Education
    'education.title': 'التعليم',
    'education.degree': 'بكالوريوس في الاقتصاد',
    'education.university': 'جامعة الإسكندرية',
    'education.faculty': 'كلية الاقتصاد والعلوم السياسية (قسم اللغة الإنجليزية)',
    'education.grade': 'التقدير: جيد جداً',
    'education.period': '2019 - 2023',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    'contact.locationValue': 'ميامي، الإسكندرية، مصر',
    
    // Theme
    'theme.black': 'أسود',
    'theme.purple': 'بنفسجي',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
