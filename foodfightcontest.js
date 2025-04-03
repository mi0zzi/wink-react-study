function solution(food) {
    let answer = '';
    for (let i = 1; i < food.length; i++) {
        answer += String(i).repeat(Math.floor(food[i] / 2))
    } // Math.floor : 소수점 버리기

    let reversed = '';
    for (let i = answer.length - 1; i >= 0; i--) {
        reversed += answer[i];
    }

    return answer + "0" + reversed;
}

console.log(solution([1, 3, 4, 6]));