export interface Grant {
    id: string;
    title: string;
    titleEn?: string;
    agency: string;
    agencyEn?: string;
    department?: string;
    budget: string; // e.g., "5억원/년"
    budgetEn?: string;
    duration: string; // e.g., "3년"
    durationEn?: string;
    deadline: string; // ISO date string "2024-05-20"
    fields: string[];
    fieldsEn?: string[];
    status: 'active' | 'closed' | 'upcoming';
    url?: string;
    erndUrl?: string;
    businessContact?: string;
    evaluationContact?: string;
}

export type FilterState = {
    status: string;
    agency: string;
};
