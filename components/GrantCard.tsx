import { Grant } from '../app/types';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface GrantCardProps {
    grant: Grant;
}

export default function GrantCard({ grant }: GrantCardProps) {
    const { t, language } = useLanguage();
    const today = new Date();
    const deadline = new Date(grant.deadline);
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const isUrgent = diffDays <= 7 && diffDays >= 0;

    return (
        <div
            className="flex flex-col group bg-white border border-slate-300 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
        >
            <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2 items-center">
                    <span className={`px-2.5 py-1 rounded-md text-sm font-bold ${diffDays < 0
                        ? 'bg-slate-100 text-slate-500'
                        : isUrgent
                            ? 'bg-red-50 text-red-600 border border-red-100'
                            : 'bg-white text-primary border border-primary'
                        }`}>
                        {diffDays < 0 ? '마감' : `D-${diffDays}`}
                    </span>
                    <span className="text-slate-700 text-base font-bold">
                        {language === 'en' ? (grant.agencyEn || grant.agency) : grant.agency}
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mt-1">
                        {language === 'en' ? (grant.titleEn || grant.title) : grant.title}
                    </h3>
                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2 mt-3">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded border whitespace-nowrap ${grant.status === 'upcoming'
                            ? 'text-emerald-600 bg-emerald-50 border-emerald-200'
                            : 'text-blue-600 bg-blue-50 border-blue-200'
                            }`}>
                            {grant.status === 'upcoming' ? t('접수예정', 'Upcoming') : t('접수중', 'Receiving')}
                        </span>
                        <span className="text-xs text-slate-500 font-medium tracking-tight">
                            {t('접수기간', 'Period')}: 2026. 3. 16. ~ 4. 21.
                        </span>
                    </div>
                </div>

                {/* Bookmark/Heart Icon */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        // Bookmark toggle logic would go here
                    }}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-50 rounded-full transition-colors shrink-0 mt-1"
                    title="관심 사업 저장"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-6 text-base text-slate-700 font-medium mb-5">
                <div className="flex items-center gap-2">
                    {/* Budget Icon */}
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {language === 'en' ? (grant.budgetEn || grant.budget) : grant.budget}
                </div>
                <div className="flex items-center gap-2">
                    {/* Duration Icon */}
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {language === 'en' ? (grant.durationEn || grant.duration) : grant.duration}
                </div>
            </div>

            <div className="flex justify-between items-end mt-auto gap-4">
                <div className="flex flex-wrap gap-2">
                    {(language === 'en' && grant.fieldsEn ? grant.fieldsEn : grant.fields).map((field) => (
                        <span key={field} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-bold border border-slate-200">
                            #{field}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 shrink-0">
                    <a
                        href="https://www.nrf.re.kr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-600 border border-slate-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors shadow-sm text-center flex items-center justify-center"
                    >
                        {t('공고 바로가기(NRF)', 'View Notice (NRF)')}
                    </a>
                    <button
                        onClick={(e) => e.preventDefault()}
                        className="bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-100 hover:border-amber-300 transition-colors shadow-sm text-center flex items-center justify-center"
                    >
                        {t('신청 매뉴얼', 'User Manual')}
                    </button>
                    <a
                        href="https://ernd.nrf.re.kr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-100 hover:border-emerald-300 transition-colors shadow-sm text-center flex items-center justify-center"
                    >
                        {t('선정과제 목록(2025)', 'Selected Projects (2025)')}
                    </a>
                    <a
                        href="https://www.krm.or.kr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-100 hover:border-indigo-300 transition-colors shadow-sm text-center flex items-center justify-center"
                    >
                        {t('연구동향 검색(KRM)', 'Search Trends (KRM)')}
                    </a>
                </div>
            </div>
        </div>
    );
}
