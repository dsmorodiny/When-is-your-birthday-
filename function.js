function calculateBirthday() {
  const birthdayInput = document.getElementById("birthdayInput");
  const errorMessage = document.getElementById("errorMessage");
  const result = document.getElementById("result");

  const today = new Date();
  const birthday = new Date(birthdayInput.value);
  if (birthdayInput.value === "") {
    errorMessage.style.display = "block";
    result.textContent = "";
  } else {
    errorMessage.style.display = "none";
    birthday.setFullYear(today.getFullYear());
    if (birthday < today) {
      birthday.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = birthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    result.textContent = `До вашего дня рождения осталось ${diffDays} дней`;
  }
}
