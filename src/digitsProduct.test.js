const solution = require('./digitsProduct.js');

test('test 1', () => {
    expect(solution(12)).toBe(26);
});

test('test 2', () => {
    expect(solution(19)).toBe(-1);
});

test('test 3', () => {
    expect(solution(450)).toBe(2559);
});

test('test 4', () => {
    expect(solution(0)).toBe(10);
});

test('test 5', () => {
    expect(solution(13)).toBe(-1);
});

test('test 6', () => {
    expect(solution(1)).toBe(1);
});

test('test 7', () => {
    expect(solution(243)).toBe(399);
});

test('test 8', () => {
    expect(solution(576)).toBe(889);
});

test('test 9', () => {
    expect(solution(360)).toBe(589);
});
