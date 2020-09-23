let palavra = ["d", "e", "s", "e", "r", "t", "o"]

let numeroDeErros = 0;

function ChuteDeLetra(letraEscolhida)
{
    let acertos = 0;

    //Checar se a letra escolhida aparece na paalvra secreta
    for(i = 0; i <= palavra.length; i++)
    {
        //Se a letra escolhida for igual, da um acerto e coloca a letra
        if(letraEscolhida == palavra[i])
        {
            acertos += 1;

            Acerto(letraEscolhida);
        }

        //Ao fim da palavra, se não tiver nenhum acerto, realizar um Erro de penalidade
        if(i == palavra.length)
        {
            if(acertos == 0)
            {
                let imagemForca = document.getElementById("nome do id da imagem da forca")

                Erro();

                imagemForca = "local/da/imagem" + numeroDeErros.toString() + ".png"
            }
        }
    }
}

//Funcao que irá colocar a letra correta na caixa
function Acerto(letra)
{
    let posicaoAtualDoAcerto = document.getElementById("id da posicao")

    posicaoAtualDoAcerto.textContent = letra.toString();
}

//Funcao que irá adicionar um membro ao homem palito, checando se chegou no limite
function Erro()
{
    numeroDeErros += 1;

    if(numeroDeErros == 6)
    {
        Perdeu();
    }
}

function Perdeu()
{
    alert("VOCÊ SUCUMBIU NA FORCA")
}