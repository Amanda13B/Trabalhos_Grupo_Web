let nomePrimeiroJogador;
let nomeSegundoJogador;

let JogadorAtual = 1;
let textoJogadorAtual;
let textoTurnoDe;

let jogadorX = true;

let podeJogar = false;

let arrayCasas = [];
let arrayXO = ["-", "-", "-", "-", "-", "-", "-", "-", "-",];

function NovoJogo()
{
    //Limpar o jogo anterior
    LimparCaixas();

    //Propt Pegar nome do Jogador 1
    nomePrimeiroJogador = prompt("Por favor, coloque o nome do jogador 1:", "Jogador 1");

    if(nomePrimeiroJogador == null || nomePrimeiroJogador == "")
    {
        nomePrimeiroJogador = "Jogador 1";
    }
    else
    {

    }

    //Propt Pegar nome do Jogador 2
    nomeSegundoJogador = prompt("Por favor, coloque o nome do jogador 2:", "Jogador 2");

    if(nomeSegundoJogador == null || nomeSegundoJogador == "" || nomeSegundoJogador == nomePrimeiroJogador)
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
    if(arrayCasas.length != 0)
    {
        //Passa por cada casa que foi selecionada anteriormente e deixa vazio
        for(let i = 0; i < arrayCasas.length; i++)
        {
            let caixa = document.getElementById("casa" + arrayCasas[i]);

            caixa.src = "Imagens/Vazio.png";

            //Deixar eles jogarem
            podeJogar = true;
        }

        //Tirar os numeros do Array
        arrayCasas = [];
        arrayXO = ["-", "-", "-", "-", "-", "-", "-", "-", "-",];

        textoTurnoDe = document.getElementById("texto-guia");

        textoTurnoDe.innerHTML = "É a vez de: ";
    }
    else
    {
        //Deixar eles jogarem
        podeJogar = true;
    }
}

function Jogada(numeroDaCasa)
{
    if(podeJogar)
    {
        //Pega a casa que o jogador clicou
        let caixaClicada = document.getElementById("casa" + numeroDaCasa);

        let casaRepetida = false;

        if(arrayCasas.length != 0)
        {
            for(let i = 0; i < arrayCasas.length; i++)
            {
                if(numeroDaCasa == arrayCasas[i])
                {
                    casaRepetida = true;
                }
            }

            if(!casaRepetida)
            {
                arrayCasas.push(numeroDaCasa);

                if(jogadorX)
                {
                    arrayXO[numeroDaCasa] = "X";
                }
                else
                {
                    arrayXO[numeroDaCasa] = "O";
                }
                
            }
        }
        else 
        {
            arrayCasas.push(numeroDaCasa);

            if(jogadorX)
            {
                arrayXO[numeroDaCasa] = "X";
            }
            else
            {
                arrayXO[numeroDaCasa] = "O";
            }
        }    

        //Caso não seja repetida a casa escolhida
        if(casaRepetida == false)
        {
            textoJogadorAtual = document.getElementById("nome-jogador-atual");

            //Dependendo do que o jogador pegou, vai colocar um X ou um O dependendo de quem é o turno
            if(jogadorX)
            {
                //Bota imagem correspondente
                caixaClicada.src = "Imagens/X.png";

                //Troca de peça, e logo, de jogador
                jogadorX = false;

                if(JogadorAtual == 1)
                {
                    JogadorAtual = 2;
                }
                else if(JogadorAtual == 2)
                {
                    JogadorAtual = 1;
                }
            }
            else if(jogadorX == false)
            {
                //Bota imagem correspondente
                caixaClicada.src = "Imagens/Circulo.png";

                //Troca de peça, e logo, de jogador
                jogadorX = true;

                if(JogadorAtual == 1)
                {
                    JogadorAtual = 2;
                }
                else if(JogadorAtual == 2)
                {
                    JogadorAtual = 1;
                }
            }

            ChecarVitória(textoJogadorAtual);

            if(JogadorAtual == 1)
            {
                textoJogadorAtual.innerHTML = nomePrimeiroJogador;
            }
            else
            {
                textoJogadorAtual.innerHTML = nomeSegundoJogador;
            }

        }
        else
        {
            alert("Essa casa já foi selecionada!");
        }
    }
    else
    {

    }

}

function ChecarVitória(nomeJogadorAtual)
{
    //Condicoes de Vitoria X
    if(arrayXO[0] == "X" && arrayXO[1] == "X" && arrayXO[2] == "X")
    {
        XWins(nomeJogadorAtual);
    }
    else if(arrayXO[0] == "X" && arrayXO[3] == "X" && arrayXO[6] == "X")
    {
        XWins(nomeJogadorAtual);
    }
    else if(arrayXO[0] == "X" && arrayXO[4] == "X" && arrayXO[8] == "X")
    {
        XWins(nomeJogadorAtual);
    }
    else if(arrayXO[2] == "X" && arrayXO[4] == "X" && arrayXO[6] == "X")
    {
        XWins(nomeJogadorAtual);
    }
    else if(arrayXO[6] == "X" && arrayXO[7] == "X" && arrayXO[8] == "X")
    {
        XWins(nomeJogadorAtual);
    }
    else if(arrayXO[3] == "X" && arrayXO[4] == "X" && arrayXO[5] == "X")
    {
        XWins(nomeJogadorAtual);
    }
    else if(arrayXO[2] == "X" && arrayXO[5] == "X" && arrayXO[8] == "X")
    {
        XWins(nomeJogadorAtual);
    }
    else if(arrayXO[1] == "X" && arrayXO[4] == "X" && arrayXO[7] == "X")
    {
        XWins(nomeJogadorAtual);
    }

    //Condicoes de Vitoria O
    else if(arrayXO[0] == "O" && arrayXO[1] == "O" && arrayXO[2] == "O")
    {
        OWins(nomeJogadorAtual);
    }
    else if(arrayXO[0] == "O" && arrayXO[3] == "O" && arrayXO[6] == "O")
    {
        OWins(nomeJogadorAtual);
    }
    else if(arrayXO[0] == "O" && arrayXO[4] == "O" && arrayXO[8] == "O")
    {
        OWins(nomeJogadorAtual);
    }
    else if(arrayXO[2] == "O" && arrayXO[4] == "O" && arrayXO[6] == "O")
    {
        OWins(nomeJogadorAtual);
    }
    else if(arrayXO[6] == "O" && arrayXO[7] == "O" && arrayXO[8] == "O")
    {
        OWins(nomeJogadorAtual);
    }
    else if(arrayXO[3] == "O" && arrayXO[4] == "O" && arrayXO[5] == "O")
    {
        OWins(nomeJogadorAtual);
    }
    else if(arrayXO[2] == "O" && arrayXO[5] == "O" && arrayXO[8] == "O")
    {
        OWins(nomeJogadorAtual);
    }
    else if(arrayXO[1] == "O" && arrayXO[4] == "O" && arrayXO[7] == "O")
    {
        OWins(nomeJogadorAtual);
    }
    else if(arrayCasas.length == 9)
    {
        Empate();
    }
    else
    {

    }
}

function XWins(nomeJogadorAtual)
{
    podeJogar = false;

    textoJogadorAtual = document.getElementById("nome-jogador-atual");
    textoTurnoDe = document.getElementById("texto-guia");

    textoTurnoDe.innerHTML = "Vitória de: " + nomeJogadorAtual.innerHTML;
}

function OWins(nomeJogadorAtual)
{
    podeJogar = false;

    textoJogadorAtual = document.getElementById("nome-jogador-atual");
    textoTurnoDe = document.getElementById("texto-guia");

    textoTurnoDe.innerHTML = "Vitória de: " + nomeJogadorAtual.innerHTML;
}

function Empate()
{
    podeJogar = false;

    textoJogadorAtual = document.getElementById("nome-jogador-atual");
    textoTurnoDe = document.getElementById("texto-guia");

    textoTurnoDe.innerHTML = "Vitória de: "
    textoJogadorAtual = "Ninguém!"
}