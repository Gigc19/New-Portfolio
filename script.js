// let TitleMain = document.getElementById("Title");
// let Pdescr = document.getElementById("pdescr3");
// let TitleMain2 = document.getElementById("Title3");
// let Pdescr2 = document.getElementById("pdescr4");
// fetch("http://localhost:3000/posts", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element);
//       let Title = document.createElement("h3");
//       let descr = document.createElement("p");
//       let Img = document.createElement("img");
//       Img.src = `${element.url}`;
//       Img.classList.add("imagesize");
//       descr.textContent = `${element.text}`;
//       Title.textContent = `${element.title}`;
//       document.getElementById("IconBlock").appendChild(Img);
//       Pdescr.appendChild(descr);
//       TitleMain.appendChild(Title);
//     });
//   })
//   .catch((error) => console.error("Error fetching posts:", error));

// fetch("http://localhost:3000/comments", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element);
//       let Title = document.createElement("h3");
//       let descr = document.createElement("p");
//       let Img = document.createElement("img");
//       Img.src = `${element.url}`;
//       Img.classList.add("imagesize");
//       descr.textContent = `${element.text}`;
//       Title.textContent = `${element.title}`;
//       document.getElementById("IconBlock2").appendChild(Img);
//       Pdescr2.appendChild(descr);
//       TitleMain2.appendChild(Title);
//     });
//   })
//   .catch((error) => console.error("Error fetching posts:", error));

document.addEventListener("DOMContentLoaded", function () {
  let BurgerBar = document.getElementById("burgerBar");
  let TopSide = document.getElementById("TopSide");

  BurgerBar.addEventListener("click", function () {
    this.classList.toggle("activeBar");
    TopSide.classList.toggle("activeTopside");
  });
});
const emailEl = document.getElementById("Email");

function emailValidation() {
  const emailValue = document.getElementById("Email").value;
  const ErrrEmail = document.getElementById("text-email");
  let Emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailValue.match(Emailpattern)) {
    ErrrEmail.textContent = "your email is valid";
    ErrrEmail.style.color = "green";
  } else {
    ErrrEmail.textContent = "your email is invalid";
    ErrrEmail.style.color = "red";
  }
  if (emailValue === "") {
    ErrrEmail.textContent = "";
  }
}
emailEl.addEventListener("keyup", emailValidation);
