function solution(id_list, report, k) {
    const arr = Array.from({length: id_list.length}, () => 0);
    const answer = [];
    const dic1 = {};
    const dic2 = {};
    
    id_list.forEach(item => {
        dic1[item] = 0;
        dic2[item] = [];
    })

    report.forEach(item => {
        const [a,b] = item.split(' ');
        if (!dic2[a].includes(b)) {
            dic2[a].push(b); // a가 신고한 유저
            dic1[b] += 1; // 신고받은 횟수
        }
    })
  
    for (const tempArr of Object.values(dic2)) {
        let cnt = 0;
        for (let i = 0; i < tempArr.length; i += 1){
            if (dic1[tempArr[i]] >= k) {
                cnt += 1;
            } 
        }
        answer.push(cnt)
    }
    
    return answer;
    
}