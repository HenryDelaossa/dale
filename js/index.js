
const sectThree = document.querySelector(".sectionThreeHome_divCardsConten");

fetch("./dbcards.json").then(response => {
  return response.json();
})
  .then((dbCards) => {
    dbCards.forEach((card) => {
      const divChild_DivCtn = document.createElement("div");
      divChild_DivCtn.classList.add("divCardConten");
      // add to DOM Cards
      divChild_DivCtn.innerHTML = `
                      <i class="categCards">${card.categ}</i>
                      <img src=${card.img} alt="imagen categoria">
                      <div>
                          <h4 class="titCard">${card.tittle}</h4>
                          <p>$${card.resumInfo}</p>
                          <a href="#">ver detalles...</a>
                      </div>`;
      // append a contenedor cards
      sectThree.appendChild(divChild_DivCtn);
      // styles a categ cards
      let categ = document.querySelectorAll(".categCards");
      categ.forEach((i) => {
        if (i.innerText == "Diamante") {
          i.style.backgroundColor = "#c8e5eb";
          i.style.color = "gray";
        }
        if (i.innerText == "Azul") i.style.backgroundColor = "#1a9ded";
        if (i.innerText == "Platino") i.style.backgroundColor = "#7f7679";
        if (i.innerText == "Oro") i.style.backgroundColor = "#ffbf00";
      });
    });
  });

// ajuste modif menu toggle
const navTogg = document.getElementById("btnNavTogg");
const spannNavTogg = document.querySelector(".ctnSpanNav");
const spansMenHamb = document.querySelector(".spansMenHamb")
navTogg.addEventListener("click", () => {
  spannNavTogg.classList.toggle("ctnSpanNavInac");
  spansMenHamb.classList.toggle("spansMenHambInac")
});

