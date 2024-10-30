let angle = 30; // Ângulo dos ramos
let length = 100; // Tamanho inicial dos ramos
let currentStep = 0; // Controle de quantos ramos foram desenhados
let branches = []; // Array para armazenar todos os ramos a serem desenhados

function setup() {
  createCanvas(windowWidth, windowHeight); // Cria a tela do tamanho da janela
  background(0); // Fundo preto
  stroke(255); // Cor das linhas: branco
  strokeWeight(4); // Define a espessura da linha

  // Calcula todos os ramos antes de desenhá-los
  calculateTree(width / 2, height, -90, length);

  frameRate(1000); // Controla a velocidade da animação (30 frames por segundo)
}

function draw() {
  if (currentStep < branches.length) {
    // Desenha o próximo ramo na lista
    let branch = branches[currentStep];
    line(branch.x1, branch.y1, branch.x2, branch.y2);
    currentStep++;
  } else {
    noLoop(); // Para a animação quando todos os ramos forem desenhados
  }
}

// Função recursiva para calcular as posições dos ramos
function calculateTree(x, y, angle, length) {
  if (length < 10) return; // Condição de parada

  // Calcula as novas coordenadas do ramo
  let x2 = x + cos(radians(angle)) * length;
  let y2 = y + sin(radians(angle)) * length;

  // Armazena o ramo em vez de desenhá-lo diretamente
  branches.push({ x1: x, y1: y, x2: x2, y2: y2 });

  // Calcula os ramos da esquerda e da direita
  calculateTree(x2, y2, angle - 30, length * 0.7); // Ramo à esquerda
  calculateTree(x2, y2, angle + 30, length * 0.7); // Ramo à direita
}


let leafSize = 10; // Tamanho das folhas


function calculateTree(x, y, angle, length) {
    if (length < 10) {
      fill(242, 0, 0); // Cor das folhas: verde
      noStroke(1); // Sem contorno para as folhas
      ellipse(x, y, leafSize, leafSize); // Desenha uma folha
      return; // Condição de parada
    }
    // Calcula as novas coordenadas do ramo
    let x2 = x + cos(radians(angle)) * length;
    let y2 = y + sin(radians(angle)) * length;
    // Armazena o ramo em vez de desenhá-lo diretamente
    branches.push({ x1: x, y1: y, x2: x2, y2: y2 });
    // Calcula os ramos da esquerda e da direita
    calculateTree(x2, y2, angle - 30, length * 0.7); // Ramo à esquerda
    calculateTree(x2, y2, angle + 30, length * 0.7); // Ramo à direita
  }
  

  function setup() {
    createCanvas(windowWidth, windowHeight); // Cria a tela do tamanho da janela
    background(0); // Fundo preto
    stroke(255); // Cor das linhas: branco
    strokeWeight(2); // Define a espessura da linha
    // Calcula todos os ramos antes de desenhá-los
    calculateTree(width / 2, height, -90, length);
    frameRate(30); // Controla a velocidade da animação (30 frames por segundo)
  }
  
  function draw() {
    if (currentStep < branches.length) {
      // Desenha o próximo ramo na lista
      let branch = branches[currentStep];
      stroke(255); // Cor das linhas: branco
      line(branch.x1, branch.y1, branch.x2, branch.y2);
      currentStep++;
    } else {
      noLoop(); // Para a animação quando todos os ramos forem desenhados
    }
  }
  