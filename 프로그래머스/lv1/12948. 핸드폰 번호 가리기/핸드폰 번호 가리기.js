function solution(phone_number) {
    let answer = ""
    for (let i = 0; i < phone_number.length; i++){
        if (i > phone_number.length-5) answer += phone_number[i];
        else answer += "*";
    }
    return answer;

}