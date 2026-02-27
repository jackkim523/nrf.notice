'use client';

import { mockGrants } from '@/app/data/mockGrants';
import GrantCard from './GrantCard';
// import FilterBar from './FilterBar'; // Assuming FilterBar is not used as per list page
import AnnouncementHeader from './AnnouncementHeader';

export default function ProjectListSection() {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4">


            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-900">
                    세부 사업 목록
                    <span className="ml-2 text-base font-normal text-slate-500">
                        ({mockGrants.length}건)
                    </span>
                </h2>

                <div className="flex gap-2">
                    <select className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm bg-white">
                        <option>최신순</option>
                        <option>마감임박순</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-4 mb-20">
                {mockGrants.map((grant) => (
                    <GrantCard key={grant.id} grant={grant} />
                ))}
            </div>

            {/* 4 Clickable Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
                <a href="#" className="flex flex-col items-center justify-center h-32 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
                    <span className="text-lg font-bold text-slate-700 group-hover:text-primary mb-2">접수요령</span>
                    <span className="text-sm text-slate-500">신규과제 접수 방법 안내</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center h-32 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
                    <span className="text-lg font-bold text-slate-700 group-hover:text-primary mb-2">FAQ</span>
                    <span className="text-sm text-slate-500">자주 묻는 질문</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center h-32 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
                    <span className="text-lg font-bold text-slate-700 group-hover:text-primary mb-2">연구사업통합시스템</span>
                    <span className="text-sm text-slate-500">e-R&D 바로가기</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center h-32 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
                    <span className="text-lg font-bold text-slate-700 group-hover:text-primary mb-2">문의처</span>
                    <span className="text-sm text-slate-500">사업별 담당자 연락처</span>
                </a>
            </div>

            <footer className="text-center text-[#999] text-xs border-t border-[#eee] py-8 bg-[#f9f9f9] mt-20">
                <p className="font-bold text-[#666] mb-1 text-sm">NRF National Research Foundation of Korea</p>
                <p>Copyright © 2025 National Research Foundation of Korea. All rights reserved.</p>
            </footer>
        </div>
    );
}
