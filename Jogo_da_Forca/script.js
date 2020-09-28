let palavra = ["D", "E", "S", "E", "R", "T", "O"]

let numeroDeErros = 0;

let podeJogar = true;

function ChuteDeLetra(letraEscolhida)
{
    //Só funciona o teste de letra se você ainda pode jogar = não perdeu
    if(podeJogar)
    {
        let acertos = 0;

        //Checar se a letra escolhida aparece na paalvra secreta
        for(i = 0; i < palavra.length; i++)
        {
            //Se a letra escolhida for igual, da um acerto e coloca a letra
            if(letraEscolhida == palavra[i])
            {
                acertos += 1;

                Acerto(letraEscolhida, i);
            }

            //Ao fim da palavra, se não tiver nenhum acerto, realizar um Erro de penalidade
            if(i == palavra.length)
            {
                if(acertos == 0)
                {
                    Erro();
                }
            }
        }

    }   
}

//Funcao que irá colocar a letra correta na caixa
function Acerto(letra, posicao)
{
    let posicaoAtualDoAcerto = document.getElementById("letra" + posicao)

    posicaoAtualDoAcerto.textContent = letra.toString();
}

//Funcao que irá adicionar um membro ao homem palito, checando se chegou no limite
function Erro()
{
    let imagemForca = document.getElementById("forca")

    numeroDeErros += 1;

    imagemForca = "Imagens/boneco" + numeroDeErros.toString() + ".png"

    //Caso o jogador chegue no limite de erros e veja o seu fim, ele perde
    if(numeroDeErros == 6)
    {
        Perdeu();
    }
}

function Perdeu()
{
    //Nào deixa o jogador chutar letras mais ao fazer a bool ficar falsa
    podeJogar = false;

    alert("VOCÊ SUCUMBIU NA FORCA")
}