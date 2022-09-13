function solution(product) {
    if (product === 0) {
        return 10;
    }
    if (product === 1) {
        return 1;
    }
    let result = '';
    for (let i = 9; i > 1; i--) {
        while (product % i === 0) {
            result = i + result;
            product /= i;
        }
    }
    return product === 1 ? parseInt(result) : -1;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test digitsProduct

// alternative solution
