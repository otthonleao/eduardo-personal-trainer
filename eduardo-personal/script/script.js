var imcSubmit = document.querySelector('.imc-button');
imcSubmit.addEventListener('click', calculaImc)

function calculaImc() {
  var peso = document.querySelector('#imc-peso').value;
  var altura = document.querySelector('#imc-altura').value;
  
  var pesoValido = true;
  var alturaValida = true;
  
  //Inserção de dados incorretos
  if (peso < 0 || peso > 200) {
    pesoValido = false;
    let erro = document.querySelector('#erro-peso')
    erro.innerHTML = 'Peso inválido!'
    let clicar = document.querySelector('#imc-peso')
    clicar.addEventListener('click', function (){
      erro.innerHTML = '';
    })
  }

  if (altura < 0 || altura > 3) {
    alturaValida = false;
    let erro = document.querySelector('#erro-altura')
    erro.innerHTML = 'Altura Inválida!'
    let clicar = document.querySelector('#imc-altura')
    clicar.addEventListener('click', function (){
      erro.innerHTML = '';
    })
  }

  if (peso.length == 0) {
    pesoValido = false;
    let erro = document.querySelector('#erro-peso')
    erro.innerHTML = 'Peso não pode ficar em branco!'
    let clicar = document.querySelector('#imc-peso')
    clicar.addEventListener('click', function (){
      erro.innerHTML = '';
    })
  }

  if (altura.length == 0) {
    alturaValida = false;
    let erro = document.querySelector('#erro-altura')
    erro.innerHTML = 'Altura não pode ficar em branco!'
    let clicar = document.querySelector('#imc-altura')
    clicar.addEventListener('click', function (){
      erro.innerHTML = '';
    })
  }
  
  //Condições Positivas para calcular o IMC
  if(pesoValido == true && alturaValida == true) {
    imc = (peso / (altura * altura)).toFixed(2)
    
    if (imc < 17) {
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> e está classificado como <strong class='resultado-destaque'>Muito Abaixo do Peso</strong>.<br><br>Pode ocasionar: queda no cabelo, infertilidade, ausência mestrual.`
      
    } else if (imc >= 17 && imc < 18.5) {
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> e está classificado como <strong class='resultado-destaque'>Abaixo do Peso</strong>.<br><br>Pode ocasionar: Fadiga, stress, ansiedade.`
      

    } else if (imc >= 18.5 && imc < 25) {
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> e está classificado como <strong class='resultado-destaque'>Peso Normal</strong>.<br><br>Pode ocasionar: Menor risco de doenças cardíacas e vasculares.`
      

    } else if (imc >= 25 && imc < 30) {
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> e está classificado como <strong class='resultado-destaque'>Acima do Peso</strong>.<br><br>Pode ocasionar: Fadiga, má circulação, varizes.`
      

    } else if (imc >= 30 && imc < 35) {
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> e está classificado como <strong class='resultado-destaque'>Obesidade Grau I</strong>.<br><br>Pode ocasionar: Diabetes, angina, infarto, aterosclerose.`
     

    } else if (imc >= 35 && imc < 40) {
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> e está classificado como <strong class='resultado-destaque'>Obesidade Grau II</strong>.<br><br>Pode ocasionar: Apneia do sono, falta de ar.`
      

    } else {
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> e está classificado como <strong class='resultado-destaque'>Obesidade Grau III</strong>.<br><br>Pode ocasionar: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.`
      
    }
  }
}