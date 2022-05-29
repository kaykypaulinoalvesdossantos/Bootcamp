let input = gets().split(" ");
let n, x, y;

n = parseInt(input[0]);
x = parseInt(input[1]);
y = parseInt(input[2]);

let resultado = n / (x + y);
print(resultado.toFixed(2));