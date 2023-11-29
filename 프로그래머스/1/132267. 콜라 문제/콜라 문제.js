function solution(a, b, n) {
    var answer = 0;
    while (1){
        if (n < a) break;
        answer += (parseInt(n/a))*b; //받을 수 있는 콜라병
        n = (parseInt(n/a)*b) + (n % a);
    }
    
    return answer;
}