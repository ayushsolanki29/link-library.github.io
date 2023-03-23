function storeBookmark(siteName, siteURL) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let bookmarkID = Date.now().toString();
    bookmarks.push({
      id: bookmarkID,
      name: siteName,
      url: siteURL
    });
  
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  
  }
  let bookmarkForm = document.getElementById("bookmarkForm");
  let siteNameInput = document.getElementById("siteNameInput");
  let siteUrlInput = document.getElementById('siteUrlInput');
  let siteNameErrMsg = document.getElementById("siteNameErrMsg");
  let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
  let bookmarksList = document.getElementById("bookmarksList");
  
  siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
      siteUrlErrMsg.textContent = "Required*";
    } else {
      siteUrlErrMsg.textContent = "";
    }
  });
  
  siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
      siteNameErrMsg.textContent = "Required*";
    } else {
      siteNameErrMsg.textContent = "";
    }
  });
  
  function addBookmark() {
    let siteName = siteNameInput.value;
    let siteURL = siteUrlInput.value;
  
    let listItem = document.createElement("li");
    bookmarksList.appendChild(listItem);
  
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    let deleteBtn = document.createElement("button");
    let shareBtn = document.createElement("button"); // new button
  
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteURL;
    bookmarkUrl.href = siteURL;
    bookmarkUrl.target = "_blank";
  
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
  
    shareBtn.textContent = "Share"; // set text content of share button
    shareBtn.classList.add("share-btn"); // add class to share button
  
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(shareBtn); // append share button to list item
  
    storeBookmark(siteName, siteURL);
  
    // attach event listener to share button
    shareBtn.addEventListener("click", function(event) {
      event.preventDefault();
    
      let bookmarkUrls = [];
      let bookmarkNames = [];
    
      bookmarksList.querySelectorAll("li").forEach(function(listItem) {
        bookmarkUrls.push(listItem.querySelector("a").href);
        bookmarkNames.push(listItem.querySelector("p").textContent);
      });
    
      let combinedData = "URLs: " + bookmarkUrls.join(", ") + "\n\nNames: " + bookmarkNames.join(", ");
      let newWindow = window.open("share.html?id=" + Date.now(), "Bookmark Data", "width=600,height=400");
      newWindow.addEventListener("load", function() {
        newWindow.document.write("<pre>" + combinedData + "</pre>");
      });
    });
    
  }
  
  
  window.addEventListener("load", function() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  
    bookmarks.forEach(function(bookmark) {
      let listItem = document.createElement("li");
      bookmarksList.appendChild(listItem);
  
      let bookmarkName = document.createElement("p");
      let bookmarkUrl = document.createElement("a");
  
      bookmarkName.textContent = bookmark.name;
      bookmarkUrl.textContent = bookmark.url;
      bookmarkUrl.href = bookmark.url;
      bookmarkUrl.target = "_blank";
  
      listItem.appendChild(bookmarkName);
      listItem.appendChild(bookmarkUrl);
    });
  });
  
  bookmarksList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      let listItem = event.target.parentElement;
      let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  
      bookmarks = bookmarks.filter(function(bookmark) {
        return bookmark.id !== listItem.dataset.id;
      });
  
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      listItem.remove();
    }
  });
  
  function clearBookmarks() {
    let confirmClear = confirm("Do you really want to clear all bookmarks?");
  
    if (confirmClear) {
      bookmarksList.innerHTML = "";
      localStorage.clear();
    }
  }
  
  bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    let siteURL = siteUrlInput.value;
  
    try {
      let url = new URL(siteURL);
  
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        throw new Error("Invalid protocol");
      }
  
      addBookmark();
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  });
  
