const stars = document.querySelectorAll(".star");

stars.forEach((item, index) => {
  item.addEventListener("click", () => {
    alert("คุณให้คะแนน " + (index + 1) + " ดาว");
  });
});
