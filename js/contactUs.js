export function contactUsFormEmail() {
  emailjs.init("Ojhh9GgUUb3TvplK9");

const form = document.querySelector(".contactUs__form");
const button = document.querySelector(".contactUs__button");
const buttonText = document.querySelector(".contactUs__button-text");
const statusBlock = document.querySelector(".contactUs__status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // loading state
  button.classList.add("loading");
  buttonText.textContent = "Отправка...";
  statusBlock.className = "contactUs__status";
  statusBlock.textContent = "";

  try {
    await emailjs.sendForm(
      "service_dxb3nuw",
      "template_x91400l",
      form
    );

    statusBlock.textContent = "Заявка успешно отправлена. Мы скоро свяжемся с вами.";
    statusBlock.classList.add("show", "success");

    form.reset();

  } catch (error) {
    console.error(error);

    statusBlock.textContent = "Ошибка отправки. Попробуйте ещё раз.";
    statusBlock.classList.add("show", "error");

  } finally {
    button.classList.remove("loading");
    buttonText.textContent = "Отправить заявку";
  }
});
}