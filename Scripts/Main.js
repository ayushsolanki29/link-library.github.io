document.querySelector("body").insertAdjacentHTML("beforeend", '<div class="loader"><div class="chaotic-orbit"></div></div>');window.addEventListener("load", function () {document.querySelector(".loader").remove();});
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