// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    // Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    // Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
    // Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    // Exemplo: bishop -> diagonals

// let king;
// let queen;
// let rook;
// let bishop;
// let knight;
// let pawn;

let pisce;

if (pisce == `king`.toLowerCase()) {
  console.log ("moves exactly one vacant square in any direction");
} else if (pisce == `queen`.toLowerCase()) {
  console.log ("moves any number of vacant squares in any direction");
} else if (pisce == `rook`.toLowerCase()) {
  console.log ("moves any number of vacant squares forwards, backwards, left, or right in a straight line");
} else if (pisce == `bishop`.toLowerCase()) {
  console.log ("moves any number of vacant squares diagonally in a straight line");
} else if (pisce == `knight`.toLowerCase()) {
  console.log ("moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner");
} else if (pisce == `pawn`.toLowerCase()) {
  console.log ("moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board");
} else {
  console.log ("that's not a valid pisce");
}
