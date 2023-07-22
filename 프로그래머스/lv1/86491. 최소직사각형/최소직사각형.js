function solution(sizes) {
    var answer = 0;
    var maxX = 0;
    var maxY = 0;
    for (var y = 0; y < sizes.length; y++){
        sizes[y].sort(function(a,b){
            return a-b;
        });
        if (sizes[y][0] > maxX){
            maxX = sizes[y][0];
        }
        if (sizes[y][1] > maxY){
            maxY = sizes[y][1];
        }
    }
    return maxX*maxY;
}