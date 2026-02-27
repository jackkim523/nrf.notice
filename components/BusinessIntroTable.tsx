import React from 'react';
import { businessTableData } from '@/app/data/businessTableData';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function BusinessIntroTable() {
    const { t, language } = useLanguage();

    return (
        <div className="w-full">
            <table className="w-full text-sm border-collapse border-b border-[#ccc]">
                <thead className="bg-[#f7f7f7] text-[#333] font-bold text-center">
                    <tr>
                        <th className="border border-[#e5e5e5] py-3 px-2 w-20 break-keep">{t('사업명', 'Program')}</th>
                        <th className="border border-[#e5e5e5] py-3 px-2 w-24 break-keep">{t('세부사업 및 유형', 'Details & Type')}</th>
                        <th className="border border-[#e5e5e5] py-3 px-2 w-24 break-keep">{t('유형', 'Type')}</th>
                        <th className="border border-[#e5e5e5] py-3 px-2 w-[24%] break-keep">{t('사업목적', 'Purpose')}</th>
                        <th className="border border-[#e5e5e5] py-3 px-2 w-36 break-keep">{t('지원대상', 'Target')}</th>
                        <th className="border border-[#e5e5e5] py-3 px-2 w-24 break-keep">{t('과제수', 'Grants')}<br />{t('(신규)', '(New)')}</th>
                        <th className="border border-[#e5e5e5] py-3 px-2 w-24 break-keep">{t('지원규모', 'Budget')}<br />{t('(과제당/연)', '(Per Year)')}</th>
                        <th className="border border-[#e5e5e5] py-3 px-2 w-20 break-keep">{t('지원기간', 'Duration')}</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700 text-center text-xs md:text-sm">
                    {businessTableData.map((row, index) => {
                        return (
                            <tr key={index}>
                                {/* Category Column (Business Name) */}
                                {row.category && (
                                    <td
                                        className="border border-[#e5e5e5] py-3 px-2 font-bold bg-gray-50 break-keep"
                                        rowSpan={row.categoryRowSpan}
                                    >
                                        {(language === 'en' && row.categoryEn ? row.categoryEn : row.category).split('\n').map((line, i) => <div key={i}>{line}</div>)}
                                    </td>
                                )}

                                {/* SubCategory Column (Detailed Business & Type) */}
                                {row.subCategory && (
                                    <td
                                        className="border border-[#e5e5e5] py-3 px-2 font-bold text-blue-700 break-keep"
                                        rowSpan={row.subCategoryRowSpan}
                                        colSpan={row.subCategoryColSpan}
                                    >
                                        {(language === 'en' && row.subCategoryEn ? row.subCategoryEn : row.subCategory).split('\n').map((line, i) => <div key={i}>{line}</div>)}
                                    </td>
                                )}

                                {/* Type Column */}
                                {(!row.subCategoryColSpan || row.subCategoryColSpan === 1) && row.type !== undefined && (
                                    <td
                                        className="border border-[#e5e5e5] py-3 px-2 font-bold text-blue-600 break-keep bg-white"
                                        rowSpan={row.typeRowSpan}
                                    >
                                        {/* Handle "-" or empty type gracefully */}
                                        {row.type !== "-" && row.type !== "" ? (
                                            (language === 'en' && row.typeEn ? row.typeEn : row.type).split('\n').map((line, i) => <div key={i}>{line}</div>)
                                        ) : null}
                                    </td>
                                )}

                                {/* Purpose Column */}
                                {row.purpose && row.purpose.length > 0 ? (
                                    <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-white break-keep" rowSpan={row.purposeRowSpan}>
                                        {(language === 'en' && row.purposeEn ? row.purposeEn : row.purpose).map((item, i) => (
                                            <div key={i}>{item}</div>
                                        ))}
                                    </td>
                                ) : row.isFuture && row.futureNote ? (
                                    <td className="border border-[#e5e5e5] py-3 px-2 bg-gray-50 whitespace-nowrap" colSpan={3} rowSpan={3}>
                                        <span className="text-orange-600 font-bold">{t('추후 공고 예정', 'To be announced')}</span>
                                        <div className="text-xs text-gray-500 mt-1 font-normal">
                                            {language === 'en' && row.futureNote.includes('월 중') ? row.futureNote.replace('월 중', 'Month') : row.futureNote}
                                        </div>
                                    </td>
                                ) : null}

                                {/* Target Column */}
                                {row.target && !row.isFuture && (
                                    <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-white break-keep" rowSpan={row.targetRowSpan}>
                                        {(language === 'en' && row.targetEn ? row.targetEn : row.target).split('\n').map((line, i) => <div key={i}>{line}</div>)}
                                        {(row.targetNote || row.targetNoteEn) && (
                                            <span className="text-xs text-gray-500 mt-1 block">{language === 'en' && row.targetNoteEn ? row.targetNoteEn : row.targetNote}</span>
                                        )}
                                    </td>
                                )}

                                {/* Count Column */}
                                {row.count && !row.isFuture && (
                                    <td className="border border-[#e5e5e5] py-3 px-2 text-center font-bold bg-[#fbfbfb]" rowSpan={row.countRowSpan}>
                                        {language === 'en' && row.countEn ? row.countEn : row.count}
                                    </td>
                                )}

                                {/* Budget Column */}
                                {row.budget && !row.isFuture && (
                                    <td className="border border-[#e5e5e5] py-3 px-2 text-center bg-white" rowSpan={row.budgetRowSpan}>
                                        <div className="font-bold text-blue-600">{language === 'en' && row.budgetEn ? row.budgetEn : row.budget}</div>
                                        {(row.budgetNote || row.budgetNoteEn) && (
                                            <div className="text-xs text-gray-500 mt-0.5">{language === 'en' && row.budgetNoteEn ? row.budgetNoteEn : row.budgetNote}</div>
                                        )}
                                    </td>
                                )}

                                {/* Period Column */}
                                {row.period && !row.isFuture && (
                                    <td className="border border-[#e5e5e5] py-3 px-2 text-center font-bold bg-[#fbfbfb]" rowSpan={row.periodRowSpan}>
                                        {language === 'en' && row.periodEn ? row.periodEn : row.period}
                                        {(row.periodNote || row.periodNoteEn) && (
                                            <div className="text-xs text-slate-500 font-normal mt-0.5">{language === 'en' && row.periodNoteEn ? row.periodNoteEn : row.periodNote}</div>
                                        )}
                                    </td>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p className="text-right text-xs text-gray-500 mt-2">
                {t('※ 신규과제 접수 및 평가결과 등에 따라 세부유형별 신규과제 수 등 지원규모 변동 가능', '* Support scale, including the number of new projects, subject to change based on applications and evaluation results.')}
            </p>
        </div >
    );
}
