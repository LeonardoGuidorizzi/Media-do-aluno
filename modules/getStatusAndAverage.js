const { exit } = require("process")

function getStatusAndAverege(valor1, valor2, valor3, valor4) {
  let nota1 = valor1
  let nota2 = valor2
  let nota3 = valor3
  let nota4 = valor4
  if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
    console.log('coloque um numero menor do que 100 e maior do que 0' )
    exit()
  }
  const media = (nota1 + nota2 + nota3 + nota4) / 4
  //const statusAluno = validarAprovacao(media)//




  return media


}
function validarAprovacao(mediaAluno) {
let media = parseFloat(mediaAluno)
  if (media == 'NaN') {
    return false
  }
  else if (media >= 70.0) {
    return 'Aprovado'
  }
  else if (media >= 50.0 && media <= 69.9) {

    return 'Exame'
  } else if (media < 50.0){
    return 'Reprovado'
  }
}
function calcularMediaExame(valor5, media) {
  //let nota5 = valor5
  let valorMedia = valor5
  const mediaExame = (valorMedia + media) / 2
  if(mediaExame >= 60.0){
    console.log(`voce passou!`)
  }else{
    console.log('voce reprovado')
  }
  return mediaExame
  

}
module.exports = { getStatusAndAverege, validarAprovacao, calcularMediaExame }