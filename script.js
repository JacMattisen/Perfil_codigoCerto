// Efeito de digitação
const aboutText =
  "Em transição de carreira, sendo uma aspirante de Desenvolvedora Frontend apaixonada por aprender como criar interfaces intuitivas e acessíveis, se tornando esse meu objetivo de carreira. Busco constantemente aprender novas linguagens e quero contribuir com projetos que impactem positivamente a vida das pessoas.";
const motivationText =
  "Quero fazer parte de uma comunidade que compartilha conhecimento e trabalha em projetos significativos. Acredito no poder da tecnologia para transformar realidades e vidas das pessoas.";

function typeWriter(text, element, speed = 50, startDelay = 0) {
  let i = 0;
  setTimeout(() => {
    const typing = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);
  }, startDelay);
}

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing-effect");
  const motivationElement = document.getElementById("motivation-text");

  typeWriter(aboutText, typingElement);
  typeWriter(motivationText, motivationElement, 50, 2000);
});

// cards de interesse
document.querySelectorAll(".interest-item").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "var(--color-red)";
  });
  item.addEventListener("mouseout", () => {
    item.style.color = "var(--color-white)";
  });
});

//  foto de perfil
document.getElementById("profile-photo").addEventListener("click", () => {
  alert("🚀 Perfil em desenvolvimento!");
});
