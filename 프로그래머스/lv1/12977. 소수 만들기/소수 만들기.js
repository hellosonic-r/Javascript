var cnt = 0;

function dfs(depth, start, nums, temp){
    if (depth == 3){
        var tempSum = temp.reduce(function add(sum, currValue){
            return sum + currValue;
        }, 0);
        var flag = true;
        for (var j = 2; j < parseInt(tempSum/2)+2; j++){
            if (tempSum % j == 0){
                flag = false;
                break;
            }
        }
        if (flag == true){
            cnt += 1;
        }
        return;
    }
    for (var i = start; i < nums.length; i++){
        temp.push(nums[i])
        dfs(depth+1, i+1, nums, temp);
        temp.pop();
    }
}

function solution(nums) {
    var answer = -1;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    dfs(0,0,nums,[])
    
    return cnt;
}