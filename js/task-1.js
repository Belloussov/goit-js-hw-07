const liItem = document.querySelectorAll(".item");

console.log(`Number of category : ${liItem.length}`);

const titles = document.querySelectorAll("h2");

titles.forEach((title) => {
  const nameElement = title.textContent;
  console.log(`Category: ${nameElement}`);
  const elementUl = title.parentElement.querySelectorAll("ul > li");
  console.log(`Elements: ${elementUl.length}`);
});
