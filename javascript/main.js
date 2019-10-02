// var nome = "Carlos Oliveira",
// idade = 32,
// frase = "USA is the better place";
//alert('Nome: ' + nome + ", tem " + idade + " anos.");

// console.log(nome);
// console.log(idade);
// console.log(frase.replace("USA", "Canada"));

// var list = ['a', 'b', 'c'];
// list.pop();
// list.push('e');
// console.log(list);
// console.log(list.reverse());
// console.log(list.toString());
// console.log(list.join('-'));

// var fruit = {
//     name: "Apple",
//     collor: "red"
// };

// console.log(fruit.name);

// var fruits = [
//     {
//         name: "Grape",
//         collor: "Purple"
//     },
//     {
//         name: "Strawberry",
//         color: "Red"
//     }
// ];

// console.log(fruits);

// var age = prompt('how old is you?');

// if (age >= 18) {
//     alert('is an adult');
// } else {
//     alert('is a child');
// }

// var count = 0;
// while(count < 5) {
//     console.log(count);
//     count++;
// }

// for(var i = 0; i <= 5; i++) {
//     console.log(i);
// }

// var date = new Date();
// console.log(date.getMonth()+1);

// function sum(number1, number2) {
//     return number1 + number2;
// }

// function checkAge(age) {
//     var check = false;
//     if (age >= 18) {
//         check = !check;
//     }
//     return check;
// }

// console.log(sum(1, 2));
// var age = prompt('How old are you?')
// console.log(checkAge(age));

function changing(element) {
    console.log(element.value);
}

function load() {
    alert('Page loaded');
}

function showAlert(element) {
    // var element = document.getElementById('greating');
    element.innerHTML = "<b>Thaks for click</b>";
}

function changeText(element) {
    // document.getElementById('mouse').innerHTML = 'Thanks';
    element.innerHTML = 'Thanks';
}

function backText() {
    document.getElementById('mouse').innerHTML = 'Over the mouse here';
}

function startRedirect() {
    console.log('?');
    window.open("https://www.uol.com.br");
    window.location.href = "https://www.uol.com.br";
}