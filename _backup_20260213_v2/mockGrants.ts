import { Grant } from '../types';

export const mockGrants: Grant[] = [
    {
        id: '1',
        title: '인문사회연구소지원사업 신규과제 공고',
        agency: '교육부, 한국연구재단',
        department: '인문사회연구본부',
        budget: '260백만원 이내(간접비 별도)/년',
        duration: '6년(3년+3년)',
        deadline: '2026-04-03',
        fields: ['인문학', '사회과학', '예술체육', '대학부설연구소'],
        status: 'active',
    },
    {
        id: '2',
        title: '사회과학연구지원사업(SSK) 신규과제 공고',
        agency: '교육부, 한국연구재단',
        budget: '123백만원~250백만원 이내(간접비 별도)/년',
        duration: '3년',
        deadline: '2026-04-03',
        fields: ['사회과학', '글로벌아젠다', '그룹연구'],
        status: 'active',
    },
    {
        id: '3',
        title: '글로벌인문사회융합연구지원사업(연구그룹형, 연구소지원형) 신규과제 공고',
        agency: '교육부, 한국연구재단',
        budget: '(연구그룹형)150백만원 ~ 250백만원 이내/년, (연구소지원형) 000백만원 ~ 2,000백만원 이내/년',
        duration: '(연구그룹형) 3년, (연구소지원형) 6년(3+3)',
        deadline: '2026-04-03', // Past date for test
        fields: ['인문학', '사회과학', '융복합', ' 그룹연구', '대학부설연구소', '컨소시엄'],
        status: 'active',
    },
    {
        id: '4',
        title: '인문한국3.0지원사업 신규과제 공고',
        agency: '교육부, 한국연구재단',
        budget: '(연구거점형) 800백만원/년, (컨소시엄형) 2,000백만원/년',
        duration: '6년(3+3)',
        deadline: '2026-04-03',
        fields: ['인문학', '대학부설연구소', '컨소시엄', '리빙랩'],
        status: 'active',
    },
];