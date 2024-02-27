const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(".gallery");
list.style.display = "flex";
list.style.flexDirection = "colum";
list.style.justifyContent = "centr";
list.style.width = "1440px";
list.style.paddingLeft = "144px";

const listItem = images.map((image) => {
  const itemsLi = document.createElement("li");
  itemsLi.classList.add("image-item");

  const imageItem = document.createElement("img");
  imageItem.src = image.url;
  imageItem.alt = image.alt;
  imageItem.width = 360;
  imageItem.height = 300;
  imageItem.style.margin = "12px";

  itemsLi.append(imageItem);

  return itemsLi;
});

list.append(...listItem);
