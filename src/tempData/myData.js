import shortid from "shortid";

const beforeQuestions = [];
for (let i = 1; i < 11; i++) {
    beforeQuestions.push({
        id: shortid.generate(),
        date: `2022. 7. ${i}`,
        partner: `파트너${i}`,
        question: `${this.date}에 ${this.partner}과의 커피챗에서 질문했던 내용입니다.`
    });
}

const myData = {
    simpleQuestions: [
        '해외에서의 디지털 마케터 라이프(말레이시아/호주)',
        '말레이시아 라이프',
        '현지채용 기준 한국인 평균 연봉에 비해 1.5-2배 높은 연봉을 받고있는 저의 비결(?)',
        '네이버에서 일한다는 것🍀 (업무, 부서, 근무환경 etc)',
        '커피챗에서 업무하기',
        '간단 질문 선택',
        '최소 2개 선택',
        '최대 5개 선택 가능',
        '5개 선택 시 비활성화',
        'N개 항목 더 보기 클릭 시 모두 노출',
        '비활성화 된 주제 선택 시 토스트 노출',
    ],
    beforeQuestions,
};

export default myData;