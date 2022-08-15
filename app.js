const { getStatusAndAverege, validarAprovacao, calcularMediaExame } = require('./modules/getStatusAndAverage')
var readline = require('readline')
const { exit } = require('process')
var entraDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada de dados
entraDados.question('Digite o nome do aluno\n', function (nome1) {
    const aluno = nome1
    if (aluno == '') {
        console.log('Voce deve preencher o nome do aluno')
        exit()
    } else
        entraDados.question('Digite o nome do professor\n', function (nome2) {
            const professor = nome2
            if (professor == '') {
                console.log('Voce deve preencher o nome do Professor')
                exit()
            } else
                entraDados.question('Digite o sexo do aluno(FEMININO OU MASCULINO)\n', function (sexo1) {
                    const sexoAluno = sexo1.toUpperCase
                    if (sexoAluno == '') {
                        console.log('Voce precisa preencher o sexo')
                        exit()
                    } else
                        entraDados.question('Digite o sexo do professor(FEMININO OU MASCULINO)\n', function (sexo2) {
                            const sexoProfessor = sexo2.toUpperCase
                            if (sexoProfessor == '') {
                                console.log('Voce deve preencher o sexo do professor')
                                exit()
                            } else
                                entraDados.question('Digite o nome do curso\n', function (nomeCurso) {
                                    const curso = nomeCurso
                                    if (curso == '') {
                                        console.log('Voce deve preecher o nome do curso')
                                        exit()
                                    } else

                                        entraDados.question('Digite o nome da disciplina\n', function (nomeDisciplina) {
                                            const disciplina = nomeDisciplina
                                            if (disciplina == '') {
                                                console.log('Voce dev preencher o nome da disciplina')
                                                exit()
                                            } else
                                                entraDados.question('Digite a primeira nota \n', function (valor1) {
                                                    let nota1 = parseFloat(valor1)
                                                    entraDados.question('Digite a segunda nota\n', function (valor2) {
                                                        let nota2 = parseFloat(valor2)
                                                        entraDados.question('Digite a terceira nota\n', function (valor3) {
                                                            let nota3 = parseFloat(valor3)
                                                            entraDados.question('Digite a quarta nota\n', function (valor4) {
                                                                let nota4 = parseFloat(valor4)
                                                                const media = getStatusAndAverege(nota1, nota2, nota3, nota4)
                                                                const statusAluno = validarAprovacao(media)
                                                                //Saida de dados
                                                                if (sexo1 == `MASCULINO` && sexo2 == `MASCULINO`) {
                                                                    console.log(`O aluno ${aluno} foi ${statusAluno} na disciplina ${disciplina}`)
                                                                    console.log(`curso: ${curso}`)
                                                                    console.log(`Professor :${professor}`)
                                                                    console.log(`Notas do aluno: ${nota1},${nota2},${nota3},${nota4}`)
                                                                    console.log(`Media Final: ${media}`)
                                                                } else if (sexo1 == `FEMININO` && sexo2 == `FEMININO`) {
                                                                    console.log(`A aluna ${aluno} foi ${statusAluno} na disciplina ${disciplina}`)
                                                                    console.log(`curso: ${curso}`)
                                                                    console.log(`Professora :${professor}`)
                                                                    console.log(`Notas do aluno: ${nota1},${nota2},${nota3},${nota4}`)
                                                                    console.log(`Media : ${media}`)
                                                                } else if (sexo1 == `FEMININO` && sexo2 == `MASCULINO`) {
                                                                    console.log(`A aluna ${aluno} foi ${statusAluno} na disciplina ${disciplina}`)
                                                                    console.log(`curso: ${curso}`)
                                                                    console.log(`Professor :${professor}`)
                                                                    console.log(`Notas do aluno: ${nota1},${nota2},${nota3},${nota4}`)
                                                                    console.log(`Media  ${media}`)

                                                                } else if (sexo1 == `MASCULINO` && sexo2 == `FEMININO`) {
                                                                    console.log(`O aluno ${aluno} foi ${statusAluno} na disciplina ${disciplina}`)
                                                                    console.log(`curso: ${curso}`)
                                                                    console.log(`Professora :${professor}`)
                                                                    console.log(`Notas do aluno: ${nota1},${nota2},${nota3},${nota4}`)
                                                                    console.log(`Media Final: ${media}`)
                                                                }
                                                                if (statusAluno == 'Exame') {
                                                                    entraDados.question('Nota do Exame\n', function (valor5) {
                                                                        let notaExame = parseFloat(valor5)
                                                                        const mediaExame = calcularMediaExame(notaExame, media)
                                                                        console.log(`nota do exame e: ${mediaExame}`)
                                                                    })
                                                                }

                                                                //console.log(media)
                                                                //console.log(calcularMediaExame)
                                                                //console.log(statusAluno)
                                                            })
                                                        })
                                                    })
                                                })
                                        })
                                })
                        })
                })
        })
})
