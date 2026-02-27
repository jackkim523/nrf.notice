'use client';

import { useState } from 'react';
import { mockGrants } from '@/app/data/mockGrants';
import GrantCard from './GrantCard';
// import FilterBar from './FilterBar'; // Assuming FilterBar is not used as per list page
import AnnouncementHeader from './AnnouncementHeader';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function ProjectListSection() {
    const { t, language } = useLanguage();
    const [statusFilter, setStatusFilter] = useState('all');
    return (
        <div id="project-list" className="max-w-6xl mx-auto py-10 px-4">

            {/* Section Header */}
            <div className="flex justify-between items-end mb-8 pt-8 border-t border-slate-200">
                <div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                        {t('세부 사업 목록', 'Project List')}
                    </h2>
                    <p className="text-slate-500 font-medium">
                        {t('총 ', 'Total ')}<span className="text-blue-600 font-bold">{mockGrants.length}</span>{t('건의 공고가 있습니다.', ' announcements.')}
                    </p>
                </div>
                <div className="flex gap-4">
                    <select
                        className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-sm font-medium"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="all">{t('전체 보기', 'All Status')}</option>
                        <option value="active">{t('접수중', 'Receiving')}</option>
                        <option value="upcoming">{t('접수예정', 'Upcoming')}</option>
                        <option value="closed">{t('마감', 'Closed')}</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-4 mb-20">
                {mockGrants.map((grant) => (
                    <GrantCard key={grant.id} grant={grant} />
                ))}
            </div>

            {/* 4 Clickable Boxes */}
            <div id="quick-links" className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
                <a
                    href={language === 'en' ? 'https://www.iris.go.kr/enMain.do' : 'https://www.iris.go.kr/main.do'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-6 px-2 bg-blue-600 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all group overflow-hidden min-h-[160px]"
                >
                    <span className={`font-bold text-white mb-2 text-center whitespace-nowrap ${language === 'en' ? 'text-[13px] sm:text-[15px] tracking-tighter' : 'text-base sm:text-lg tracking-tight'}`}>
                        {t('국가연구자정보시스템(NRI)', 'National Researcher Info (NRI)')}
                    </span>
                    <span className={`font-medium text-center whitespace-nowrap ${language === 'en' ? 'text-[10px] sm:text-[12.5px] text-blue-100/90 tracking-tighter' : 'text-xs sm:text-sm text-blue-100 tracking-tight'}`}>
                        {t('연구자 등록 및 연구자등록번호 발급', 'Researcher Registration & ID')}
                    </span>
                </a>
                <a
                    href="https://www.kri.go.kr/kri2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-6 px-2 bg-indigo-600 rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all group overflow-hidden min-h-[160px]"
                >
                    <span className={`font-bold text-white mb-2 text-center whitespace-nowrap ${language === 'en' ? 'text-[13px] sm:text-[15px] tracking-tighter' : 'text-base sm:text-lg tracking-tight'}`}>
                        {t('한국연구자정보(KRI)', 'Korea Researcher Info (KRI)')}
                    </span>
                    <span className={`font-medium text-center whitespace-nowrap ${language === 'en' ? 'text-[10px] sm:text-[12.5px] text-indigo-100/90 tracking-tighter' : 'text-xs sm:text-sm text-indigo-100 tracking-tight'}`}>
                        {t('KRI 연구자 등록 및 관리', 'KRI Registration & Management')}
                    </span>
                </a>
                <a
                    href="https://ernd.nrf.re.kr/index.do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-6 px-2 bg-emerald-600 rounded-xl shadow-md hover:shadow-lg hover:bg-emerald-700 hover:-translate-y-1 transition-all group overflow-hidden min-h-[160px]"
                >
                    <span className={`font-bold text-white mb-2 text-center whitespace-nowrap text-[13px] sm:text-[15px] tracking-tighter`}>
                        {t('연구사업통합지원시스템(eR&D)', 'e-R&D Portal (eR&D)')}
                    </span>
                    <span className={`font-medium text-center whitespace-nowrap text-[11px] sm:text-[13px] text-emerald-100/90 tracking-tighter`}>
                        {t('사업신청 바로가기', 'Apply for Grant / Go to e-R&D')}
                    </span>
                </a>
                <a
                    href="https://www.nrf.re.kr/biz/notice/view?ac=view&searchType=&searchText=&pageNum=1&postNo=256582&menuNo=364&bizNo=241&searchBizNo=0&bizNotGubn=notice&bizCompleteNm=&orderType=REG_DTTM&orderTypeBiz=&orderTypeAt=DESC&orderTypeBizAt=DESC&myBizCheckYn=&bizChgMbrNo=&myDeptBizCheckYn=&bizChgMbrPostNm=&bizSelectSearchRegDttm=&regStartDttm=&regEndDttm=&searchRegChoiceDttm=M&bizSearchRegDttmAllYn=Y&searchRegYearDttm=2025&searchRegStartMonthDttm=01&searchRegEndMonthDttm=12&searchSplitBizNo=236&keyword=&resultKeyword="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-6 px-2 bg-amber-600 rounded-xl shadow-md hover:shadow-lg hover:bg-amber-700 hover:-translate-y-1 transition-all group overflow-hidden min-h-[160px]"
                >
                    <span className={`font-bold text-white mb-2 text-center whitespace-nowrap ${language === 'en' ? 'text-[13px] sm:text-[15px] tracking-tighter' : 'text-base sm:text-lg tracking-tight'}`}>
                        {t('집단연구군 성과소개집', 'Group Research Achievements')}
                    </span>
                    {language === 'ko' && (
                        <span className="text-xs sm:text-sm text-amber-100 font-medium text-center tracking-tight whitespace-nowrap">인문사회연구소, HK, SSK, 글로벌</span>
                    )}
                </a>
            </div>

            <footer className="text-center text-[#999] text-xs border-t border-[#eee] py-8 bg-[#f9f9f9] mt-20">
                <p className="font-bold text-[#666] mb-1 text-sm">NRF National Research Foundation of Korea</p>
                <p>Copyright © 2026 National Research Foundation of Korea. All rights reserved.</p>
            </footer>
        </div>
    );
}
