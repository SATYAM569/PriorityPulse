const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let btnAdd = document.querySelector("#go");
let table = document.querySelector("#tabl");
let t = 3;

let num = document.querySelector("#fname_0");
let nameInput = document.querySelector("#fname_1");
let ageInput = document.querySelector("#fname_2");
let countryInput = document.querySelector("#fname_3");
let contact = document.querySelector("#fname_4");
let lvl = document.querySelector("#fname_5");

btnAdd.addEventListener("click", () => {
  let s_n = t + 1;
  let name = fname_1.value;
  let age = fname_2.value;
  let country = fname_3.value;
  let con_1 = fname_4.value;
  let lvl_1 = fname_5.value;

  let template = `
                <tr>
                    <td>${s_n}</td>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${country}</td>
                    <td>${lvl_1}</td>
                    <td>${con_1}</td>
                </tr>`;

  table.innerHTML += template;
});
