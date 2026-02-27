'use client';

import { useState } from 'react';

export default function AnnouncementHeader() {
    const [announcementNumber, setAnnouncementNumber] = useState('2026 - 90');

    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 border-b border-slate-200 pb-4">
                <div className="flex gap-3 text-base font-bold text-slate-700">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        주무부처: <span className="text-primary font-bold">교육부</span>
                    </span>
                    <span className="w-px h-4 bg-slate-300"></span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary/70"></span>
                        전문기관: <span className="text-primary font-bold">한국연구재단</span>
                    </span>
                </div>

                <div className="flex items-center gap-2 text-base font-bold text-slate-900 bg-slate-100 px-4 py-2 rounded-lg border border-slate-300">
                    <span>교육부 공고 제</span>
                    <input
                        type="text"
                        value={announcementNumber}
                        onChange={(e) => setAnnouncementNumber(e.target.value)}
                        className="w-24 bg-transparent border-b border-slate-400 focus:border-primary outline-none text-center font-mono font-bold text-primary placeholder-primary/50"
                        placeholder="0000-00"
                    />
                    <span className="text-primary font-bold">호</span>
                </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                2026년 인문사회분야 학술연구지원사업 <br className="hidden md:block" />
                <span className="text-primary/80">(집단연구군)</span> 신규과제 공고
            </h1>


        </div>
    );
}
