document.querySelector("body").insertAdjacentHTML("beforeend", '<div class="loader"><div class="chaotic-orbit"></div></div>');window.addEventListener("load", function () {document.querySelector(".loader").remove();});
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
  }});