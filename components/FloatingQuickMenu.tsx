'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function FloatingQuickMenu() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Adjust for sticky headers if any
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 animate-fade-in">
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-xl p-2 flex flex-col gap-2">
                <button
                    onClick={() => scrollToSection('announcement-details')}
                    className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                    title={t('공고 상세', 'Details')}
                >
                    <span className="text-[11px] font-black text-white flex flex-col items-center leading-none">
                        <span className="whitespace-nowrap">{t('공고', 'Info')}</span>
                        <span className="whitespace-nowrap mt-0.5">{t('상세', 'De')}</span>
                    </span>
                    <span className="absolute right-14 scale-0 group-hover:scale-100 transition-transform bg-slate-800 text-white text-[11px] font-bold px-2 py-1 rounded whitespace-nowrap origin-right">
                        {t('공고 상세 보기', 'View Details')}
                    </span>
                </button>

                <button
                    onClick={() => scrollToSection('project-list')}
                    className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
                    title={t('사업 목록', 'Projects')}
                >
                    <span className="text-[11px] font-black text-white flex flex-col items-center leading-none">
                        <span className="whitespace-nowrap">{t('사업', 'Biz')}</span>
                        <span className="whitespace-nowrap mt-0.5">{t('목록', 'List')}</span>
                    </span>
                    <span className="absolute right-14 scale-0 group-hover:scale-100 transition-transform bg-slate-800 text-white text-[11px] font-bold px-2 py-1 rounded whitespace-nowrap origin-right">
                        {t('세부 사업 목록', 'Project List')}
                    </span>
                </button>

                <button
                    onClick={() => scrollToSection('quick-links')}
                    className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
                    title={t('유관 시스템', 'Links')}
                >
                    <span className="text-[11px] font-black text-white flex flex-col items-center leading-none">
                        <span className="whitespace-nowrap">{t('관련', 'Site')}</span>
                        <span className="whitespace-nowrap mt-0.5">{t('사이트', 'Link')}</span>
                    </span>
                    <span className="absolute right-14 scale-0 group-hover:scale-100 transition-transform bg-slate-800 text-white text-[11px] font-bold px-2 py-1 rounded whitespace-nowrap origin-right">
                        {t('유관 시스템 바로가기', 'External Systems')}
                    </span>
                </button>

                <div className="h-px bg-slate-200 mx-2 my-1"></div>

                <button
                    onClick={scrollToTop}
                    className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-black transition-all shadow-md hover:shadow-lg"
                    title="TOP"
                >
                    <span className="text-[10px] font-black text-white">TOP</span>
                </button>
            </div>
        </div>
    );
}
