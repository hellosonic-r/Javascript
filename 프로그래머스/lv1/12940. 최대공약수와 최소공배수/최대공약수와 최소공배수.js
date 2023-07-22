function solution(n, m) {
    var answer = [];
    var arr = [n,m];
    var min = Math.min(...arr);
    var gcd = 0; 
    for (var i = min ; i > 0; i--){
        if (n % i == 0 && m % i == 0){
            gcd = i;
            break
        } 
    }
    console.log(gcd);
    
    var lcm = (n / gcd) * (m / gcd) * gcd;
    
    answer.push(gcd);
    answer.push(lcm);
    
    return answer;
}

  //4 , 10 2 2 ,  2 2 5  2 