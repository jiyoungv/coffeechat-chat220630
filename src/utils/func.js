// 숫자를 가격(천 단위마다 콤마)으로 표시
export const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// set을 array로
export const setToArray = (set) => {
    const array = [];
    for (let x of set) {
        array.push(x);
    }
    return array;
};

// textarea 높이 자동 맞춤
export const autoTextAreaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
};