function solution(arr)
{
    const result = [];
    arr.forEach(a => {
        if (result[result.length - 1] !== a) {
            result.push(a);
        }
    });
    
    return result;
}