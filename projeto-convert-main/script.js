//cotaçao de moeda do dia
const USD = 5.66
const EUR = 6.13
const GBP = 7.29

//obtendo os elementos do formulario
const amount = document.querySelector('#amount')
const form = document.querySelector('form')
const currency = document.querySelector('#currency')
const footer = document.querySelector('main footer')
const description = document.querySelector('#description')
const result = document.querySelector('#result')
// manipulando o input amount para receber apenas numeros
amount.addEventListener('input', () => {

  const hasCharactersRegex = /\D+/g

  amount.value = amount.value.replace(hasCharactersRegex,"")
})

//captando o event de de submit (enviar) do formulario
form.addEventListener('submit', (e) => {
  e.preventDefault()

 switch (currency.value) {
  case "USD":
    convertCurrency(amount.value, USD, "US$")
    break;
  case "EUR":
  convertCurrency(amount.value, EUR, "€")
  break;
  case "GBP":
  convertCurrency(amount.value, GBP, "£")
  break;
 
  default:
    break;
 }
})

//function para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrancyBRL(price)}`

    result.textContent = `${convertion(amount, price)} Reais`
    // result.textContent = `${}`
    //aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add('show-result')
  } catch (error) {
    console.log(error);
  }
}

//formata a moeda em Real Brasieliro 
function formatCurrancyBRL(value) {
  //convert para numero para utilizar o tolocalestring para formatar no padrao BRL (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style:"currency",
    currency:'BRL'
  })
}

//function de soma do valor da moeda e do preço
function convertion(n1, n2) {
  return n1 * n2
}

