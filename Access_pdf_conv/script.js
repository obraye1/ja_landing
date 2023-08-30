const inputText = document.getElementById('inputText');
const convertBtn = document.getElementById('convertBtn');
const errorText = document.getElementById('errorText');
const successText = document.getElementById('successText');
const clearBtn = document.getElementById('clearBtn');

convertBtn.addEventListener('click', () => {
    const text = inputText.value.trim();

    if (text === '') {
        errorText.style.display = 'block';
        successText.style.display = 'none';
        inputText.setAttribute('aria-invalid', 'true');
        inputText.focus();
    } else {
        errorText.style.display = 'none';
        inputText.removeAttribute('aria-invalid');

        const pdf = new window.jsPDF();
        pdf.text(text, 10, 10);
        pdf.save('converted.pdf');

        successText.style.display = 'block';
    }
});

clearBtn.addEventListener('click', () => {
    inputText.value = '';
    errorText.style.display = 'none';
    successText.style.display = 'none';
    inputText.removeAttribute('aria-invalid');
});
