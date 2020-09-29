let nomePrimeiroJogador;
let nomeSegundoJogador;

let JogadorAtual = 1;
let textoJogadorAtual

let jogadorX = true;

function NovoJogo()
{
    //Limpar o jogo anterior
    LimparCaixas();

    //Propt Pegar nome do Jogador 1
    nomePrimeiroJogador = prompt("Por favor, coloque o nome do jogador 1:", "Jogador 1")

    if(nomePrimeiroJogador == null || nomePrimeiroJogador == "")
    {
        nomePrimeiroJogador = "Jogador 1";
    }
    else
    {

    }

    //Propt Pegar nome do Jogador 2
    var nomeSegundoJogador = prompt("Por favor, coloque o nome do jogador 2:", "Jogador 2")

    if(nomeSegundoJogador == null || nomeSegundoJogador == "")
    {
        nomeSegundoJogador = "Jogador 2";
    }
    else
    {

    }

    //Jogador 1 é sempre o primeiro que joga!
    textoJogadorAtual = document.getElementById("nome-jogador-atual");

    textoJogadorAtual.innerHTML = nomePrimeiroJogador;

    //Jogador 1 vai jogar com X ou O?
    if(confirm("Jogador 1 - Escolha Ok para jogar com o [X], Escolhar Cancelar para jogar com o [O]"))
    {
        jogadorX = true;
    }
    else
    {
        jogadorX = false;
    }
}

function LimparCaixas()
{

}

function Jogada(numeroDaCasa)
{
    //Pega a casa que o jogador clicou
    let caixaClicada = document.getElementById("casa" + numeroDaCasa);

    //Dependendo do que o jogador pegou, vai colocar um X ou um O dependendo de quem é o turno
    if(jogadorX)
    {
        //Bota imagem correspondente
        //caixaClicada.src = "imagemX";

        //Troca de peça, e logo, de jogador
        jogadorX = false;

        alert("X");

        if(JogadorAtual == 1)
        {
            JogadorAtual == 2

            textoJogadorAtual.innerHTML = nomeSegundoJogador;
        }
        else if(JogadorAtual == 2)
        {
            JogadorAtual == 1

            textoJogadorAtual.innerHTML = nomePrimeiroJogador;
        }
    }
    else if(jogadorX == false)
    {
        //Bota imagem correspondente
        //caixaClicada.src = "imagemO";

         //Troca de peça, e logo, de jogador
        jogadorX = true;

        alert("O");

        if(JogadorAtual == 1)
        {
            JogadorAtual == 2

            textoJogadorAtual.innerHTML = nomeSegundoJogador;
        }
        else if(JogadorAtual == 2)
        {
            JogadorAtual == 1

            textoJogadorAtual.innerHTML = nomePrimeiroJogador;
        }
    }
}
