function solution(sides) {
    const newSides = sides.sort((a,b) => a-b);
    return newSides[0] + newSides[1] > newSides[2] ? 1 : 2;
}