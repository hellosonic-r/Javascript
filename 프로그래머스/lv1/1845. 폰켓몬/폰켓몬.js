function solution(nums) {
    var answer = 0;
    var n = nums.length / 2;
    var tempSet = new Set(nums);
    nums = Array.from(tempSet);

    if (nums.length < n) answer = nums.length;
    else answer = n;
    return answer;
}