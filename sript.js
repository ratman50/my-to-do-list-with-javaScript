const clear = document.querySelector(".fa-times");
const btnClose = document.querySelector(".btn_close");
const addButton = document.querySelector(".add-form__button");
const itemContainer = document.querySelector(".list__content");
const listItem = document.querySelectorAll(".list__item");
clear.addEventListener("click", () => {
  document.querySelector(".add-form__input").value = "";
});

addButton.addEventListener("click", () => {
  let val = document.querySelector(".add-form__input").value;
  if (val.length != 0) {
    let nod = `<li class="list__item">${val} <i class="fas fa-times btn_close"></i></li>`;
    itemContainer.insertAdjacentHTML("beforeend", nod);
    let last = itemContainer.lastChild;
    if (itemContainer.childElementCount % 2 != 0) {
      last.classList.add("list__item_colored");
    }
    last.addEventListener("click", () => {
      document
        .querySelector(".list__item_checked")
        .classList.remove("list__item_checked");
      last.lastChild.classList.add("list__item_checked");
    });
    let close = last.lastChild;
    close.addEventListener("click", () => {
      last.style.display = "none";
    });
  }
});

listItem.forEach((item, index) => {
  const btnClose = item.querySelector(".btn_close");
  if (index % 2 == 0) {
    item.classList.add("list__item_colored");
  }
  item.addEventListener("click", () => {
    document
      .querySelector(".list__item_checked")
      .classList.remove("list__item_checked");
    item.classList.add("list__item_checked");
  });
  btnClose.addEventListener("click", () => {
    item.style.display = "none";
    color(index, listItem)
  });
});

function color(pos, list) {
    for (let i = pos+1; i < list.length; i++) {
        const element = list[i];
            element.classList.toggle("list__item_colored")

    }
}
