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
    var pessoa1 = prompt("Por favor, coloque o nome do jogador 1:", "Jogador 1")

    if(pessoa1 == null || pessoa1 == "")
    {
        pessoa1 = "Jogador 1";
    }
    else
    {

    }

    //Propt Pegar nome do Jogador 2
    var pessoa2 = prompt("Por favor, coloque o nome do jogador 2:", "Jogador 2")

    if(pessoa1 == null || pessoa1 == "")
    {
        pessoa2 = "Jogador 2";
    }
    else
    {

    }

    //Jogador 1 é sempre o primeiro que joga!
    textoJogadorAtual = document.getElementById("nome-jogador-atual");

    textoJogadorAtual = "Jogador 1"

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
        caixaClicada.src = "imagemX";

        //Troca de peça, e logo, de jogador
        jogadorX = false;

        if(JogadorAtual == 1)
        {
            JogadorAtual == 2

            textoJogadorAtual = "Jogador 2"
        }
        else if(JogadorAtual == 2)
        {
            JogadorAtual == 1

            textoJogadorAtual = "Jogador 1"
        }
    }
    else
    {
        //Bota imagem correspondente
        caixaClicada.src = "imagemO";

         //Troca de peça, e logo, de jogador
        jogadorX = true;

        if(JogadorAtual == 1)
        {
            JogadorAtual == 2

            textoJogadorAtual = "Jogador 2"
        }
        else if(JogadorAtual == 2)
        {
            JogadorAtual == 1

            textoJogadorAtual = "Jogador 1"
        }
    }
}
