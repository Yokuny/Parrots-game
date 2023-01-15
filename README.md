# Projeto [P**arrots Card Game**](https://yokuny.github.io/projeto4-parrots/)

> Parrot Card Game, um jogo da memória temático com aleatoriedade, efeitos e transição, responsividade e papagaios dançantes!
> 

### [O projeto pode ser acessado online aqui <](https://yokuny.github.io/projeto4-parrots/)

![https://user-images.githubusercontent.com/105571583/212483647-0a5b1d82-97e0-40cb-ae0f-0267670d1226.png](https://user-images.githubusercontent.com/105571583/212483647-0a5b1d82-97e0-40cb-ae0f-0267670d1226.png)

# **Este projeto é sobre**

- **`Factory function`**

> É uma função que configura e `retornam` um novo `objeto` com funções e variáveis.
> 

E devido ao conceito de escopo, nenhuma das funções criadas dentro da `FactoryFunction` pode ser acessada fora dessa `função`, criando assim um controle privado do game, acessível apenas pelo `object` controlador do game.

- **`setTimeout`**

> Define um cronômetro que `executa` uma `função` ou código;
> 

`setTimeout` junto a `callBacks` nos possibilita a existência desse jogo, além de uma forma nova de se pensar sobre funções em `JavaScript` , nesse projeto foi usado nas `animações`, a `contagem de tempo` do decorrer do game, e um `tempo preciso` para que você apenas observe as cartas enquanto elas não voltem a serem escondidas.

- `callBack`

> **`Callbacks`** são funções passadas para dentro de outras funções a serem executadas de forma assíncrona ou posteriormente.
> 

Cada cartão recebe sua própria `função` de `callBack`, e é executada com o `click` do usuário dai então fazendo todo processo de verificação. 

## ✅ Requisitos

- Clique na carta
    - [ ]  Ao clicar em uma carta, ela deve ser virada.
    - [ ]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta.
    - [ ]  Caso seja a segunda carta virada, existem duas situações:
        - [ ]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo;
        - [ ]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente.
- Distribuição de cartas
    - [ ]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar
    - [ ]  O usuário só poderá inserir números pares no `prompt`, de 4 a 14.
    - [ ]  Após inserir um número de cartas válido, o jogo deverá inserir as
    cartas viradas pra baixo na página de forma que a distribuição seja
    aleatória.
- Geral
    - [ ]  Não utilize nenhuma biblioteca para implementar este projeto. Somente JavaScript puro.
    - [ ]  A cada requisito implementado faça um *commit* com uma mensagem descritiva do que você evoluiu.
- Layout
    - [ ]  Aplicar *layout* para *desktop* e *mobile*, seguindo o Figma.
- Imagens dos parrots
    - [ ]  É obrigatório que tanto a imagem do papagaio virado pra baixo quanto a imagem virada pra cima (gif) sejam implementadas como `tag img` (não deve ser um background CSS).
    - [ ]  Papagaios iguais devem necessariamente usar a mesma imagem como base
- Fim do jogo
    - [ ]  Quando o usuário terminar de virar todas as cartas corretamente, **deverá** ser exibido um `alert` com a mensagem `"Você ganhou em X jogadas!"` sendo X a quantidade de vezes que o usuário virou uma carta no jogo.