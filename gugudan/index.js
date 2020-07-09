document.querySelector('#click').addEventListener("click", () => {
    const a = document.querySelector('#first').value;
    const b = document.querySelector('#second').value;
    const r = document.querySelector('#result'); 
    
    if(a) {
        if (b) {
            const c = a * b;
            r.textContent = c;
        } else {
            r.textContent = '두번째 값을 입력하세요.';
        }
    } else {
        r.textContent = '첫번째 값을 입력하세요.';
    }
});