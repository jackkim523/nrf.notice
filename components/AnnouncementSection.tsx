import React from 'react';
import Link from 'next/link';
import BusinessIntroTable from './BusinessIntroTable';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function AnnouncementSection() {
    const { t, language } = useLanguage();

    return (
        <div id="announcement-details" className="min-w-[1024px] max-w-6xl mx-auto p-0 bg-white font-sans text-[#333] border-t-8 border-[#eee] mt-20">
            {/* Header Area similar to NRF top banner */}


            {/* Header Area similar to NRF top banner */}
            <div className="text-center py-10 border-b border-gray-300">
                <p className="text-gray-600 mb-2 font-bold text-sm">{t('교육부 공고 제2026 - 90호', 'MOE Notice No. 2026 - 90')}</p>
                <h1 className={`font-extrabold text-[#222] mb-4 tracking-tight ${language === 'en'
                    ? 'text-3xl md:text-4xl leading-[1.2]'
                    : 'text-4xl leading-snug'
                    }`}>
                    {t('2026년도 인문사회분야 학술연구지원사업', '2026 Humanities & Social Sciences Academic Research Support')}
                    <br />
                    <span className="text-[#005bac]">
                        {t('(집단연구군)', '(Group Research)')}
                    </span>{' '}
                    {t('신규과제 공모', 'New Project Call')}
                </h1>
                <div className="mt-6 flex justify-center items-center gap-10">
                    <p className="font-bold text-[#333]">{t('주무부처', 'Ministry')} : <span className="text-[#005bac]">{t('교육부', 'MOE')}</span></p>
                    <p className="font-bold text-[#333]">{t('전문기관', 'Agency')} : <span className="text-[#005bac]">{t('한국연구재단', 'NRF')}</span></p>
                </div>
            </div>

            <div className="px-6 py-8">

                {/* 1. 사업개요 */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold text-[#111] mb-4 flex items-center border-b-2 border-slate-500 pb-2">
                        <span className="bg-[#005bac] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm mr-2 font-bold">1</span>
                        {t('사업개요', 'Program Overview')}
                    </h2>

                    <div className="pl-2 mb-8">
                        <h3 className="text-lg font-bold text-[#005bac] mb-2">□ {t('추진목표', 'Objective')}</h3>
                        <div className="bg-[#f8f9fa] border border-[#d5d5d5] p-5">
                            <p className="font-bold text-[#333] text-lg flex items-start gap-2">
                                <span className="text-[#005bac] mt-2 w-1.5 h-1.5 bg-[#005bac] block rotate-45 shrink-0"></span>
                                {t('학술연구역량 강화 및 학문균형발전을 통한 건강한 학문생태계 조성과 미래사회 변화 선도', 'Fostering a healthy academic ecosystem and leading future societal changes by strengthening academic research capabilities and promoting balanced academic development')}
                            </p>
                        </div>
                    </div>

                    <div className="pl-2">
                        <h3 className="text-lg font-bold text-[#005bac] mb-2">□ {t('지원계획', 'Support Plan')}</h3>
                        <div className="overflow-x-auto border-t-2 border-[#333]">
                            <BusinessIntroTable />
                        </div>
                        <p className="mt-2 text-sm text-[#ea5504] text-right font-bold">{t('※ 세부사항은 신청요강을 반드시 확인하시기 바랍니다.', '※ Please make sure to check the application guidelines for details.')}</p>
                    </div>
                </section>

                {/* 2. 신청절차 및 기간 */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold text-[#111] mb-4 flex items-center border-b-2 border-slate-500 pb-2">
                        <span className="bg-[#005bac] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm mr-2 font-bold">2</span>
                        {t('신청절차 및 기간', 'Application Procedure & Period')}
                    </h2>

                    <div className="pl-2 mb-8">
                        <h3 className="text-lg font-bold text-[#005bac] mb-2">□ {t('신청절차', 'Application Procedure')}</h3>
                        <div className="bg-white border border-[#ccc] p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="bg-[#005bac] text-white text-xs font-bold px-2 py-1 rounded-sm mt-0.5 whitespace-nowrap">Step 1</span>
                                    <div>
                                        <p className="text-[#333] font-bold">{t('한국연구자정보시스템(KRI) 등록정보 갱신', 'KRI Information Update')}</p>
                                        <a href="https://www.kri.go.kr/kri2" className="text-[#666] text-sm hover:underline">www.kri.go.kr</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-[#ea5504] text-white text-xs font-bold px-2 py-1 rounded-sm mt-0.5 whitespace-nowrap">Step 2</span>
                                    <div>
                                        <p className="text-[#333] font-bold">{t('연구사업통합지원시스템(e-R&D) 로그인 및 신청', 'e-R&D Login and Application')}</p>
                                        <a href="http://ernd.nrf.re.kr" className="text-[#666] text-sm hover:underline">ernd.nrf.re.kr</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pl-2">
                        <h3 className="text-lg font-bold text-[#005bac] mb-2">□ {t('신청기간', 'Application Period')}</h3>
                        <div className="overflow-x-auto border-t-2 border-[#333]">
                            <table className="w-full text-sm border-collapse border-b border-[#ccc]">
                                <thead className="bg-[#f7f7f7] text-[#333] font-bold text-center">
                                    <tr>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" colSpan={2}>{t('사업구분', 'Program Category')}</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap w-[35%]">{t('연구자 신청', 'Researcher Application')}</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap w-[35%]">{t('주관연구기관 확인', 'Institution Confirmation')}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-[#444]">
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap" rowSpan={2}>{t('인문사회기초연구', 'Basic Humanities Research')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold whitespace-nowrap">{t('인문사회연구소지원', 'Institute Support')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" rowSpan={4}>
                                            {t('2026. 3. 16.(월) 14:00', 'Mar 16, 2026 14:00')} <span className="text-[#ccc]">~</span> <span className="text-[#ea5504] font-bold">{t('4. 21.(화) 18:00', 'Apr 21, 18:00')}</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" rowSpan={4}>
                                            {t('2026. 3. 16.(월) 14:00', 'Mar 16, 2026 14:00')} <span className="text-[#ccc]">~</span> <span className="text-[#ea5504] font-bold">{t('4. 23.(목) 18:00', 'Apr 23, 18:00')}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold whitespace-nowrap">{t('글로벌인문사회융합연구지원', 'Global Convergence Research')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">{t('사회과학연구지원', 'Social Science Research')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold whitespace-nowrap leading-tight">
                                            {t('사회과학연구지원', 'Social Science Research')}<br />
                                            <span className="text-xs font-normal">({t('글로벌아젠다연구', 'Global Agenda')})</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">{t('인문한국지원', 'HK Support')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold whitespace-nowrap">{t('인문한국지원', 'HK Support')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 5. 추진일정 */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold text-[#111] mb-4 flex items-center border-b-2 border-slate-500 pb-2">
                        <span className="bg-[#005bac] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm mr-2 font-bold">5</span>
                        {t('추진일정(안)', 'Schedule (Draft)')}
                    </h2>
                    <div className="pl-2">
                        <div className="overflow-x-auto border-t-2 border-[#333]">
                            <table className="w-full text-sm border-collapse border-b border-[#ccc]">
                                <thead className="bg-[#f7f7f7] text-[#333] font-bold text-center">
                                    <tr>
                                        <th className="border border-[#e5e5e5] py-3 px-2 w-[25%] whitespace-nowrap">{t('일정', 'Date')}</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">{t('추진내용', 'Content')}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-[#444]">
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">{t('2026년 2월', 'Feb 2026')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-left whitespace-nowrap">{t('2026년도 신규과제 신청 공고', 'Announcement of New Project Call')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">{t('2026년 4월', 'Apr 2026')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-left whitespace-nowrap">{t('2026년도 신규과제 신청 접수', 'Application Registration')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">{t('2026년 5월 ~ 8월', 'May ~ Aug 2026')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-left whitespace-nowrap">{t('신규과제 선정 평가', 'Evaluation of New Projects')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">{t('2026년 9월', 'Sep 2026')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-left whitespace-nowrap">
                                            <span className="font-bold text-[#005bac]">{t('신규과제 연구 개시 (9.1)', 'Start of New Projects (Sep 1)')}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6. 기타 & 문의처 */}
                <section className="mb-20">
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-[#111] mb-4 flex items-center border-b border-[#999] pb-2">
                            <span className="bg-[#005bac] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm mr-2 font-bold">6</span>
                            {t('기타', 'Other')}
                        </h2>
                        <div className="bg-[#f0f0f0] p-5 border border-[#ddd]">
                            <p className="text-[#333] text-sm leading-relaxed">
                                {t('세부사업별', 'For each program,')} <span className="font-bold text-[#005bac]">{t('신청요강', 'application guidelines')}</span> {t('및', 'and')} <span className="font-bold text-[#005bac]">{t('양식', 'forms')}</span>{t('은 ', ' are on ')}
                                {t('한국연구재단 홈페이지(', 'the NRF website (')}<a href="https://www.nrf.re.kr" className="text-[#005bac] font-bold underline">www.nrf.re.kr</a>) {t('참조', 'reference)')}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#111] mb-4 flex items-center border-b border-[#999] pb-2">
                            <span className="bg-[#005bac] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm mr-2 font-bold">7</span>
                            {t('문의처', 'Contact Us')}
                        </h2>
                        <div className="overflow-x-auto border-t-2 border-[#333]">
                            <table className="w-full text-sm border-collapse border-b border-[#ccc]">
                                <thead className="bg-[#f7f7f7] text-[#333] font-bold text-center">
                                    <tr>
                                        <th className="border border-[#e5e5e5] py-3 px-2 w-[30%] whitespace-nowrap">{t('사업구분', 'Program Category')}</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 w-[35%] whitespace-nowrap">{t('사업문의', 'Business Inquiry')}</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 w-[35%] whitespace-nowrap">{t('평가문의', 'Evaluation Inquiry')}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-[#444]">
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb]">{t('인문사회연구소지원', 'Institute Support')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2"><span className="font-bold text-[#333]">{t('인문사회연구소지원팀:', 'Institute Team:')}</span> 042-869-6132</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center">
                                            <ul className="space-y-1 inline-block text-left">
                                                <li><span className="font-bold text-[#333]">{t('인문학단:', 'Humanities Group:')}</span> 042-869-6148</li>
                                                <li><span className="font-bold text-[#333]">{t('사회과학단:', 'Social Science Group:')}</span> 042-869-6302</li>
                                                <li><span className="font-bold text-[#333]">{t('문화융복합단:', 'Culture Group:')}</span> 042-869-6632</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb]">{t('인문한국지원', 'HK Support')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2"><span className="font-bold text-[#333]">{t('인문사회연구소지원팀:', 'Institute Team:')}</span> 042-869-6135</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center">
                                            <ul className="space-y-1 inline-block text-left">
                                                <li><span className="font-bold text-[#333]">{t('인문학단:', 'Humanities Group:')}</span> 042-869-6147</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb]">{t('사회과학연구지원', 'Social Science Research')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2"><span className="font-bold text-[#333]">{t('인문사회연구소지원팀:', 'Institute Team:')}</span> 042-869-6133</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center">
                                            <ul className="space-y-1 inline-block text-left">
                                                <li><span className="font-bold text-[#333]">{t('사회과학단:', 'Social Science Group:')}</span> 042-869-6303</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb]">{t('글로벌인문사회융합연구지원', 'Global Convergence Research')}</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2"><span className="font-bold text-[#333]">{t('인문사회연구소지원팀:', 'Institute Team:')}</span> 042-869-6134</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center">
                                            <ul className="space-y-1 inline-block text-left">
                                                <li><span className="font-bold text-[#333]">{t('문화융복합단:', 'Culture Group:')}</span> 042-869-6632</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
}
