//Variáveis
const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const imgCookieClosed = document.querySelector('#screen1 img');
let randomPhrase = Math.round(Math.random() * 10)

//Frases
let phrases = [
"O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
"Não importa quão devagar você vá, desde que você não pare.",
"Acredite em você e em tudo o que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo.",
"O futuro pertence àqueles que acreditam na beleza dos seus sonhos.",
"A diferença entre quem você é e quem você quer ser é o que você faz.",
"Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
"O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta." ,
"Acredite que você pode, assim você já está no meio do caminho.",
"Sonhe grande e ouse falhar.",
"Não espere por oportunidades extraordinárias. Agarre ocasiões comuns e torne-as grandes."
]

//Eventos
screen2.querySelector('button').addEventListener('click', btnReset)
imgCookieClosed.addEventListener('click', openCookie);

//funções
function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function newPhrase(){
  document.querySelector('#screen2 p').innerText = phrases[randomPhrase]
}

function openCookie(){
  toggleScreen()
  newPhrase()
}

function btnReset(){
  toggleScreen()
  randomPhrase = Math.round(Math.random() * 10)
}



