const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#log');

let answer = [];
while (n <= 3) {
    answer[n] = math.floor(math.random() * 10);
    n = n + 1;
}
Number(answer.join(''));

let count = 0;
check.addEventListener('click', () => {
    const value = input.value;
    if (value && value.length === 4) {

    }
});