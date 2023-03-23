
const shareButton = document.getElementById("shareBtn");
const title = window.document.title;
const url = window.document.location.href;
shareButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({ title: `${title}`, url: `${url}` })
      .then(() => {
        console.log("Thanks For sharing!");
      })
      .catch(console.error);
  } else {
  alert("Your Device Not Supported For Sharing!! ")
  }
});
