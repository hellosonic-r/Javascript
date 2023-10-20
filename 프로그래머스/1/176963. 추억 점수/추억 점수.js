function solution(name, yearning, photo) {
    var answer = [];
    var len = name.length; //4
    var obj = {};
    for (var i = 0; i < len; i++){
        obj[name[i]] = yearning[i];
    }
    
    for (var p of photo){
        var temp = 0;
        for (var k of p){
            if (k in obj) {
                temp += obj[k];
            }
        }
        
        answer.push(temp);
    }
    return answer;
}