export interface BusinessRow {
    category?: string;      // 1. 사업명 (Business Name)
    categoryEn?: string;
    categoryRowSpan?: number;
    subCategory?: string;   // 2. 세부사업 및 유형 (Detailed Business & Type)
    subCategoryEn?: string;
    subCategoryRowSpan?: number;
    subCategoryColSpan?: number;
    type?: string;           // 3. 유형 (Type) - Now used for sub-types like "General", "DB", etc.
    typeEn?: string;
    typeRowSpan?: number;
    purpose?: string[];      // 사업목적
    purposeEn?: string[];
    purposeRowSpan?: number;
    target?: string;         // 지원대상
    targetEn?: string;
    targetNote?: string;
    targetNoteEn?: string;
    targetRowSpan?: number;
    count?: string;          // 과제수
    countEn?: string;
    countRowSpan?: number;
    budget?: string;         // 지원규모
    budgetEn?: string;
    budgetNote?: string;
    budgetNoteEn?: string;
    budgetRowSpan?: number;
    period?: string;         // 지원기간
    periodEn?: string;
    periodNote?: string;
    periodNoteEn?: string;
    periodRowSpan?: number;
    isFuture?: boolean;
    futureNote?: string;
    futureNoteEn?: string;
}

export const businessTableData: BusinessRow[] = [
    // --- 인문사회연구소지원 (Institute Support) ---
    {
        category: "인문사회\n연구소지원",
        categoryEn: "Institute Support\nfor Humanities & Social Sciences",
        categoryRowSpan: 5,
        subCategory: "순수학문\n연구형",
        subCategoryEn: "Pure Academic\nResearch",
        subCategoryRowSpan: 3,
        type: "논문/저역서",
        typeEn: "Papers / Translations", // Changed from "-" to fill the empty cell
        purpose: [
            "연구소의 전문화·특성화로 대학 연구 거점 구축 및 우수한 연구성과 창출·확산"
        ],
        purposeEn: [
            "Establish university research hubs through specialization of institutes and create/spread excellent research outcomes"
        ],
        purposeRowSpan: 5,
        target: "대학부설연구소 및\n국내연구기관",
        targetEn: "University Research Institutes &\nDomestic Research Organizations",
        targetRowSpan: 5,
        count: "27과제",
        countEn: "27 Projects",
        countRowSpan: 3,
        budget: "2.6억원",
        budgetEn: "260M Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        budgetRowSpan: 5,
        period: "6년",
        periodEn: "6 Years",
        periodNote: "(3+3)",
        periodNoteEn: "(3+3)",
        periodRowSpan: 5
    },
    {
        type: "DB구축",
        typeEn: "DB Construction",
    },
    {
        type: "번역/선집/전집",
        typeEn: "Translations / Anthologies",
    },
    {
        subCategory: "교육연계형",
        subCategoryEn: "Education Linked Type",
        subCategoryColSpan: 2,
        count: "4과제",
        countEn: "4 Projects",
    },
    {
        subCategory: "예술체육특화형",
        subCategoryEn: "Arts & Sports Specialized Type",
        subCategoryColSpan: 2,
        count: "4과제",
        countEn: "4 Projects",
    },

    // --- 글로벌인문사회융합연구 (Global Convergence) ---
    {
        category: "글로벌인문사회\n융합연구지원",
        categoryEn: "Global Convergence\nResearch Support",
        categoryRowSpan: 5,
        subCategory: "연구그룹\n지원",
        subCategoryEn: "Research Group\nSupport",
        subCategoryRowSpan: 2,
        type: "국내",
        typeEn: "Domestic",
        purpose: [
            "해외의 우수한 연구자·연구소와의 글로벌 인문사회 융합연구를 통해 세계 최고 수준의 융합연구 성과 창출"
        ],
        purposeEn: [
            "Create world-class convergence research results through global research collaboration with prominent overseas researchers and institutes"
        ],
        purposeRowSpan: 2,
        target: "대학·연구기관\n소속 연구자",
        targetEn: "Researchers in Universities/Institutes",
        targetRowSpan: 2,
        count: "15과제",
        countEn: "15 Projects",
        budget: "2억원",
        budgetEn: "200M Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "3년",
        periodEn: "3 Years",
        periodRowSpan: 2
    },
    {
        type: "국외",
        typeEn: "Overseas",
        count: "10과제",
        countEn: "10 Projects",
        budget: "2.86억원",
        budgetEn: "286M Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "" // Inherited
    },
    {
        subCategory: "연구소\n지원형",
        subCategoryEn: "Institute\nSupport Type",
        subCategoryRowSpan: 3,
        type: "국내",
        typeEn: "Domestic",
        purpose: [
            "글로벌 단위의 융합연구를 통한 인문사회분야 학술연구 활동의 입지 강화 및 성과의 다양성·활용성 제고 기반 마련"
        ],
        purposeEn: [
            "Strengthen the standing of academic research in humanities and social sciences and broaden the diversity and utility of research outcomes through global-level convergence studies"
        ],
        purposeRowSpan: 3,
        target: "대학부설연구소 및\n국내연구기관",
        targetEn: "University Research Institutes &\nDomestic Research Organizations",
        targetRowSpan: 2,
        count: "2과제",
        countEn: "2 Projects",
        budget: "6.76억원",
        budgetEn: "676M Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "3년",
        periodEn: "3 Years"
    },
    {
        type: "국외",
        typeEn: "Overseas",
        count: "2과제",
        countEn: "2 Projects",
        budget: "8.45억원",
        budgetEn: "845M Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "6년",
        periodEn: "6 Years",
        periodNote: "(3+3)",
        periodNoteEn: "(3+3)"
    },
    {
        type: "컨소시엄",
        typeEn: "Consortium",
        target: "대학부설연구소\n컨소시엄",
        targetEn: "University Institute Consortium",
        count: "2과제",
        countEn: "2 Projects",
        budget: "20억원",
        budgetEn: "2B Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "6년",
        periodEn: "6 Years",
        periodNote: "(3+3)",
        periodNoteEn: "(3+3)"
    },

    // --- 사회과학연구지원 (Social Science) ---
    {
        category: "사회과학\n연구지원",
        categoryEn: "Social Science\nResearch Support",
        categoryRowSpan: 2,
        subCategory: "글로벌\n아젠다",
        subCategoryEn: "Global Agenda",
        subCategoryRowSpan: 2,
        type: "국내",
        typeEn: "Domestic",
        purpose: [
            "사회문제에 대한 아젠다 중심의 연구를 통해 문제해결 방안 제시"
        ],
        purposeEn: [
            "Propose solutions through agenda-centric research on social issues"
        ],
        purposeRowSpan: 2,
        target: "대학·연구기관\n소속 연구자",
        targetEn: "Researchers in Universities/Institutes",
        targetNote: "(책임자: 전임교원)",
        targetNoteEn: "(PI: Full-time Faculty)",
        targetRowSpan: 2,
        count: "4과제",
        countEn: "4 Projects",
        budget: "1.6억원",
        budgetEn: "160M Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "3년",
        periodEn: "3 Years",
        periodRowSpan: 2
    },
    {
        type: "국외",
        typeEn: "Overseas",
        count: "3과제",
        countEn: "3 Projects",
        budget: "3.2억원",
        budgetEn: "320M Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "" // Inherited
    },

    // --- 인문한국 (Humanities Korea) ---
    {
        category: "인문한국지원",
        categoryEn: "Humanities Korea\n(HK+)",
        categoryRowSpan: 2,
        subCategory: "인문한국지원",
        subCategoryEn: "HK 3.0 Support",
        subCategoryRowSpan: 2,
        type: "연구거점형",
        typeEn: "Research Hub Type",
        purpose: [
            "대학 인문학 연구소 육성을 통해 인문학 연구 인프라를 구축하여 세계적 수준의 연구 성과 창출 및 학문후속세대 양성"
        ],
        purposeEn: [
            "Build humanities research infrastructure by fostering university institutes to create world-class outcomes and train the next generation of scholars"
        ],
        purposeRowSpan: 2,
        target: "대학부설연구소",
        targetEn: "University Research Institutes",
        count: "8과제",
        countEn: "8 Projects",
        budget: "8억원",
        budgetEn: "800M Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "6년",
        periodEn: "6 Years",
        periodNote: "(3+3)",
        periodNoteEn: "(3+3)",
        periodRowSpan: 2
    },
    {
        type: "컨소시엄형",
        typeEn: "Consortium Type",
        target: "대학부설연구소\n컨소시엄",
        targetEn: "University Institute Consortium",
        count: "2과제",
        countEn: "2 Projects",
        budget: "20억원",
        budgetEn: "2B Won",
        budgetNote: "이내",
        budgetNoteEn: "Max",
        period: "" // Inherited
    }
];
