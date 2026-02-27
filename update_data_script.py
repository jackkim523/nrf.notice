import re

file_path = 'c:\\Users\\NRF\\Desktop\\AI 트레이닝\\grant-portal\\app\\data\\businessTableData.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

translations = [
    ('category: "인문사회\\n연구소지원"', 'category: "인문사회\\n연구소지원",\n        categoryEn: "Institute Support\\nfor Humanities & Social Sciences"'),
    ('subCategory: "순수학문\\n연구형"', 'subCategory: "순수학문\\n연구형",\n        subCategoryEn: "Pure Academic\\nResearch"'),
    ('type: "논문/저역서"', 'type: "논문/저역서",\n        typeEn: "Papers / Translations"'),
    ('purpose: [\n            "연구소의 전문화·특성화로 대학 연구 거점 구축 및 우수한 연구성과 창출·확산"\n        ]', 'purpose: [\n            "연구소의 전문화·특성화로 대학 연구 거점 구축 및 우수한 연구성과 창출·확산"\n        ],\n        purposeEn: [\n            "Establish university research hubs through specialization of institutes and create/spread excellent research outcomes"\n        ]'),
    ('target: "대학부설연구소 및\\n국내연구기관"', 'target: "대학부설연구소 및\\n국내연구기관",\n        targetEn: "University Research Institutes &\\nDomestic Research Organizations"'),
    ('count: "27과제"', 'count: "27과제",\n        countEn: "27 Projects"'),
    ('count: "4과제"', 'count: "4과제",\n        countEn: "4 Projects"'),
    ('budget: "2.6억원"', 'budget: "2.6억원",\n        budgetEn: "260M Won"'),
    ('budget: "1.6억원"', 'budget: "1.6억원",\n        budgetEn: "160M Won"'),
    ('budget: "3.2억원"', 'budget: "3.2억원",\n        budgetEn: "320M Won"'),
    ('budget: "8억원"', 'budget: "8억원",\n        budgetEn: "800M Won"'),
    ('budget: "20억원"', 'budget: "20억원",\n        budgetEn: "2B Won"'),
    ('budgetNote: "이내"', 'budgetNote: "이내",\n        budgetNoteEn: "Max"'),
    ('period: "6년"', 'period: "6년",\n        periodEn: "6 Years"'),
    ('period: "3년"', 'period: "3년",\n        periodEn: "3 Years"'),
    ('periodNote: "(3+3)"', 'periodNote: "(3+3)",\n        periodNoteEn: "(3+3)"'),
    ('type: "DB구축"', 'type: "DB구축",\n        typeEn: "DB Construction"'),
    ('type: "번역/선집/전집"', 'type: "번역/선집/전집",\n        typeEn: "Translations / Anthologies"'),
    ('subCategory: "교육연계형"', 'subCategory: "교육연계형",\n        subCategoryEn: "Education Linked Type"'),
    ('subCategory: "문제해결형"', 'subCategory: "문제해결형",\n        subCategoryEn: "Problem Solving Type"'),
    ('futureNote: "(’26년 2월 중 예정)"', 'futureNote: "(’26년 2월 중 예정)",\n        futureNoteEn: "(Scheduled for Feb 2026)"'),
    ('category: "사회과학\\n연구지원"', 'category: "사회과학\\n연구지원",\n        categoryEn: "Social Science\\nResearch Support"'),
    ('subCategory: "글로벌\\n아젠다"', 'subCategory: "글로벌\\n아젠다",\n        subCategoryEn: "Global Agenda"'),
    ('type: "국내"', 'type: "국내",\n        typeEn: "Domestic"'),
    ('purpose: [\n            "사회문제에 대한 아젠다 중심의 연구를 통해 문제해결 방안 제시"\n        ]', 'purpose: [\n            "사회문제에 대한 아젠다 중심의 연구를 통해 문제해결 방안 제시"\n        ],\n        purposeEn: [\n            "Propose solutions through agenda-centric research on social issues"\n        ]'),
    ('target: "대학·연구기관\\n소속 연구자"', 'target: "대학·연구기관\\n소속 연구자",\n        targetEn: "Researchers in Universities/Institutes"'),
    ('targetNote: "(책임자: 전임교원)"', 'targetNote: "(책임자: 전임교원)",\n        targetNoteEn: "(PI: Full-time Faculty)"'),
    ('count: "3과제"', 'count: "3과제",\n        countEn: "3 Projects"'),
    ('type: "국외"', 'type: "국외",\n        typeEn: "Overseas"'),
    ('category: "인문한국\\n(HK+)"', 'category: "인문한국\\n(HK+)",\n        categoryEn: "Humanities Korea\\n(HK+)"'),
    ('subCategory: "인문한국\\n3.0지원"', 'subCategory: "인문한국\\n3.0지원",\n        subCategoryEn: "HK 3.0 Support"'),
    ('type: "연구거점형"', 'type: "연구거점형",\n        typeEn: "Research Hub Type"'),
    ('purpose: [\n            "대학 인문학 연구소 육성을 통해 인문학 연구 인프라를 구축하여 세계적 수준의 연구 성과 창출 및 학문후속세대 양성"\n        ]', 'purpose: [\n            "대학 인문학 연구소 육성을 통해 인문학 연구 인프라를 구축하여 세계적 수준의 연구 성과 창출 및 학문후속세대 양성"\n        ],\n        purposeEn: [\n            "Build humanities research infrastructure by fostering university institutes to create world-class outcomes and train the next generation of scholars"\n        ]'),
    ('target: "대학부설연구소"', 'target: "대학부설연구소",\n        targetEn: "University Research Institutes"'),
    ('count: "8과제"', 'count: "8과제",\n        countEn: "8 Projects"'),
    ('type: "컨소시엄형"', 'type: "컨소시엄형",\n        typeEn: "Consortium Type"'),
    ('target: "대학부설연구소\\n컨소시엄"', 'target: "대학부설연구소\\n컨소시엄",\n        targetEn: "University Institute Consortium"'),
    ('count: "2과제"', 'count: "2과제",\n        countEn: "2 Projects"'),
]

for src, trg in translations:
    content = content.replace(src, trg)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Translations applied successfully!")
