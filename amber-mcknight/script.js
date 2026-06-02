const images = document.getElementById("images");
const images = [
  { name: "Amber" },
  { name: "Vision of Peace" },
  { name: "Computers" },
];

images.innerHTML = "";

for (let i = 0; i < imagesList.length; i++) {
  const imageItem = imagesList[i];
  images.innerHTML += imageItem.name + "<br>";
  console.log(imageItem.name);
}
// I know that adding a <br> will line the names in column
