//let headers = document.getElementById('contact') задали цвет по переменной по йди
//headers.style.color = green

//const vertigo = document.querySelector('h1')здесь задали цвет селектору
//vertigo.style.color = red

function MyFunc(){
    const testarrel = 'abrakadabra'
    document.write(testarrel)
}

//const newarrel = [1,2,3,4,5,65,100]
//newarrel.soft()
//newarrel.reverse()
//console.log(newarrel) //выводим в консоли
//document.write(newarrel)// выводим  в документе отдельно
//alert(newarrel) //выводим в сплывающее окно


let favoriteMovie = prompt("Введите ваш любимый фильм:");

while (favoriteMovie !== "А зори здесь тихие") {
  favoriteMovie = prompt("Не тот фильмец... Попробуйте еще раз:");
}

alert("Добро пожаловать!"); 


let arr = ["a", "b", "c"];
arr[0] = "слово";
arr[1] = "Это предложение.";
arr[2] = "d";
console.log(arr); // ["слово", "Это предложение.", "d"]
alert(arr); // выводится всплывающее окно с содержимым массива






