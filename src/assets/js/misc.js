// import $ from "jquery";
// import "bootstrap-star-rating";
// import "bootstrap-star-rating/themes/krajee-svg/theme.min";

(function () {
  //Add a body class once page has loaded
  //Used to add CSS transitions to elems
  //and avoids content shifting during page load
  window.addEventListener("load", function () {
    document.body.classList.add("page-loaded");
    
  });

  function copyRightYear() {
    let currentYear = new Date().getFullYear();
    let currentYearElem = document.querySelector(".currentyear");

    currentYearElem.innerHTML = `${currentYear}`;
  }
  copyRightYear();

  $(".my-rating").starRating({
    readOnly: true
  });
  

})();

