function solution(s) {
    var answer = 0;
    var i = 0;
    var x = s[0];
    var cnt1 = 1;
    var cnt2 = 0;
    while (true){
        i += 1;
        if (i == s.length) {
            if (x != "") {
                answer += 1;
            }
            break;
        }
        
        if (x == ""){
            x = s[i];
            cnt1 = 1;
            continue;
        }
        
        if (s[i] == x[0]){
            cnt1 += 1;
            x += s[i];
        } else {
            cnt2 += 1;
            x += s[i];
        }
        
        if (cnt1 == cnt2){
            answer += 1;
            x = ""
            cnt1 = 0;
            cnt2 = 0;
        }
    
    }
    return answer;
}