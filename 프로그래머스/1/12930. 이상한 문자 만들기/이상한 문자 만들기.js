function solution(s) {
    return s.split(" ").map(word => {
        return [...word].map((w,index) => {
            return index % 2 === 1 ? w.toLowerCase() : w.toUpperCase();
        }).join('')
    }).join(" ");
}