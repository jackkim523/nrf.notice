export default function FilterBar() {
    return (
        <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div>
                <h3 className="font-bold text-slate-900 mb-4">분야별 보기</h3>
                <div className="space-y-2">
                    {['전체', '인문사회', '이공계', '생명과학', 'ICT/SW', '예술체육'].map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                            <span className="text-slate-800/900 group-hover:text-primary text-sm">
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-bold text-slate-900 mb-4">지원 기관</h3>
                <div className="space-y-2">
                    {['한국연구재단', '과기정통부', '중기부', '산업부'].map((agency) => (
                        <label key={agency} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                            <span className="text-slate-800/900 group-hover:text-primary text-sm">
                                {agency}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-bold text-slate-900 mb-4">마감 기한</h3>
                <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="deadline" className="text-primary focus:ring-primary" defaultChecked />
                        <span className="text-sm text-slate-800/900">전체</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="deadline" className="text-primary focus:ring-primary" />
                        <span className="text-sm text-slate-800/900">1주 이내</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="deadline" className="text-primary focus:ring-primary" />
                        <span className="text-sm text-slate-800/900">1개월 이내</span>
                    </label>
                </div>
            </div>
        </aside>
    );
}
