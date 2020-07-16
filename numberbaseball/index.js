const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let numbers = [];
for (let n = 0; i <= 9; n++) {
    numbers.push(n);
}
let answer = []; 
for (let n = 0; n <= 3; n += 1) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}
console.log(answer);


let count = 1;
check.addEventListener('click', () => {
    const value = input.value;
    if (value && value.length === 4) {
        if (answer.join('') === value) {
            log.appendChild(document.createTextNode('Homerun!'));
        } else {
            console.log('다르다');
            let strike = 0;
            let ball = 0;
            for (const [answerIndex, answerNumber] of answer.entries()) {
                for (const [inputIndex, inputString] of input.value.split('').entries()) {
                    if (answerNumber === Number(inputString)) {
                        if (answerIndex === inputIndex) {
                            strike += 1;
                        } else {
                            ball += 1;
                        }
                    }
                }
            }
            logs.append(`${input.value} : ${strike} strike ${ball} ball`, document.createElement('br'));
            if (count > 10) {
                logs.append(`Game Over! 답은 ${answer.join('')}`);
            } else {
                count++;
            }
        }

    }
});


