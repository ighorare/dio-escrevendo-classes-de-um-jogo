class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }
        console.log("o " + this.tipo + " atacou usando " + ataque);
    }
}

let heroi1 = new Heroi("Kratos", 30, "guerreiro");
let heroi2 = new Heroi("Naruto", 16, "ninja");
for (let rodada = 1; rodada <= 2; rodada++) {
    heroi1.atacar();
    heroi2.atacar();
}