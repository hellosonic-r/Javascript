// 8, 12 [1,2,4,8] [1,2,3,4,6,12]

const getMax = (n, m) => {
    let result = 1;
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            if (m % i === 0) {
                result = i;
                break;
            }
        }
    }
    
    return result;
}

const getMin = (n, m, max) => {
    return (n / max) * (m / max) * max;
}

function solution(n, m) {
    const a = getMax(n,m);
    return [a, getMin(n,m,a)];
}