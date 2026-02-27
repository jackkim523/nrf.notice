import React from 'react';
import Link from 'next/link';

export default function AnnouncementSection() {
    return (
        <div className="min-w-[1024px] max-w-6xl mx-auto p-0 bg-white font-sans text-[#333] border-t-8 border-[#eee] mt-20">
            {/* Header Area similar to NRF top banner */}


            {/* Header Area similar to NRF top banner */}
            <div className="text-center py-10 border-b border-gray-300">
                <p className="text-gray-600 mb-2 font-bold text-sm">교육부 공고 제 2025 - 000호</p>
                <h1 className="text-4xl font-extrabold text-[#222] mb-4 tracking-tight leading-snug">
                    2025년도 인문사회분야 학술연구지원사업<br />
                    <span className="text-[#005bac]">(집단연구군)</span> 신규과제 공모
                </h1>
                <div className="mt-6 flex justify-center items-center gap-10">
                    <p className="font-bold text-[#333]">주무부처 : <span className="text-[#005bac]">교육부</span></p>
                    <p className="font-bold text-[#333]">전문기관 : <span className="text-[#005bac]">한국연구재단</span></p>
                </div>
            </div>

            <div className="px-6 py-8">

                {/* 1. 사업개요 */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold text-[#111] mb-4 flex items-center border-b-2 border-slate-500 pb-2">
                        <span className="bg-[#005bac] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm mr-2 font-bold">1</span>
                        사업개요
                    </h2>

                    <div className="pl-2 mb-8">
                        <h3 className="text-lg font-bold text-[#005bac] mb-2">□ 추진목표</h3>
                        <div className="bg-[#f8f9fa] border border-[#d5d5d5] p-5">
                            <p className="font-bold text-[#333] text-lg flex items-start gap-2">
                                <span className="text-[#005bac] mt-2 w-1.5 h-1.5 bg-[#005bac] block rotate-45"></span>
                                학술연구역량 강화 및 학문균형발전을 통한 건강한 학문생태계 조성과 미래사회 변화 선도
                            </p>
                        </div>
                    </div>

                    <div className="pl-2">
                        <h3 className="text-lg font-bold text-[#005bac] mb-2">□ 지원계획</h3>
                        <div className="overflow-x-auto border-t-2 border-[#333]">
                            <table className="w-full text-sm border-collapse border-b border-[#ccc]">
                                <thead className="bg-[#f7f7f7] text-[#333] font-bold text-center">
                                    <tr>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" colSpan={4}>사업구분</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">사업목적</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">지원대상</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">선정과제수<br /><span className="font-normal text-xs text-[#666]">(신규)</span></th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">지원규모<br /><span className="font-normal text-xs text-[#666]">(과제당/연)</span></th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">지원기간</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#444] text-center">
                                    {/* 인문사회연구소지원 */}
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap" rowSpan={4}>인문사회<br />기초연구</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold text-[#005bac] whitespace-nowrap" rowSpan={4}>인문사회<br />연구소지원</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" colSpan={2}>순수학문 연구형</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-[#fff]" rowSpan={4}>연구소의 전문화, 특성화로<br />대학 연구 거점 구축</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-[#fff] whitespace-nowrap" rowSpan={4}>
                                            대학부설연구소 및 국내연구기관<br />
                                            <span className="text-xs text-[#888] block mt-1">** KCI 등재 연구소</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-[#fff] whitespace-nowrap" rowSpan={4}>
                                            00개 내외
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap bg-[#fff]" rowSpan={4}>
                                            <span className="font-bold text-black block">2.6억원</span>
                                            <span className="text-xs text-[#666]">이내 (간접비 별도)</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fff] whitespace-nowrap" rowSpan={4}>
                                            6년<br />
                                            <span className="text-xs font-normal text-[#666]">(3+3)</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" rowSpan={3}>문제해결형</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">DB구축</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">번역</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">전집/선집</td>
                                    </tr>

                                    {/* 글로벌인문사회융합연구 */}
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap" colSpan={2} rowSpan={2}>글로벌인문사회<br />융합연구</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold text-[#005bac] whitespace-nowrap" colSpan={2}>글로벌 인문사회 융합 연구</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-[#fff]" rowSpan={2}>
                                            글로벌 융합연구를 통한<br />학술연구 활동 입지 강화
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap bg-[#fff]" rowSpan={2}>
                                            대학·연구기관 소속 연구자
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-[#fff] whitespace-nowrap">
                                            00개 내외
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap bg-[#fff]">
                                            <span className="font-bold text-black block">5.2억원</span>
                                            <span className="text-xs text-[#666]">이내</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fff] whitespace-nowrap">3년</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-[#005bac] font-bold whitespace-nowrap" colSpan={2}>연구소 지원형</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-[#fff] whitespace-nowrap">
                                            00개 내외
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap bg-[#fff]">
                                            <span className="font-bold text-black block">6.5억원</span>
                                            <span className="text-xs text-[#666]">이내</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fff] whitespace-nowrap">
                                            6년<br />
                                            <span className="text-xs font-normal text-[#666]">(3+3)</span>
                                        </td>
                                    </tr>

                                    {/* 사회과학연구지원 */}
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap" rowSpan={2}>사회과학<br />연구지원</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold text-[#005bac] whitespace-nowrap" rowSpan={2}>글로벌<br />아젠다연구</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" colSpan={2}>국내</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-[#fff]" rowSpan={2}>
                                            사회문제 아젠다 연구를 통한<br />문제해결 방안 제시
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center whitespace-nowrap bg-[#fff]" rowSpan={2}>
                                            대학·연구기관 소속 연구자<br />
                                            <span className="text-xs text-[#888] block mt-1">(책임자: 사회과학 전임교원)</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-[#fff] whitespace-nowrap" rowSpan={2}>
                                            00개 내외
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap bg-[#fff]">
                                            <span className="font-bold text-black block">1.23억원</span>
                                            <span className="text-xs text-[#666]">이내</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fff] whitespace-nowrap">3년</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" colSpan={2}>국외</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap bg-[#fff]">
                                            <span className="font-bold text-black block">2.5억원</span>
                                            <span className="text-xs text-[#666]">이내</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fff] whitespace-nowrap">3년</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-sm text-[#ea5504] text-right font-bold">※ 세부사항은 신청요강을 반드시 확인하시기 바랍니다.</p>
                    </div>
                </section>

                {/* 2. 신청절차 및 기간 */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold text-[#111] mb-4 flex items-center border-b-2 border-slate-500 pb-2">
                        <span className="bg-[#005bac] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm mr-2 font-bold">2</span>
                        신청절차 및 기간
                    </h2>

                    <div className="pl-2 mb-8">
                        <h3 className="text-lg font-bold text-[#005bac] mb-2">□ 신청절차</h3>
                        <div className="bg-white border border-[#ccc] p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="bg-[#005bac] text-white text-xs font-bold px-2 py-1 rounded-sm mt-0.5 whitespace-nowrap">Step 1</span>
                                    <div>
                                        <p className="text-[#333] font-bold">한국연구자정보시스템(KRI) 등록정보 갱신</p>
                                        <a href="https://www.kri.go.kr/kri2" className="text-[#666] text-sm hover:underline">www.kri.go.kr</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-[#ea5504] text-white text-xs font-bold px-2 py-1 rounded-sm mt-0.5 whitespace-nowrap">Step 2</span>
                                    <div>
                                        <p className="text-[#333] font-bold">연구사업통합지원시스템(e-R&D) 로그인 및 신청</p>
                                        <a href="http://ernd.nrf.re.kr" className="text-[#666] text-sm hover:underline">ernd.nrf.re.kr</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pl-2">
                        <h3 className="text-lg font-bold text-[#005bac] mb-2">□ 신청기간</h3>
                        <div className="overflow-x-auto border-t-2 border-[#333]">
                            <table className="w-full text-sm border-collapse border-b border-[#ccc]">
                                <thead className="bg-[#f7f7f7] text-[#333] font-bold text-center">
                                    <tr>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap" colSpan={2}>사업구분</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap w-[35%]">연구자 신청</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap w-[35%]">주관연구기관 확인</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-[#444]">
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">인문사회기초연구</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold whitespace-nowrap">인문사회연구소지원</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">
                                            2025. 5. 15.(목) 14:00 <span className="text-[#ccc]">~</span> <span className="text-[#ea5504] font-bold">5. 26.(월) 18:00</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">
                                            2025. 5. 15.(목) 14:00 <span className="text-[#ccc]">~</span> <span className="text-[#ea5504] font-bold">5. 28.(수) 18:00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">글로벌인문사회</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold whitespace-nowrap">연구소지원형</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">
                                            2025. 5. 15.(목) 14:00 <span className="text-[#ccc]">~</span> <span className="text-[#ea5504] font-bold">5. 26.(월) 18:00</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">
                                            2025. 5. 15.(목) 14:00 <span className="text-[#ccc]">~</span> <span className="text-[#ea5504] font-bold">5. 28.(수) 18:00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">사회과학연구지원</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold whitespace-nowrap">글로벌아젠다연구</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">
                                            2025. 5. 15.(목) 14:00 <span className="text-[#ccc]">~</span> <span className="text-[#ea5504] font-bold">5. 26.(월) 18:00</span>
                                        </td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">
                                            2025. 5. 15.(목) 14:00 <span className="text-[#ccc]">~</span> <span className="text-[#ea5504] font-bold">5. 28.(수) 18:00</span>
                                        </td>
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
                        추진일정(안)
                    </h2>
                    <div className="pl-2">
                        <div className="overflow-x-auto border-t-2 border-[#333]">
                            <table className="w-full text-sm border-collapse border-b border-[#ccc]">
                                <thead className="bg-[#f7f7f7] text-[#333] font-bold text-center">
                                    <tr>
                                        <th className="border border-[#e5e5e5] py-3 px-2 w-[25%] whitespace-nowrap">일정</th>
                                        <th className="border border-[#e5e5e5] py-3 px-2 whitespace-nowrap">추진내용</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-[#444]">
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">2025년 4월</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-left whitespace-nowrap">2025년도 신규과제 신청 공고</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">2025년 5월</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-left whitespace-nowrap">2025년도 신규과제 신청 접수</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">2025년 6월 ~ 8월</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-left whitespace-nowrap">신규과제 선정 평가</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[#e5e5e5] py-3 px-2 font-bold bg-[#fbfbfb] whitespace-nowrap">2025년 9월</td>
                                        <td className="border border-[#e5e5e5] py-3 px-2 text-left whitespace-nowrap">
                                            <span className="font-bold text-[#005bac]">신규과제 연구 개시 (9.1)</span>
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
                            <span className="bg-[#555] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2 font-bold">6</span>
                            기타
                        </h2>
                        <div className="bg-[#f0f0f0] p-5 border border-[#ddd]">
                            <p className="text-[#333] text-sm leading-relaxed">
                                세부사업별 <span className="font-bold text-[#005bac]">신청요강</span> 및 <span className="font-bold text-[#005bac]">양식</span>은<br />
                                한국연구재단 홈페이지(<a href="https://www.nrf.re.kr" className="text-[#005bac] font-bold underline">www.nrf.re.kr</a>) 참조
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#111] mb-4 flex items-center border-b border-[#999] pb-2">
                            <span className="bg-[#555] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2 font-bold">7</span>
                            문의처
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 사업 문의 */}
                            <div className="bg-white border border-[#ccc] p-5 shadow-sm">
                                <h3 className="font-bold text-[#005bac] mb-3 border-b border-[#eee] pb-2">사업 문의</h3>
                                <ul className="space-y-2 text-sm text-[#444]">
                                    <li className="flex justify-between">
                                        <span className="font-medium text-[#333]">인문사회연구소지원</span>
                                        <span className="font-bold">042-869-0000</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-medium text-[#333]">사회과학연구지원</span>
                                        <span className="font-bold">042-869-0000</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-medium text-[#333]">글로벌인문사회융합연구지원</span>
                                        <span className="font-bold">042-869-0000</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-medium text-[#333]">인문한국3.0지원</span>
                                        <span className="font-bold">042-869-0000</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 평가 문의 */}
                            <div className="bg-white border border-[#ccc] p-5 shadow-sm">
                                <h3 className="font-bold text-[#005bac] mb-3 border-b border-[#eee] pb-2">평가 문의</h3>
                                <ul className="space-y-2 text-sm text-[#444]">
                                    <li className="flex">
                                        <span className="font-bold w-24 text-[#333] bg-[#f5f5f5] px-2 py-0.5 rounded-sm mr-2 border border-[#eee] text-center shrink-0">인문학단</span>
                                        <span className="font-medium self-center">042-869-(6132, 6137, 6133)</span>
                                    </li>
                                    <li className="flex">
                                        <span className="font-bold w-24 text-[#333] bg-[#f5f5f5] px-2 py-0.5 rounded-sm mr-2 border border-[#eee] text-center shrink-0">사회과학단</span>
                                        <span className="font-medium self-center">042-869-(6302)</span>
                                    </li>
                                    <li className="flex">
                                        <span className="font-bold w-24 text-[#333] bg-[#f5f5f5] px-2 py-0.5 rounded-sm mr-2 border border-[#eee] text-center shrink-0">문화융복합단</span>
                                        <span className="font-medium self-center">042-869-(6631, 6633)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
}
