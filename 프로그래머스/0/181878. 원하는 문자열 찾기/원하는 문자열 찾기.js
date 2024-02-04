function solution(myString, pat) {
    if (myString.toUpperCase().split(pat.toUpperCase()).length === 1) {
        return 0;
    } else {
        return 1;
    }
}