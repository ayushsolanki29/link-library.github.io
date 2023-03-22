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


});




