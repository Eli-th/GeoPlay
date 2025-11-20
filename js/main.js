/* Alternância Aluno/Professor */

const tabAluno = document.getElementById("tabAluno");
const tabProfessor = document.getElementById("tabProfessor");
const formAluno = document.getElementById("formAluno");
const formProfessor = document.getElementById("formProfessor");

if (tabAluno) {
    tabAluno.onclick = () => {
        tabAluno.classList.add("active");
        tabProfessor.classList.remove("active");
        formAluno.classList.remove("hidden");
        formProfessor.classList.add("hidden");
    };
}

if (tabProfessor) {
    tabProfessor.onclick = () => {
        tabProfessor.classList.add("active");
        tabAluno.classList.remove("active");
        formProfessor.classList.remove("hidden");
        formAluno.classList.add("hidden");
    };
}

/* MODO CLARO/ESCURO */

const toggle = document.getElementById("toggleMode");

if (toggle) {
    toggle.onclick = () => {
        document.body.classList.toggle("light");
        toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
    };
}

/* JOGO SIMPLES DE CLIQUE */

function spawnCircle() {
    const gameArea = document.getElementById("gameArea");
    if (!gameArea) return;

    // remove existing circles
    const existing = gameArea.querySelectorAll('.quiz-circle');
    existing.forEach(e => e.remove());

    const circle = document.createElement("div");
    circle.className = 'quiz-circle';
    circle.style.width = "70px";
    circle.style.height = "70px";
    circle.style.borderRadius = "50%";
    circle.style.background = "var(--neon)";
    circle.style.position = "absolute";
    circle.style.top = Math.random() * (gameArea.clientHeight - 80) + "px";
    circle.style.left = Math.random() * (gameArea.clientWidth - 80) + "px";
    circle.style.cursor = "pointer";
    circle.style.boxShadow = "0 6px 18px rgba(255,0,120,0.3)";

    circle.onclick = () => {
        circle.remove();
        spawnCircle();
    };

    gameArea.appendChild(circle);
}

window.addEventListener('load', () => {
    // try spawn if element present
    spawnCircle();
    // animated shapes (basic)
    const animatedBg = document.createElement('div');
    animatedBg.className = 'animated-bg';
    animatedBg.innerHTML = '<div class="shape-floating"></div><div class="shape-floating shape2"></div><div class="shape-floating shape3"></div>';
    document.body.appendChild(animatedBg);
});
