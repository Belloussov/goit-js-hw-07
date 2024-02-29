const categoryItems = document.querySelectorAll(".item");

console.log(`Number of category : ${categoryItems.length}`);

const titles = document.querySelectorAll(".item h2");

titles.forEach((title) => {
  const nameElement = title.textContent;
  console.log(`Category: ${nameElement}`);
  const nestedListItems = title.nextElementSibling.querySelectorAll("li");
  console.log(`Elements: ${nestedListItems.length}`);
});
