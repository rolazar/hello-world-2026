const images = document.getElementById("images");
const images = [
  { name: "Amber" },
  { name: "Vision of Peace" },
  { name: "Computers" },
];
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  images.innerHTML = "";
  images.innerHTML += `<p>${imageItem.name}</p>`;
}

images.innerHTML = "";

for (let i = 0; i < imagesList.length; i++) {
  const imageItem = imagesList[i];
  images.innerHTML += imageItem.name + ",";
  console.log(imageItem.name);
}
