function solution(s){
    const stack = [];
    s.split('').map((item) => {
        if (stack[stack.length - 1] === '(' && item === ')') {
            stack.pop();
        } else {
            stack.push(item);
        }
    })
    
    return stack.length === 0 ? true : false; 
}