function solution(s) {
    var answer = 0;
    
    var arr = s.split("");
    
    
    for (var i = 0; i < s.length; i++){
        var stack = [];
        arr.push(arr.shift());
        for (var a of arr){
            if (stack.length == 0){
                stack.push(a);
            } else {
                if (stack[stack.length-1] == '('){
                    if (a == ')') {
                        stack.pop();
                    } else {
                        stack.push(a);
                    }
                } else if (stack[stack.length-1] == '['){
                    if (a == ']'){
                        stack.pop();
                    } else {
                        stack.push(a);
                    } 
                } else if (stack[stack.length-1] == '{'){
                    if (a == '}'){
                        stack.pop();
                    } else {
                        stack.push(a);
                    }
                } else {
                    stack.push(a);
                }
            }
        }
        if (stack.length == 0) answer += 1;
        
    }
    
    return answer;
}