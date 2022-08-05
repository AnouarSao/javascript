import { partyParrots } from "./partyparrot.js";



const searchQuery = document.querySelector("#query");
const searchButton = document.querySelector("#searchbtn");

const listElement = document.querySelector("#list");

searchButton.addEventListener("click", function () {
  let url =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

  if (listElement.children.length > 0) {
    
    Array.from(listElement.children).forEach((child) => child.remove());
  }

  url += searchQuery.value;
  console.log("url :>> ", url);

  axios.get(url).then((response) => {

    for (let data of response.data.query.search) {
      createCard(data);
      console.log("data.pageid :>> ", data.pageid);
    }
  });
});

const createCard = (data) => {
  const pageId = data.pageid;
  // card
  const cardMain = document.createElement("div");
  cardMain.classList.add("card");

  // title
  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card__title", "mt05");
  cardTitle.innerText = data.title;

  // link to page
  const linkToWiki = document.createElement("a");

  linkToWiki.href = `http://en.wikipedia.org/?curid=${pageId}`;

  // image
  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  const randomGif = partyParrots[Math.floor(Math.random() * partyParrots.length)];
  cardImage.src = `./img/${randomGif}`;

  linkToWiki.append(cardImage);
  cardMain.append(cardTitle, linkToWiki);

  listElement.appendChild(cardMain);
};