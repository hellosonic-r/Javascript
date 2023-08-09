function solution(sizes) {
    var answer = 0;
    var arr = [];
    var x = 0;
    var y = 0;
    for (let a of sizes){
        a.sort((a,b) => a-b);
        if (a[0] > x) x = a[0];
        if (a[1] > y) y = a[1];
    }
    
    answer = x*y;
    return answer;
}