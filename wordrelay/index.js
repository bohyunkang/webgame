const btn = document.querySelector('#button');

const dictionary = [];

btn.addEventListener('click', () => {
    const wordTag = document.querySelector('#word');
    const word = wordTag.textContent;
    const inputTag = document.querySelector('#input');
    const errorTag = document.querySelector('#error');
    const input = inputTag.value;
    if (dictionary.includes(input)) {
        errorTag.textContent = '중복입니다!'
    } else {
        if (word[word.length - 1] === input[0]) {
            wordTag.textContent = input;
            errorTag.textContent = '';
            inputTag.value = '';
            inputTag.focus();
            dictionary.push(input);
        } else {
            errorTag.textContent = '땡!'
            inputTag.focus();
        }
    }
    
});