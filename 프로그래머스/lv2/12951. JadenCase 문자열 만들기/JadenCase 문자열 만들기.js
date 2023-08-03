function solution(s) {
    var answer = '';
    var array = s.split(" ");

    array = array.map((word) => {
        var first = word[0];
        var remain = word.slice(1,word.length);
        if (word == ""){
            return ""
        } else {
            if (97 <= first.codePointAt() && first.codePointAt() <= 122) {
            first = first.toUpperCase();
            }
            remain = remain.toLowerCase();
            return first + remain;
        }

    });
    
    answer = array.join(" ");
    
    return answer;
}