function solution(num_list) {
    let a = 0;
    let b = 0;
    num_list.forEach((num, idx) => {
        if (idx % 2 === 1) {
            a += num;
        } else {
            b += num;
        }
    })
    return Math.max(a,b);
}