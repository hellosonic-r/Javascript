function solution(s, n) {
    var answer = '';
    for (var i of s){
        var ascii = i.codePointAt();
        if (i == " ") {
            answer += " "
        }
        if (ascii >= 97 && ascii <= 122){
            ascii += n; // 97 < < 122   121 122 96 97 98 > 125   99
            if (ascii > 122){
                ascii -= 26;
            }
            answer += String.fromCodePoint(ascii);
        } else if (ascii >= 65 && ascii <= 90){
            ascii += n;
            if (ascii > 90){
                ascii -= 26;
            }
            answer += String.fromCodePoint(ascii);
        }
    }
    return answer;
}