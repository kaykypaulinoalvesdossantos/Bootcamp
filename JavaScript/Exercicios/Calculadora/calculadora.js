function calculadora() {
  const operacao = prompt(
    "Escolha uma operação: \n 1 - soma {+}\n 2 - subtração {-}\n 3 - multiplicação {*}\n 4 - divisão real {/} \n 5 - divisão inteira {%}\n 6 - potenciação {**}"
  );

  if (!operacao || operacao >= 7) {
    alert("erro digite novamente");
    calculadora();
  } else {
    let n1 = Number(prompt("insira um valor"));
    let n2 = Number(prompt("insira outro valor"));
    let resultado;

    if (!n1 || !n2) {
      alert("erroorrr");
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subitracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoreal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaointeira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt("deseja fazer nova operação\n 1 - sim \n 2 - não ");

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("ate a proxima");
        } else {
          alert("digite uma opção valida");
          opcao();
        }
      }
    }

    if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subitracao();
    } else if (operacao == 3) {
      multiplicacao();
    } else if (operacao == 4) {
      divisaoreal();
    } else if (operacao == 5) {
      divisaointeira();
    } else if (operacao == 6) {
      potenciacao();
    }
  }
}
calculadora();
