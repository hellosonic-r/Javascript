function solution(n) {
    
    const arr = Array(n).fill().map((element, idx) => {
        return idx+1;
    });
    let flag = true;
    let result = arr.filter((element) => {
       if ((n % element == 1) && (flag == true)){
           flag = false;
           return element;
       }  
    });
    return result[0];
}