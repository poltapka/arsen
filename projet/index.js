document.addEventListener("DOMContentLoaded", () => {
  const tryNowButton = document.getElementById("try-now");
  const explorerButton = document.getElementById("explorer");

  tryNowButton.addEventListener("click", () => {
    alert("Попробуй еще раз, возможно повезет!");
  });

  explorerButton.addEventListener("click", () => {
    alert("Вы изучаете больше о жизни Арсена и его мечтах.");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const discordLink = document.getElementById("discord-link");

  discordLink.addEventListener("click", (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    alert("Discord Арсена: ren06145 \nДобавляйтесь, если уважаете маньяков");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const girlfriendButton = document.getElementById("girlfriend-discord-btn");
  const discordForm = document.getElementById("girlfriend-discord-form");
  const submitButton = document.getElementById("submit-discord");
  const discordInput = document.getElementById("girlfriend-discord-input");

  // Показать форму при нажатии на кнопку "Для девушек"
  girlfriendButton.addEventListener("click", () => {
    discordForm.style.display = "block";
  });

  // Обработать отправку Discord
  submitButton.addEventListener("click", () => {
    const discordName = discordInput.value.trim();
    if (discordName) {
      alert(`Ваш Discord: ${discordName} успешно добавлен!`);
      discordForm.style.display = "none"; // скрыть форму после отправки
      discordInput.value = ""; // очистить поле ввода
    } else {
      alert("Пожалуйста, введите ваш Discord!");
    }
  });
});
if (discord-link) {
  alert(`Ваш Discord: ${discord-link} успешно добавлен!`);
}