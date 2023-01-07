"use strict";
let filterArray = [];


showGallery(galleryArray);


function showGallery(currentArray) {
  document.getElementById("container").innerHTML = "";

  // Group items by heading
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
          <input type="checkbox" name="accordion" id="a${heading}">
          <label for="a${heading}"> ${headingNum}. ${heading}</label>
          <div class="content" id="content">
    `;
    headingNum++;
  
    itemsByHeading[heading].forEach((item, i) => {
      accordionHTML += `
          <div class="toolCard" id="toolCard">
         
            <h2 class="card__title"> ${item.title}</h2>
            <p class="card__content">${item.content}</p>
            <div class="card__date">Tags ${item.tags}</div>
            <a href='${item.link}' target="blank">
              <div class="card__arrow"><i class="fa-solid fa-arrow-right-long"></i></div>
              </a>
              <a><div class="card__like"><i class="fa fa-heart"></i></div></a>
             
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

  // Hide the hero container when the search text is not empty
  if (searchText !== "") {
    document.getElementById("hero").style.display = "none";
  } else {
    document.getElementById("hero").style.display = "block";
  }

   // Hide the hero container when the search text is not empty
  if (searchText === "") {
    document.getElementById("notfound").style.display = "none";
  } else {
    document.getElementById("notfound").style.display = "block";
  }
  // Show all elements in original array or only the matching elements in the filtered array
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

//loader
document.querySelector('body').insertAdjacentHTML("beforeend",'<div class="loader"><div class="chaotic-orbit"></div></div>');
window.addEventListener('load', function(){document.querySelector('.loader').remove()});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
