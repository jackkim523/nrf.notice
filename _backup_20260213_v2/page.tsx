'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import AnnouncementSection from '@/components/AnnouncementSection';
import ProjectListSection from '@/components/ProjectListSection';

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleViewAnnouncements = () => {
    setShowContent(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <main>
      <div
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url("/library_background.png")' }}
      >
        <div className="absolute inset-0 bg-white/80 z-0"></div>
        <div className="relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary font-bold text-sm mb-6 border border-blue-100">
              2026년도 신규과제
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              2026년 인문사회분야 <br className="hidden md:block" />
              학술연구지원사업 <span className="text-primary">(집단연구군)</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto leading-relaxed font-medium">
              창의적이고 도전적인 연구를 지원합니다.<br />
              아래 버튼을 눌러 공고 세부 내용을 확인하세요.
            </p>
          </div>

          <button
            onClick={handleViewAnnouncements}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            사업별 공고 보기
            <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <div className="mt-20 flex justify-center items-center gap-8 pb-10">
            <img src="/moe_logo.jpg" alt="Ministry of Education" className="h-16 w-auto object-contain mix-blend-multiply" />
            <img src="/nrf_logo.jpg" alt="NRF" className="h-24 w-auto object-contain mix-blend-multiply" />
          </div>
        </div>
      </div>

      {showContent && (
        <div ref={contentRef}>
          <AnnouncementSection />
          <ProjectListSection />
        </div>
      )}
    </main>
  );
}