//реализация горячих клавиш

for (let i = 1; i <= 7; i++) {
    let check = document.querySelector(`.checkbox[id = "${i}"]`);
    document.addEventListener('keydown', function (event) {
        if (event.altKey && i == event.key) {
            if (check.hasAttribute('checked')) {

                check.removeAttribute('checked');
            } else {
                check.setAttribute('checked', 'checked');
            }
        }
    });
}

//реализация посветки имени поля ввода

const label = document.querySelectorAll('.main_label');
const input = document.querySelectorAll('.input_text');

for (i = 0; i < label.length; i++) {
    let num = i;
    for (j = 0; j < input.length; j++) {
        if (j === num) {
            input[j].addEventListener('focus', function () {
                label[num].classList.add('active');
            });
            input[j].addEventListener('blur', function () {
                label[num].classList.remove('active');
            });
        }
    }
}

//реализация перехода по полям ввода через Enter

for (let i = 0; i < input.length - 1; i++) {
    input[i].addEventListener('keydown', function (event) {
        if ('Enter' == event.key || 'Tab' == event.key  ) {
            event.preventDefault();
        }

        if (event.key === "Enter" && !event.shiftKey ) {
            input[i+1].focus();
        }
    })
}

//реализация переноса строки в многострочном поле ввода

const description = document.getElementById('description');

description.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
    if (event.shiftKey && event.key === "Enter") {
        description.value = description.value + "\n";
    }
})