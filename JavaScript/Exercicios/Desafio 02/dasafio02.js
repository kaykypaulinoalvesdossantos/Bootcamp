let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

 
var price = 0;

    if (X ==  1) {
      price  = 4.00;
    }
    else if (X == 2) {
      price  =  4.50;
    }
    else if (X == 3) {
      price  =  5.00;
    }
    else if (X == 4) {
      price  =  2.00;
    }
    else if (X == 5) {
      price  =  1.50;
    }

    price = price * Y
    print( "Total: R$ "  + price.toFixed(2));