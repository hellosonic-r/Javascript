function solution(s) {
    var answer =[];
    var words = s.split(" ");

    for (let word of words){
        var temp = ''
        for (let i = 0; i < word.length; i++){
            if (i % 2 == 0){
                temp += word[i].toUpperCase();
            } else {
                temp += word[i].toLowerCase();
            }
        }
        answer.push(temp);
    }
    
    return answer.join(" ");
}