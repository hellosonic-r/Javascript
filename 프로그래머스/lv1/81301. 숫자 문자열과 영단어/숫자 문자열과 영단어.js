function solution(s) {
    var answer = 0;
    var obj = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }
    while (isNaN(s) == true){
        if (s.includes('zero') == true){
            s = s.replace('zero',0);
        }
        if (s.includes('one') == true){
            s = s.replace('one',1);
        }
        if (s.includes('two') == true){
            s = s.replace('two',2);
        }
        if (s.includes('three') == true){
            s = s.replace('three',3);
        }
        if (s.includes('four') == true){
            s = s.replace('four',4);
        }
        if (s.includes('five') == true){
            s = s.replace('five',5);
        }
        if (s.includes('six') == true){
            s = s.replace('six',6);
        }
        if (s.includes('seven') == true){
            s = s.replace('seven',7);
        }
        if (s.includes('eight') == true){
            s = s.replace('eight', 8);
        }
        if (s.includes('nine') == true){
            s = s.replace('nine', 9);
        }
        
            
    }
        
    return Number(s);
}