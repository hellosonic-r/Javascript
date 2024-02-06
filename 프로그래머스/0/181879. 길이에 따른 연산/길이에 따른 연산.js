function solution(num_list) {
    let result = 1;
    if (num_list.length >= 11) {
        result = num_list.reduce(((acc,curr) => acc+curr),0);
        return result;
    } else {
        for (let i = 0; i<num_list.length; i+=1) {
            result *= num_list[i] 
        }
        return result;
    }
}