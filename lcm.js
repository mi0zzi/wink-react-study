function solution(arr) {
    function lcm(a, b) {
        let i = a;

        if (b > a) { 
            i = b;
        }

        while (true) { 
            if (i % a === 0 && i % b === 0) { 
                return i;
            }
            i++; 
        }
    }

    let answer = arr[0]; 

    let i = 1;
    while (i < arr.length) {  
        answer = lcm(answer, arr[i]);
        i++; 
    }

    return answer;
}

console.log(solution([2, 6, 8, 14])); 
console.log(solution([1, 2, 3]));    
