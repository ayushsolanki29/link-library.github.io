"use strict";

document.querySelector("body").insertAdjacentHTML("beforeend", '<div class="loader"><div class="chaotic-orbit"></div></div>');

window.addEventListener("load", function () {
  document.querySelector(".loader").remove();
});

let filterArray = [];
showGallery(galleryArray);

function showGallery(currentArray) {
  document.getElementById("container").innerHTML = "";
  const itemsByHeading = currentArray.reduce((groups, item) => {
    (groups[item.heading] = groups[item.heading] || []).push(item);
    return groups;
  }, {});

  let accordionHTML = "";
  let headingNum = 1;

  for (let heading in itemsByHeading) {
    accordionHTML += `
    <ul class="accordion" id="accordion">
      <li id="list">
        <input type="radio" class="radio" name="accordion" id="a${heading}"> 
        <label for="a${heading}"> ${headingNum}. ${heading}</label> 
        <div class="content" id="content">
    `;
    headingNum++;

    itemsByHeading[heading].forEach((item, i) => {
      accordionHTML += `
          <div class="toolCard" id="toolCard">
            <h2 class="card__title"> ${item.title}</h2>         
            <p class="card__content">${item.content}</p>
            <div class="card__date" >Tags ${item.tags}</div>
            <a href='${item.link}' target="blank">
              <div class="card__arrow"><i class="fa-solid fa-arrow-right-long"></i></div>
            </a>
          </div>
      `;
    });
    accordionHTML += `
        </div>
      </li>
    </ul>
    `;
  }
  document.getElementById("container").innerHTML = accordionHTML;
}

const lowH1 = document.getElementById("low");
const cow = document.getElementById("cow");
cow.textContent =  galleryArray.length + " websites";
lowH1.appendChild(cow);

document.getElementById("searchBar").addEventListener("keyup", function () {
  const searchText = document.getElementById("searchBar").value.toLowerCase().trim();
  const filteredArray = galleryArray.filter(function (a) {
    return (
      a.title.toLowerCase().trim().includes(searchText) ||
      a.heading.toLowerCase().trim().includes(searchText) ||
      a.content.toLowerCase().trim().includes(searchText) ||
      (a.tags && a.tags.toLowerCase().trim().includes(searchText)) ||
      a.link.toLowerCase().trim().includes(searchText)
    );
  });

  if (searchText !== "") {
    document.getElementById("hero").style.display = "none";
  } else {
    document.getElementById("hero").style.display = "block";
  }
  if (searchText === "") {
    document.getElementById("notfound").style.display = "none";
  } else {
    document.getElementById("notfound").style.display = "block";
  }
  if (searchText === "") {
    showGallery(galleryArray);
  } else {
    if (filteredArray.length === 0) {
      document.getElementById("notfound").style.display = "block";
      document.getElementById("container").innerHTML = "";
    } else {
      showGallery(filteredArray);
      document.getElementById("notfound").style.display = "none";
    }
  }
});
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
const shareButton = document.getElementById("shareBtn");
const title = window.document.title;
const url = window.document.location.href;
shareButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({ title: `${title}`, url: `${url}` })
      .then(() => {
        console.log("thanks For sharing!");
      })
      .catch(console.error);
  } else {
   document.write("Please use Mobile Device");
  }
});
