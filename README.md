# Escrevendo as classes de um jogo

Desafio de lógica de programação da DIO feito em JavaScript.

A classe `Heroi` guarda o nome, a idade e o tipo de cada personagem.
O método `atacar()` mostra uma mensagem com o ataque correspondente ao tipo do herói.

## Tipos de herói

| Tipo | Ataque |
| --- | --- |
| Mago | Magia |
| Guerreiro | Espada |
| Monge | Artes marciais |
| Ninja | Shuriken |

O exemplo cria Kratos como guerreiro e Naruto como ninja.
Um laço `for` faz os dois atacarem durante duas rodadas.

## Como rodar

Com o Node.js instalado, execute no terminal da pasta do projeto:

```bash
node index.js
```

Para testar outros personagens, altere os valores nas chamadas de `new Heroi(...)`.
No código, os tipos devem ser escritos em minúsculas: `mago`, `guerreiro`, `monge` ou `ninja`.
