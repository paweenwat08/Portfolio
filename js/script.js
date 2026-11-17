const pGrouper = document.querySelector("#p-grouper");
const experience = document.querySelector("#experience");
const strentghs = document.querySelector("#strentghs");

fetch("./data/role.json")
  .then((response) => response.json())
  .then((values) =>
    values.forEach((value) => {
      const section = document.createElement("section");
      section.classList.add("topic");

      const img = document.createElement("img");
      img.classList.add("logo");
      img.src = value.img;

      const para = document.createElement("p");
      para.innerHTML = value.name;

      section.appendChild(img);
      section.appendChild(para);

      pGrouper.appendChild(section);
    }),
  );
fetch("./Portfolio/data/experience.json")
  .then((response) => response.json())
  .then((values) =>
    values.forEach((value) => {
      const section = document.createElement("section");
      section.classList.add("box");

      const img = document.createElement("img");
      img.classList.add("side-img");
      img.src = value.path;

      const subSection = document.createElement("section");
      subSection.classList.add("explaination");

      const thirdSection = document.createElement("section");
      thirdSection.classList.add("topic");

      const logo = document.createElement("img");
      logo.classList.add("logo");
      logo.src = value.logo;

      const header = document.createElement("h3");
      header.innerHTML = value.header;

      const para = document.createElement("p");
      para.innerHTML = value.title;

      thirdSection.append(logo);
      thirdSection.append(header);

      subSection.append(thirdSection);
      subSection.append(para);

      section.appendChild(img);
      section.append(subSection);

      experience.appendChild(section);
    }),
  );
fetch("./Portfolio/data/strentghs.json")
  .then((response) => response.json())
  .then((values) =>
    values.forEach((value) => {
      const section = document.createElement("section");
      section.classList.add("box");

      const img = document.createElement("img");
      img.src = value.path;
      img.classList.add("side-img");

      const subSection = document.createElement("section");
      subSection.classList.add("explaination");

      const header = document.createElement("h3");
      header.innerHTML = value.header;

      const para = document.createElement("p");
      para.innerHTML = value.title;

      subSection.appendChild(header);
      subSection.appendChild(para);

      section.appendChild(img);
      section.appendChild(subSection);

      strentghs.appendChild(section);
    }),
  );

const stars = document.querySelectorAll(".star");

stars.forEach((item, index) => {
  item.addEventListener("click", () => {
    alert("คุณให้คะแนน " + (index + 1) + " ดาว");
  });
});
