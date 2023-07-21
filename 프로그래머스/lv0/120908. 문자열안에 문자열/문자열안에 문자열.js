function solution(str1, str2) {
    // var answer = 2;
    // for (var i = 0; i < str1.length-str2.length+1; i++){
    //     if (str1.slice(i,i+str2.length) == str2){
    //         answer = 1; 
    //         break
    //     }
    // }
    // return answer;
    console.log(str1.split(str2))
    return str1.split(str2).length > 1 ? 1: 2;
}