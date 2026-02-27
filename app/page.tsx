'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import AnnouncementSection from '@/components/AnnouncementSection';
import ProjectListSection from '@/components/ProjectListSection';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ScrollIndicator from '@/components/ScrollIndicator';
import FloatingQuickMenu from '@/components/FloatingQuickMenu';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const handleViewAnnouncements = () => {
    setShowContent(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <main>
      <div
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white relative"
      >
        <div className="absolute inset-0 bg-white/80 z-0"></div>
        <div className="absolute top-6 right-6 z-50">
          <LanguageSwitcher />
        </div>
        <div className="relative z-10 w-full max-w-5xl">
          <div className="mb-8 mt-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 font-bold text-sm mb-6 border border-blue-100 uppercase tracking-wider">
              {t('2026년도 신규과제', '2026 New Grants')}
            </span>
            <h1 className={`font-extrabold text-slate-900 tracking-tight mb-6 ${language === 'en'
              ? 'text-3xl md:text-5xl leading-[1.2] max-w-4xl mx-auto'
              : 'text-4xl md:text-6xl leading-tight'
              }`}>
              {t('2026년 인문사회분야', '2026 Humanities & Social Sciences')}
              <br className="hidden md:block" />
              {t('학술연구지원사업', 'Academic Research Support')}
              <span className="text-blue-600 ml-2">
                {t('(집단연구군)', '(Group Research)')}
              </span>
            </h1>
            <p className={`text-slate-800 max-w-2xl mx-auto font-medium ${language === 'en'
              ? 'text-base md:text-lg leading-relaxed opacity-90'
              : 'text-lg md:text-xl leading-relaxed'
              }`}>
              {t('창의적이고 도전적인 연구를 지원합니다.', 'We support creative and challenging research across disciplines.')}
              {language === 'ko' ? <br /> : ' '}
              {t('아래 버튼을 눌러 공고 세부 내용을 확인하세요.', 'Discover our comprehensive grant programs below.')}
            </p>
          </div>

          <button
            onClick={handleViewAnnouncements}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            {t('사업별 공고 보기', 'View Announcements')}
            <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <div className="mt-20 flex justify-center items-center gap-8 pb-10">
            <img
              src={language === 'en' ? "/moe_en.jpg" : "/moe_ko.jpg"}
              alt="Ministry of Education"
              className="h-16 w-auto object-contain mix-blend-multiply transition-all duration-300"
            />
            <img
              src={language === 'en' ? "/nrf_en.jpg" : "/nrf_ko.jpg"}
              alt="NRF"
              className="h-24 w-auto object-contain mix-blend-multiply transition-all duration-300"
            />
          </div>
        </div>

      </div>

      <FloatingQuickMenu />

      {showContent && (
        <div ref={contentRef}>
          <AnnouncementSection />
          <ProjectListSection />
        </div>
      )}
    </main>
  );
}